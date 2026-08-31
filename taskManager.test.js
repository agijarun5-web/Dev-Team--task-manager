import test from "node:test";
import assert from "node:assert/strict";
import { addTask, completeTask, deleteTask } from "./taskManager.js";

test("adds a task to an empty list", () => {
  const tasks = addTask([], "Complete assignment");
  assert.equal(tasks.length, 1);
  assert.equal(tasks[0].title, "Complete assignment");
});

test("removes extra spaces from a task title", () => {
  const tasks = addTask([], "  Study JavaScript  ");
  assert.equal(tasks[0].title, "Study JavaScript");
});

test("rejects an empty task title", () => {
  assert.throws(() => addTask([], "   "), {
    message: "Task title cannot be empty"
  });
});

test("marks the selected task as completed", () => {
  const tasks = [
    { id: 1, title: "Task one", completed: false },
    { id: 2, title: "Task two", completed: false }
  ];

  const updatedTasks = completeTask(tasks, 2);

  assert.equal(updatedTasks[1].completed, true);
  assert.equal(updatedTasks[0].completed, false);
});

test("deletes the selected task", () => {
  const tasks = [
    { id: 1, title: "Task one", completed: false },
    { id: 2, title: "Task two", completed: false }
  ];

  const updatedTasks = deleteTask(tasks, 1);

  assert.equal(updatedTasks.length, 1);
  assert.equal(updatedTasks[0].id, 2);
});

test("deleting the only task leaves an empty list", () => {
  const tasks = deleteTask(
    [{ id: 1, title: "Task one", completed: false }],
    1
  );

  assert.equal(tasks.length, 0);
});
