import './TaskColumn.css';
import TaskCard from './TaskCard';

const TaskColumn = ({title,icon,tasks,status}) => {
    return(
        <section className='task_column'>
            <h2 className='task_column_heading'>
                <img className='task_column_image' src={icon} alt=""></img>
                {title}
                </h2>

                {
                 tasks.map(
                    (task,index) => 
                    task.status === status &&(
                    <TaskCard 
                      key ={index}
                      title = {task.task} 
                      tags={task.tags}/>
                      )
                )}
        </section>
    );
}

export default TaskColumn;