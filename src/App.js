import './App.css';
import TaskColumn from './components/TaskColumn';
import TaskForm from './components/TaskFrom';

function App() {
  return (
   <div className='app'>
   <TaskForm />
   <main className='app_main'>
      <TaskColumn title="To Do" icon=""/>
      <TaskColumn title="Doing"/>
      <TaskColumn title="Done" />
   </main>
   </div>
  );
}

export default App;
