import React from "react";
import "./TaskColumn.css";
import { FaEdit, FaTrashAlt, FaCheckCircle } from "react-icons/fa";

const TaskColumn = ({ title, tasks, status,icon, handleDelete, openUpdateModal,done , edit, handleTaskDone,}) => {
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <div className="task_column">
    <h2 className="task_column_title">
  <img src={icon} className="task_column_image" alt="list" />
  {title}
</h2>

      {filteredTasks.map((task, index) => (
        <div key={index} className="task_item">
          <p>{task.title}</p>
          <p>{task.task}</p>
          <div className="task_tags">
            {task.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="task_tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="task_actions">
          {done && (
              <button
                onClick={() => handleTaskDone(index)}
                className="done_button"
              ><FaCheckCircle></FaCheckCircle>
              </button>
            )}
              {edit && (
            <button onClick={() => openUpdateModal(index)} className="edit_button"><FaEdit></FaEdit>
            </button>
              )}
            <button onClick={() => handleDelete(index)} className="delete_button"><FaTrashAlt></FaTrashAlt>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskColumn;