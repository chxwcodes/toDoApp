export default function List({ toDoList }) {
  return (
    <ol>
      {toDoList.map(task => {
        return (
          <li key={task.id}>
            {/* 👇checkbox and task text */}
            <div>
              <p>{task.text}</p>
            </div>

            {/* 👇control panel */}
            <div>
              <button>Edit</button>
              <button>Delete</button>
              <button>Done</button>
            </div>
          </li>
        )
      })}
    </ol>
  )
}