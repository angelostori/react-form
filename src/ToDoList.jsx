import { useState } from 'react';

function ToDoList() {

    const [toDoList, setToDoList] = useState([])
    const [taskText, setTaskText] = useState('')
    const [taskPriority, setTaskPriority] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const newToDo = {
            text: taskText,
            priority: taskPriority
        }

        setToDoList([...toDoList, newToDo])

        setTaskText('')
        setTaskPriority('')
    }

    const getBadgeClass = (priority) => {
        if (priority === 'high') {
            return 'text-bg-danger'
        } else if (priority === 'mid') {
            return 'text-bg-warning'
        } else if (priority === 'low') {
            return 'text-bg-success'
        }
        return 'text-bg-secondary'
    }

    const handleDelete = (indexToDelete) => {
        const filteredToDoList = toDoList.filter((task, index) => index !== indexToDelete);
        setToDoList(filteredToDoList);
    }
    return (
        <div className='container py-4'>
            <h2 className='text-center mb-4 text-warning'>TODO List</h2>

            <div className='d-flex justify-content-around text-align-center'>
                <h3 className='text-light'>Priority:</h3>
                <div className="form-check">
                    <input className="form-check-input" name="radioDefault" type="radio" />
                    <label className="form-check-label text-light px-1">
                        All
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" name="radioDefault" type="radio" />
                    <label className="form-check-label text-light px-1">
                        High
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" name="radioDefault" type="radio" />
                    <label className="form-check-label text-light px-1">
                        Mid
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" name="radioDefault" type="radio" />
                    <label className="form-check-label text-light px-1">
                        Low
                    </label>
                </div>
            </div>


            <ul className="list-group">
                {toDoList.map((todo, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between list-group-item-warning align-items-center">
                        <span>{todo.text}</span>
                        <span className={`badge rounded-pill ${getBadgeClass(todo.priority)}`}>
                            {todo.priority}
                            <button className='btn' onClick={() => handleDelete(index)}>
                                <i className="bi bi-trash"></i>
                            </button>
                        </span>
                    </li>
                ))}
            </ul>





            <form className="row g-3 my-2" onSubmit={handleSubmit}>
                <div className="col-auto">
                    <label className='text-light'>New activity:</label>
                </div>
                <div className="col-auto">
                    <input
                        type="text"
                        className="form-control"
                        value={taskText}
                        onChange={(e) => setTaskText(e.target.value)}
                        required />
                </div>

                <div className='col-auto'>
                    <select className="form-select" value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)} required>
                        <option value='' disabled>Select priority</option>
                        <option value="high">High</option>
                        <option value="mid">Mid</option>
                        <option value="low">Low</option>
                    </select>
                </div>

                <div className="col-auto">
                    <button type="submit" className="btn btn-warning mb-3">Confirm</button>
                </div>
            </form>
        </div>

    )
}

export default ToDoList