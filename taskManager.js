export function addTask(tasks, title) {
  const cleanTitle = title.trim();

  if (!cleanTitle) {
    throw new Error("Task title cannot be empty");
  }

  return [
    ...tasks,
    {
      id: tasks.length + 1,
      title: cleanTitle,
      completed: false
    }
  ];
}

export function completeTask(tasks, id) {
  return tasks.map(task =>
    task.id === id ? { ...task, completed: true } : task
  );
}

export function deleteTask(tasks, id) {
  return tasks.filter(task => task.id !== id);
}
