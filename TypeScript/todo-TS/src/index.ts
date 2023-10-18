import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import inquirer from "inquirer";
import { JsonTodoCollection } from "./jsonTodoCollection";

// create a few test items
let todos: TodoItem[] = [
  new TodoItem(1, "Buy Flowers"),
  new TodoItem(2, "Get Shoes"),
  new TodoItem(3, "Collect Tickets"),
  new TodoItem(4, "Call Joe", true),
];

// create a new collection and add our todos
// let collection: TodoCollection = new TodoCollection("Adam", todos);

// create a new collection and add our todos from the json file applying the persistent collection class
let collection: TodoCollection = new JsonTodoCollection("Adam", todos);

// print the current state of the collection
// console.clear();
// console.log(`${collection.userName}'s Todo List`);

// adding a new todo item to the collection
let newId: number = collection.addTodoItem("Go for run");

// print out the item 2
// let todoItem2: TodoItem = collection.getTodoById(2);
// todoItem2.printDetails();

// print out the item 5
// let todoItemNew: TodoItem = collection.getTodoById(newId);
// todoItemNew.printDetails();

// print out all the collection items included the completed items
// collection.getTodoItems(true).forEach(item => item.printDetails());

// mark the item 5 as completed
collection.markComplete(5, true);

// remove the completed items
// collection.removeComplete();

// print out all the collection items included the completed items if there is any
// collection.getTodoItems(true).forEach(item => item.printDetails());

// print out the total and incomplete items
// console.log(`Total taks: ${collection.getItemCounts().total}, Pending Tasks: ${collection.getItemCounts().incomplete}`);

// if the user wants to see the completed items
let showCompleted: boolean = true;

function displayTodoList(): void {
  console.log(
    `${collection.userName}'s Todo List ` +
      `(${collection.getItemCounts().incomplete} items to do)`
  );
  collection.getTodoItems(showCompleted).forEach((item) => item.printDetails());
}

// prompt the user to choose an option
enum Commands {
  Add = "Add New Task",
  Complete = "Complete Task",
  Toggle = "Show/Hide Completed",
  Purge = "Remove Completed Tasks",
  Quit = "Quit",
}

function promptAdd(): void {
  console.clear();
  inquirer
    .prompt({
      type: "input",
      name: "add",
      message: "Enter task:",
    })
    .then((answers) => {
      if (answers["add"] !== "") {
        collection.addTodoItem(answers["add"]);
      }
      promptUser();
    });
}

function promptComplete(): void {
  console.clear();
  inquirer
    .prompt({
      type: "checkbox",
      name: "complete",
      message: "Mark Tasks Complete",
      choices: collection.getTodoItems(showCompleted).map((item) => ({
        name: item.task,
        value: item.id,
        checked: item.complete,
      })),
    })
    .then((answers) => {
      let completedTasks = answers["complete"] as number[];
      collection
        .getTodoItems(true)
        .forEach((item) =>
          collection.markComplete(
            item.id,
            completedTasks.find((id) => id === item.id) != undefined
          )
        );
      promptUser();
    });
}

function promptUser(): void {
  console.clear();
  displayTodoList();
  inquirer
    .prompt({
      type: "list",
      name: "command",
      message: "Choose option",
      choices: Object.values(Commands),
    })
    .then((answers) => {
      switch (answers["command"]) {
        case Commands.Toggle:
          showCompleted = !showCompleted;
          promptUser();
          break;

        case Commands.Add:
          promptAdd();
          break;

        case Commands.Complete:
          if (collection.getItemCounts().incomplete > 0) {
            promptComplete();
          } else {
            promptUser();
          }
          break;

        case Commands.Purge:
          collection.removeComplete();
          promptUser();
          break;
      }
    });
}

promptUser();
