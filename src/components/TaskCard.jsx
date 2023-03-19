import { useContext } from "react"
import { TaskContext } from "../Context/TaskContext"

function TaskCard({task}) {
    const { deleteTask} = useContext(TaskContext)
    return ( 
            <div 
            className='bg-gray-800 text-white p-2 rounded-md' 
            key={task.id}>
                <h3 className="text-xl font-bold capitalize">{task.title}</h3>
                <p className="text-gray-500 text-sm">{task.description}</p>
                <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-yellow-400 hover:text-black"
                onClick={() => deleteTask(task.id)}>eliminar tarea</button>
            </div>
    )
}

export default TaskCard