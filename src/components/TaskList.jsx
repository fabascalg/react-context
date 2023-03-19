import { useContext } from "react"
import TaskCard from "./TaskCard"
import { TaskContext } from "../Context/TaskContext"

function TaskList( ){

    const { tasks} = useContext(TaskContext)

    if (tasks.length === 0) {
        return <p>no hay tareas aún</p>
    }

    return <div className="grid grid-cols-4 gap-2">
        {tasks.map((task) => (
            <TaskCard
                task={task}
                key={task.id}/>
        ))}
    </div>
}

export default TaskList