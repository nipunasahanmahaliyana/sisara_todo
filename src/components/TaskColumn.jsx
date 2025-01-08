import React from "react";
import "./TaskColumn.css";

const TaskColumn = ({ title, tasks, status, handleDelete, openUpdateModal,done , edit, handleTaskDone,}) => {
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <div className="task_column">
      <h2>{title}</h2>
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
                className="edit_button"
              >
                Set as done
              </button>
            )}
              {edit && (
            <button onClick={() => openUpdateModal(index)} className="edit_button">
              Edit
            </button>
              )}
            <button onClick={() => handleDelete(index)} className="delete_button">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskColumn;