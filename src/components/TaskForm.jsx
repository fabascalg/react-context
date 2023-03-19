import { useContext, useState } from "react"
import { TaskContext } from "../Context/TaskContext"

function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({ title, description })
        setTitle('')
        setDescription('')
    }
    return (
        <div className="bg-neutral-700 rounded-md m-5 p-2 text-white">
        <form onSubmit={handleSubmit}>
            title: <input
                placeholder="escribe la nueva tarea"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                autoFocus
                className="text-black"
            />
            <br />
            description: <textarea
                placeholder="anote la descripción de la nueva tarea..."
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="text-black"
            />
            <br />
            <button className="bg-green-300 p-2 m-2 text-black rounded-md hover:bg-green-500 hover:text-white">guardar tarea</button>
        </form>
        </div>
    )
}

export default TaskForm