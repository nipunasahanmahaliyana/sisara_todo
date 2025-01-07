import './App.css';
import TaskColumn from './components/TaskColumn';
import TaskForm from './components/TaskFrom';

function App() {
  return (
   <div className='app'>
   <TaskForm />
   <main className='app_main'>
      <TaskColumn />
      <section className='task_column'>Task 2</section>
      <section className='task_column'>Task 3</section>
   </main>
   </div>
  );
}

export default App;
