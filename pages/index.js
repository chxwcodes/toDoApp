import Head from 'next/head';
import { useState } from 'react';
import uuid from '../utilities/uuid';

//components
import List from './components/List';

export default function Home() {
  //LIST state for all tasks
  const [toDoList, setToDoList] = useState([
    {id: uuid(), text: 'Play some Apex 🎮', isDone: false},
    { id: uuid(), text: 'Drink some boba 🧋', isDone: false}
  ]);

  return (
    <div>
      <Head>
        <title>To-Do-a-Loo 📝</title>
      </Head>

      <main>
        <h1>To-Do-a-Loo 📝</h1>

        {/* 👇 FORM comp for new task addage */}

        {/* 👇 LIST comp for all tasks shown below */}
        <List toDoList={toDoList}/>
      </main>

      <footer>
        <p>&copy; Chow's messy creatshuns</p>
      </footer>
    </div>
  )
}
