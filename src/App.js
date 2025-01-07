import {React,useState} from 'react';
import './App.css';
import TaskColumn from './components/TaskColumn';
import TaskForm from './components/TaskFrom';

function App() {
  const [tasks,setTasks] = useState([]);
  console.log(tasks);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((tasks,index) => index !== taskIndex)
    setTasks(newTasks);
    alert("Task Deleted Successfully");
  };

  return (
   <div className='app'>
   <TaskForm  setTasks={setTasks}/>
   <main className='app_main'>
      <TaskColumn title="To Do" icon="" tasks={tasks} status = "todo" handleDelete = {handleDelete} />
      <TaskColumn title="Doing" icon=""  tasks={tasks} status = "doing" handleDelete = {handleDelete} />
      <TaskColumn title="Done" icon =""  tasks={tasks} status = "done" handleDelete = {handleDelete} />
   </main>
   </div>
  );
}

export default App;
