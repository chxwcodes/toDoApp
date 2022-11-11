import Head from 'next/head';
import { useState, useEffect } from 'react';
//import fetch from 'isomorphic-unfetch';

//components
import AddToDo from '../components/AddToDo';
import List from '../components/List';

export default function Home() {
  //LIST state for all tasks
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    async function getTasks(){
      const response = await fetch('http://localhost:3000/api/data');
      const { data } = await response.json();

      setToDoList(data);
    }

    getTasks();
  }, [toDoList])

  return (
    
    <div>
      <Head>
        <title>To-Do-a-Loo 📝</title>
      </Head>

      <main>
        <h1>To-Do-a-Loo 📝</h1>

        {/* 👇 FORM comp for new task addage */}
        <AddToDo />

        {/* 👇 LIST comp for all tasks shown below */}
        {toDoList && <List toDoList={toDoList} />}
      </main>

      <footer>
        <p>&copy; Chow's messy creatshuns</p>
      </footer>
    </div>
  )
}
