import {React,useState} from 'react';
import './App.css';
import TaskColumn from './components/TaskColumn';
import TaskForm from './components/TaskFrom';

function App() {
  const [tasks,setTasks] = useState([]);
  console.log(tasks);

  return (
   <div className='app'>
   <TaskForm  setTasks={setTasks}/>
   <main className='app_main'>
      <TaskColumn title="To Do" icon="" tasks={tasks} status = "todo"/>
      <TaskColumn title="Doing" icon=""  tasks={tasks} status = "doing"/>
      <TaskColumn title="Done" icon =""  tasks={tasks} status = "done"/>
   </main>
   </div>
  );
}

export default App;
