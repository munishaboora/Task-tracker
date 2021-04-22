import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}<FaTimes style={{ color: '#474B49', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div >
    )
}

export default Task

//1:00:49  https://www.youtube.com/watch?v=w7ejDZ8SWv8