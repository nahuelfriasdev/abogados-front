import { CheckSquare, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Task } from "@/types/task"
import checkTask from "@/services/task/checkTask"
import { useEffect, useState } from "react"


interface TaskChecklistProps {
  tasks: Task[]
  setTask: (task: Task | Task[] | null) => void;
}

export default function TaskChecklist({ tasks, setTask }: TaskChecklistProps) {
  const [localTasks, setLocalTasks] = useState<Task[]>(tasks);

  useEffect(() => {
    setLocalTasks(tasks);
  }, [tasks]);

  const toggleTaskStatus = async (_id: string) => {

    try {
      const taskToUpdate = localTasks.find((task) => task._id === _id);
      if (!taskToUpdate) {
        console.error("Tarea no encontrada");
        return;
      }

      const updatedTasks = localTasks.map((task) =>
        task._id === _id ? { ...task, completed: !task.completed } : task
      );
      setLocalTasks(updatedTasks);

      await checkTask(_id, { ...taskToUpdate, completed: !taskToUpdate.completed });

      setTask(updatedTasks);
    } catch (error) {
      console.error("Error al cambiar el estado de la tarea:", error);

      setLocalTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === _id ? { ...task, completed: !task.completed } : task
        )
      );
    }
  };

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2 text-slate-800">
          <CheckSquare className="h-5 w-5 text-blue-800" />
          Tareas Urgentes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-[280px] overflow-y-auto">
          {tasks.map((task) => (
            <div key={task._id} className="flex items-start gap-3 pb-3 border-b border-slate-100 last:border-0">
              <Checkbox id={task._id} onClick={() => toggleTaskStatus(task._id)} checked={task.completed} />
              <div className="grid gap-1 w-full">
                <label
                  htmlFor={task._id}
                  className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex justify-between ${
                    task.completed ? "text-slate-500 line-through" : "text-slate-800"
                  }`}
                >
                  <span>{task.title}</span>
                  <span>{task.clientName ? `${task.clientName.name} ${task.clientName.username}` : ""}</span>

                </label>
                <div className="flex items-center text-xs text-slate-500">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{task.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="text-sm text-blue-800 hover:text-blue-900 font-medium">Ver todas las tareas</button>
        </div>
      </CardContent>
    </Card>
  )
}
