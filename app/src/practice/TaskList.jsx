import {useState} from "react";

export function TaskList() {
    // Просто список для отображения (без изменений состояния).
    const [tasks, setTasks] = useState([
        {id: 1, title: "Task 1"},
        {id: 2, title: "Task 2"},
        {id: 3, title: "Task 3"}
    ])

    return (
        <>
            <h3>Task List</h3>
            <ul>
                {/* .map по массиву — каждый task в <li>. key обязателен. */}
                {tasks.map(task => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </>
    )
}