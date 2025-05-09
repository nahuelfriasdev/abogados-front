"use client"

import { useState } from "react"
import { CheckCircle2, Circle, Plus, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Task = {
  id: string
  description: string
  completed: boolean
  createdAt: Date
}

export default function TaskList() {
  // En una aplicación real, estos datos vendrían de una API o base de datos
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", description: "Revisar contrato de arrendamiento", completed: true, createdAt: new Date(2023, 4, 15) },
    { id: "2", description: "Solicitar documentación adicional", completed: false, createdAt: new Date(2023, 4, 18) },
    { id: "3", description: "Preparar demanda inicial", completed: false, createdAt: new Date(2023, 4, 20) },
    { id: "4", description: "Agendar reunión de seguimiento", completed: false, createdAt: new Date(2023, 4, 22) },
  ])

  const [newTask, setNewTask] = useState("")
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all")

  const toggleTaskStatus = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const addTask = () => {
    if (newTask.trim() === "") return

    const task: Task = {
      id: Date.now().toString(),
      description: newTask,
      completed: false,
      createdAt: new Date(),
    }

    setTasks([...tasks, task])
    setNewTask("")
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true
    if (filter === "pending") return !task.completed
    if (filter === "completed") return task.completed
    return true
  })

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
            <div key={task.id} className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <button onClick={() => toggleTaskStatus(task.id)} className="mt-0.5 mr-3 flex-shrink-0">
                {task.completed ? (
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                ) : (
                  <Circle className="h-5 w-5 text-gray-300" />
                )}
              </button>
              <div className="flex-1">
                <p className={`text-sm ${task.completed ? "text-gray-500 line-through" : "text-gray-800"}`}>
                  {task.description}
                </p>
                <p className="text-xs text-gray-400 mt-1">{task.createdAt.toLocaleDateString()}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
