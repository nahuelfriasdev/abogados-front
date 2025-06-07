export type Task = {
  _id:string
  userId: string
  title: string
  description: string
  completed: boolean
  date: string
  clientName: {
    name: string,
    username: string
  }
}

export type TaskDB = {
  userId: string
  title: string
  description: string
  completed: boolean
  date: string
}