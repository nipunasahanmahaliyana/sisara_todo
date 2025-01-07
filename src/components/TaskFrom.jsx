import  {React,useState} from 'react';
import './TaskForm.css';
import Tag from './Tag';

const TaskForm = () => {
    const [task,setTask] = useState("");

    const handleTaskChange = (e) =>{
        setTask(e.target.value);
    };

    return (
<header className='app_header'>
    <form>
            <input 
            type="text"
             className="task_input" 
             placeholder='Enter your task'
             onChange= {(e) => handleTaskChange(e)}>
             </input>

            <div className='task_form_bottom_line'>
                
                <div>
                <Tag tagName="HTML" /> 
                <Tag tagName="CSS" /> 
                <Tag tagName="JavaScript" /> 
                </div>

                <div>
                <select className='task_status'>
                    <option value="todo">To do</option>
                    <option value="doing">To do</option>
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