import React from 'react'
import './TaskForm.css';
import Tag from './Tag';

const TaskForm = () => {
    return (
<header className='app_header'>
    <form>
            <input type="text" className="task_input" placeholder='Enter your task'></input>
            <div className='task_form_bottom_line'>
                
                <div>
                <Tag name="HTML" /> 
                <Tag name="CSS" /> 
                <Tag name="JavaScript" /> 
                </div>

                <div>
                <select className='task_status'>
                    <option value="todo">To do</option>
                    <option value="todo">To do</option>
                    <option value="done">To do</option>
                </select>
                <button type="submit" className='task_submit'>+ Add Task</button>
                </div>

            </div>
    </form>
</header>
    );
}

export default TaskForm;