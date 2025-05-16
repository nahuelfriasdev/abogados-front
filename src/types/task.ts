export type Task = {
  _id:string
  userId: string
  title: string
  description: string
  completed: boolean
  date: string
}

export type TaskDB = {
  userId: string
  title: string
  description: string
  completed: boolean
  date: string
}