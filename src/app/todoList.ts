import { TodoItem } from './todoItem'
export class TodoList {
  public user: string
  private todoItems: TodoItem[]
  constructor (user: string, todoItems: TodoItem[] = []) {
    this.user = user
    this.todoItems = todoItems
  }

  get items (): readonly TodoItem[] {
    return this.todoItems
  }

  addItem (task: string) {
    this.todoItems.push(new TodoItem(task))
  }
}
