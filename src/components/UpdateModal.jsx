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
    handleUpdate(taskData);
  };

  return (
    <div className="modal">
      <div className="modal_content">
        <h2>Update Task</h2>
        <form onSubmit={handleSave}>
          <input
            type="text"
            name="task"
            value={taskData.task}
            placeholder="Update your task"
            onChange={handleChange}
            className="modal_input"
          />
          <select
            name="status"
            value={taskData.status}
            onChange={handleChange}
            className="modal_select"
          >
            <option value="todo">To do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
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
