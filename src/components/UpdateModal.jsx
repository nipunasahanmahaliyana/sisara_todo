import React, { useState } from "react";
import "../components/UpdateModal.css";

const UpdateTaskModal = ({ task, closeModal, handleUpdate }) => {
  const [taskData, setTaskData] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (taskData.title.trim() === "") {
      alert("Please enter a task  title!");
      return;
    }
    
    if (taskData.task.trim() === "") {
      alert("Please enter a title description !");
      return;
    }
    
    const currentDate = new Date();
    if (taskData.deadline.trim() !== "") {
      
      const deadlineDate = new Date(taskData.deadline);
      if (deadlineDate < currentDate) {
        alert("Deadline cannot be in the past! !");
        return;
      }
    }
    handleUpdate(taskData);
  };

  
  return (
    <div  className="modal">
      <div className="modal_content">
        <h2>Update Task</h2>
        <form onSubmit={handleSave}>
          <input
            type="text"
            name="title"
            value={taskData.title}
            placeholder="Update your task"
            onChange={handleChange}
            className="modal_input"
          />
          
          <input
            type="text"
            name="task"
            value={taskData.task}
            placeholder="Update your task"
            onChange={handleChange}
            className="modal_input"
          />

        <input
          type="date"
          name="deadline"
          value={taskData.deadline}
          className="task_input"
          onChange={handleChange}
        />

          <div className="modal_buttons">
            <button type="button" onClick={closeModal} className="cancel_button">
              Cancel
            </button>
            <button type="submit" className="save_button">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTaskModal;
