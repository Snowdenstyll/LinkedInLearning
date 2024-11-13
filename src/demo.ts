
interface todoItem {
    id: number,
    title: string,
    status?: todoStatus,
    completedOn?: Date
}

enum todoStatus {
    todo = "todo",
    inProgress = "in-progress",
    done = "done"
}

let item1: todoItem = {
    id: 1,
    title: "Learn HTML",
    status: todoStatus.done,
    completedOn: new Date("2021-09-11")
}

let item2: todoItem = {
    id: 2,
    title: "Learn TypeScript",
    status: todoStatus.inProgress
}

let item3: todoItem = {
    id: 3,
    title: "Write the best app in the world",
    status: todoStatus.todo
}

let todoItems: todoItem[] = [item1, item2, item3]

function addTodoItem(todo: string): todoItem{
    const id = getNextId(todoItems)

    const newTodo = {
        id,
        title: todo,
        status: todoStatus.todo,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId(items: todoItem[]) {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))