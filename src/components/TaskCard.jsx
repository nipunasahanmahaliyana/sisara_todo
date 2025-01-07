import "./TaskCard.css";
import Tag from './Tag';

const TaskCard = () =>{

    return(
        <article className='task_card'>
            <p className='task_text'></p>

            <div className='task_card_bottom_line'>
                <div className='task_card_tags'>
                    <Tag tagName="HTML"/>
                    <Tag tagName="CSS"/>
                    <Tag tagName="HTML"/>
                </div>
                <div className='task_delete'>
                    <img src="" className='delete_icon' alt=''></img>
                </div>
            </div>
        </article>
    );
}

export default TaskCard;