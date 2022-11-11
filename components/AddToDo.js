import { useState } from "react";

export default function AddToDo() {
  const [newTask, setNewTask] = useState('');

  async function postTasks() {
    try {
      const res = await fetch('http://localhost:3000/api/data', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'text': newTask,
          'isDone': false
        })
      })
    }
    catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    postTasks();
    setNewTask('');
  }


  return (
    <form onSubmit={(e) => {handleSubmit(e)}}>
      <label htmlFor="newTask">I need to do...</label>
      <input type="text" id="newTask" value={newTask} onChange={(e) => setNewTask(e.target.value)} required/>

      <button>Add Task</button>
    </form>
  )
}