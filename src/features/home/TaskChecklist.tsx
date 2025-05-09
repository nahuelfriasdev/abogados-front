import { CheckSquare, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

interface Task {
  id: string
  title: string
  completed: boolean
  dueDate: string
}

interface TaskChecklistProps {
  tasks: Task[]
}

export default function TaskChecklist({ tasks }: TaskChecklistProps) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2 text-slate-800">
          <CheckSquare className="h-5 w-5 text-blue-800" />
          Tareas Urgentes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-start gap-3 pb-3 border-b border-slate-100 last:border-0">
              <Checkbox id={task.id} checked={task.completed} />
              <div className="grid gap-1 w-full">
                <label
                  htmlFor={task.id}
                  className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                    task.completed ? "text-slate-500 line-through" : "text-slate-800"
                  }`}
                >
                  {task.title}
                </label>
                <div className="flex items-center text-xs text-slate-500">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{task.dueDate}</span>
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
