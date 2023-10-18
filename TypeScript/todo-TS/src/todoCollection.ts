import { TodoItem } from "./todoItem";

// shape types
type ItemCounts = {
  total: number;
  incomplete: number;
};

export class TodoCollection {
  private nextId: number = 1;
  protected itemMap = new Map<number, TodoItem>();

  constructor(public userName: string, public todoItems: TodoItem[] = []) {
    todoItems.forEach((item) => this.itemMap.set(item.id, item));
  }

  addTodoItem(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }
    this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
    return this.nextId;
  }

  getTodoById(id: number): TodoItem {
    return this.itemMap.get(id);
  }

  getTodoItems(includeComplete: boolean): TodoItem[] {
    return [...this.itemMap.values()].filter(
      (item) => includeComplete || !item.complete
    );
  }

  markComplete(id: number, complete: boolean) {
    const todoItem = this.getTodoById(id);
    if (todoItem) {
      todoItem.complete = complete;
    }
  }

  removeComplete() {
    this.itemMap.forEach((item) => {
      item.complete && this.itemMap.delete(item.id);
    });
  }

  getItemCounts(): ItemCounts {
    return {
      total: this.itemMap.size,
      incomplete: this.getTodoItems(false).length,
    };
  }
}
