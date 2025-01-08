import { React, useState } from "react";
import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "../src/components/TaskFrom";
import UpdateTaskModal from "./components/UpdateModal";
import WelcomeScreen from "./components/Welcome";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(newTasks);
    alert("Task Deleted Successfully");
  };

  const handleDoneDelete = (taskIndex) => {
    const newTasks = completedTasks.filter((_, index) => index !== taskIndex);
    setCompletedTasks(newTasks);
    alert("Task Deleted Successfully");
  };

  const openUpdateModal = (taskIndex) => {
    setSelectedTask({ ...tasks[taskIndex], index: taskIndex });
    setIsModalOpen(true);
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
    setTasks(newTasks);
    setCompletedTasks([...completedTasks, { ...taskToMarkDone, status: "done" }]);
  };

  return (
    <>
    <WelcomeScreen></WelcomeScreen>
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="To Do"
          icon=""
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
          icon=""
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
          task={selectedTask}
          closeModal={() => setIsModalOpen(false)}
          handleUpdate={handleUpdate}
        />
      )}
    </div>
    </>
  );
}

export default App;
