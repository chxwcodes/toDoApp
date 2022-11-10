import Head from 'next/head';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

//components
import List from '../components/List';

export default function Home() {
  //LIST state for all tasks
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    async function getTasks(){
      const response = await fetch('http://localhost:3000/api/data');
      const { data } = await response.json();
      console.log(data)

      setToDoList(data);
    }

    getTasks();
  }, [])

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
