"use client"

import { useEffect, useState } from "react"
import { CheckCircle2, Circle, Plus, Filter, Trash2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import getTasks from "@/services/task/getTasks"
import { useParams } from "react-router-dom"
import { Task, TaskDB } from "@/types/task"
import createTask from "@/services/task/createTask"
import deleteTask from "@/services/task/deleteTask"
import checkTask from "@/services/task/checkTask"


export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState("")
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all")
  const { id } = useParams();

  const toggleTaskStatus = async (_id: string) => {
  try {
    // Encuentra la tarea que se va a actualizar
    const taskToUpdate = tasks.find((task) => task._id === _id);
    if (!taskToUpdate) {
      console.error("Tarea no encontrada");
      return;
    }

    // Actualiza el estado local inmediatamente (optimistic update)
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === _id ? { ...task, completed: !task.completed } : task
      )
    );

    // Llama a la función `checkTask` para actualizar el backend
    await checkTask(_id,{ ...taskToUpdate, completed: !taskToUpdate.completed });

    // Refresca los datos desde el backend para asegurar consistencia
    await getTasksData();
  } catch (error) {
    console.error("Error al cambiar el estado de la tarea:", error);

    // Si falla, revierte el cambio local para mantener la consistencia
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === _id ? { ...task, completed: !task.completed } : task
      )
    );
  }
};

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true
    if (filter === "pending") return !task.completed
    if (filter === "completed") return task.completed
    return true
  })

  const addTask = async () => {
    if (newTask.trim() === "") return
    const today = new Date();
    const task: TaskDB = {
      userId: id || "",
      title: newTask,
      description: "",
      completed: false,
      date: today.toLocaleDateString('es-AR').toString(),
    }
    await createTask(task)

    setNewTask("")
    getTasksData()
  }

  const getTasksData = async () => {
    if(!id) return;
    const data = await getTasks(id)
    setTasks(data)
  }


  const handleDelete = async (id:string) => {
    try {
      await deleteTask(id)
      getTasksData()
    } catch (error) {
      console.error("error al borrar la tarea:", error)
    }
  }


  useEffect(() => {
    getTasksData()
  },[id])

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-800">Tareas</h2>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 gap-1 text-gray-500">
              <Filter className="h-4 w-4" />
              Filtrar
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setFilter("all")}>Todas</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilter("pending")}>Pendientes</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilter("completed")}>Completadas</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Agregar nueva tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="text-sm"
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask()
          }}
        />
        <Button size="sm" onClick={addTask} className="bg-blue-500 hover:bg-blue-600">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-2 max-h-[280px] overflow-y-auto pr-2">
        {filteredTasks.length === 0 ? (
          <p className="text-sm text-gray-500 text-center py-4">No hay tareas para mostrar</p>
        ) : (
          filteredTasks.map((task) => (
            <div key={task._id} className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <button onClick={() => toggleTaskStatus(task._id)} className="mt-0.5 mr-3 flex-shrink-0">
                {task.completed ? (
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                ) : (
                  <Circle className="h-5 w-5 text-gray-300" />
                )}
              </button>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className={`text-sm ${task.completed ? "text-gray-500 line-through" : "text-gray-800"}`}>
                    {task.title}
                  </p>
                  <button className="hover:text-red-500" onClick={() => handleDelete(task._id)}><Trash2Icon/></button>
                </div>
                <p className="text-xs text-gray-400 mt-1">{task.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
