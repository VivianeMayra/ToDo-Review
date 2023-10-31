import styles from "./tasks.module.css"
import Task from "./Task"
import { useContext, useState } from "react"
import TaskContext from "../contexts/TaskContext"
import { ClipboardText } from "@phosphor-icons/react"

export default function Tasks() {
  const { task, setTask } = useContext(TaskContext)
  const [completedTaskCount, setCompletedTaskCount] = useState(0)

  const handleDeleteTask = (taskToDelete) => {
    const updatedTask = task.filter((t) => t !== taskToDelete)
    setTask(updatedTask)

    if (taskToDelete.isFinished) {
      setCompletedTaskCount(completedTaskCount)
    }
  }

  const handleTaskFinish = (isFinished) => {
    if (isFinished) {
      setCompletedTaskCount(completedTaskCount + 1) // Incrementar o contador de tarefas concluídas
    } else {
      setCompletedTaskCount(completedTaskCount - 1) // Decrementar o contador de tarefas concluídas
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerTasks}>
        <div className={styles.containerInfo}>
          {" "}
          <h5 className={styles.tasksCreated}>Tarefas criadas</h5>
          <div className={styles.countTasks}>{task.length}</div>
        </div>
        <div className={styles.containerInfo}>
          <h5 className={styles.tasksCompleted}>Concluidas</h5>
          <div className={styles.countTasksCompleted}>
            {completedTaskCount} de {task.length}
          </div>
        </div>
      </div>
      {task.length === 0 ? (
        <div className={styles.containerList}>
          <ClipboardText size={56} />
          <div className={styles.containerText}>
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      ) : (
        <div className={styles.containerListTask}>
          {task.map((taskContent, index) => (
            <Task
              key={index}
              task={taskContent}
              onDelete={handleDeleteTask}
              onTaskFinish={handleTaskFinish}
            />
          ))}
        </div>
      )}
    </div>
  )
}
