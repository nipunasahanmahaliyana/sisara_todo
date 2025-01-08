import { React, useState, useEffect} from 'react';
import './TaskForm.css';
import Tag from './Tag';

const TaskForm = ({ setTasks }) => {
  
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; 
    setTaskData((prev) => ({ ...prev, date: today }));
  }, []); 

  const [taskData, setTaskData] = useState({
    title:"",
    task: "",
    status: "todo",
    tags: [],
    date: "", 
    deadline: "" 
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskData.title.trim() === "") {
      alert("Please enter a task  title!");
      return;
    }
    
    if (taskData.task.trim() === "") {
      alert("Please enter a title description !");
      return;
    }
    const currentDate = new Date().toISOString().split("T")[0];
    if (taskData.deadline.trim() !== "") {
      
      if (taskData.deadline < currentDate) {
        alert("Deadline cannot be in the past!");
        return;
      }
      
    }
    setTasks((prev) => {
      return [...prev, taskData];
    });

    setTaskData({
      title:"",
      task: "",
      status: "todo",
      tags: [],
      deadline: "" 
    });

    alert("Task added successfully!");
  };


  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  return (
  
    <header className='app_header'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={taskData.title}
          className="task_input"
          placeholder='Enter your task title'
          onChange={handleChange}
        />
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder='Enter your task description'
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={taskData.date}
          className="task_input"
          disabled
        />

        <input
          type="date"
          name="deadline"
          value={taskData.deadline}
          className="task_input"
          onChange={handleChange}
        />

        <div className='task_form_bottom_line'>
          <div className='tag_container'>
          <Tag tagName="React" selectTag={selectTag} selected={checkTag("React")} />
          <Tag tagName="SpringBoot" selectTag={selectTag} selected={checkTag("SpringBoot")} />
          <Tag tagName="ProjectManagement" selectTag={selectTag} selected={checkTag("ProjectManagement")} />
          <Tag tagName="Sprint" selectTag={selectTag} selected={checkTag("Sprint")} />
          </div>
          <div className='task_form_bottom_line'>
            <button type="submit" className='task_submit'>+ Add Task</button>
          </div>
        </div>
      </form>
    </header>

  );
};

export default TaskForm;
