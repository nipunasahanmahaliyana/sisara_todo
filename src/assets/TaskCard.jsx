import {React,useState} from 'react';
import { FaEdit, FaTrashAlt, FaCheckCircle } from 'react-icons/fa';
import './TaskCard.css';
import Tag from '../components/Tag';

const TaskCard = ({title,tags,handleDelete ,handleUpdate, index}) =>{

    return(
        <article className='task_card'>
            <p className='task_text'>{title}</p>

            <div className='task_card_bottom_line'>
                <div className='task_card_tags'>

                    {
                        tags.map((tag,index) => (
                            <Tag 
                            key={index}
                            tagName = {tag}
                            selected={true}  />
                        ))
                    }

                </div>
                <div className='task_delete' onClick={() =>handleUpdate(index)}>
                    <img src="" className='delete_icon' alt='' ></img>update
                </div>
                <div className='task_delete' onClick={() =>handleDelete(index)}>
                    <img src="" className='delete_icon' alt=''></img>delete
                </div>
            </div>
     
        </article>
    );
}

export default TaskCard;