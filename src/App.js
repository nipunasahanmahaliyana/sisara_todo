import React, { useState, useEffect, useRef } from 'react';
import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "../src/components/TaskFrom";
import UpdateTaskModal from "./components/UpdateModal";
import WelcomeScreen from "./components/Welcome";
import { AiOutlineClose } from 'react-icons/ai';
import ListIcon from '../src/assets/list.png';
import DoneIcon from '../src/assets/Done.png';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(newTasks);
    toast.success("Task deleted successfully!");
  };

  const handleDoneDelete = (taskIndex) => {
    const newTasks = completedTasks.filter((_, index) => index !== taskIndex);
    setCompletedTasks(newTasks);
    toast.success("Task deleted successfully!");
  };

  const openUpdateModal = (taskIndex) => {
    setSelectedTask({ ...tasks[taskIndex], index: taskIndex });
    setIsModalOpen(true);
  };

  const openModal = () => {
    setIsTaskModalOpen(true);
  };

  const closeModal = () => {
    setIsTaskModalOpen(false);
  };

  const handleUpdate = (updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[updatedTask.index] = updatedTask;
    delete updatedTask.index;
    setTasks(updatedTasks);
    setIsModalOpen(false);
  };

  const handleTaskDone = (taskIndex) => {
    const taskToMarkDone = tasks[taskIndex];
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    const updatedTask = { ...taskToMarkDone, status: "done" };
    setTasks(newTasks);
    setCompletedTasks([...completedTasks, updatedTask]);
  };
  
  console.log(completedTasks);

  return (
    <>
    <WelcomeScreen></WelcomeScreen>
    <div className="app">
    <button onClick={openModal} className="open-modal-btn">+ Add Task</button>

    {isTaskModalOpen && (
        <div className="modal-overlay">
          <div ref={modalRef} className="modal-content">
          <h2 className='topic'>
            <button 
            type="button" 
            className="cancel-button" 
            onClick={closeModal}>
          <AiOutlineClose />
          </button>
           Add Task</h2>
            <TaskForm setTasks={setTasks} />
          </div>
        </div>
      )}
      
      <main className="app_main">
        <TaskColumn
          title="To Do"
          icon={ListIcon}
          tasks={tasks}
          status="todo"
          done =  {true}
          edit = {true}
          handleDelete={handleDelete}
          handleTaskDone={handleTaskDone}
          openUpdateModal={openUpdateModal}
        />
        <TaskColumn
          title="Done"
          icon={DoneIcon}
          tasks={completedTasks}
          status="done"
          done = {false}
          edit = {false}
          handleDelete={handleDoneDelete}
          openUpdateModal={openUpdateModal}
        />
      </main>
      {isModalOpen && (
        <UpdateTaskModal
          ref={modalRef}
          task={selectedTask}
          closeModal={() => setIsModalOpen(false)}
          handleUpdate={handleUpdate}
        />
      )}
      <ToastContainer />
    </div>
    </>
  );
}

export default App;
