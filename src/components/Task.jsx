import { Trash } from "@phosphor-icons/react"
import styles from "./task.module.css"
import { useState } from "react"

export default function Task({ task, onDelete, onTaskFinish }) {
  const [isFinished, setIsFinished] = useState(0)

  const handleDelete = () => {
    if (isFinished) {
      onTaskFinish(false) // Subtrai do contador se estava concluída
    }
    onDelete(task)
  }

  const handleToggleFinish = () => {
    const newIsFinish = !isFinished
    setIsFinished(newIsFinish) // alterna o estado de concluido
    onTaskFinish(newIsFinish) //chama a função para atualizar o contador
  }

  return (
    <div
      className={`${styles.containerTaskList} ${
        isFinished ? styles.finishedTask : ""
      }`}
    >
      <div
        className={`${styles.tasks} ${isFinished ? styles.finishedTask : ""}`}
      >
        <button className={styles.checkContainer} onClick={handleToggleFinish}>
          <div>{isFinished ? "✔" : ""}</div>
        </button>
        <p className={isFinished ? styles.finishedText : ""}>{task}</p>
        <button onClick={handleDelete} className={styles.buttonDelete}>
          <Trash size={24} />
        </button>
      </div>
    </div>
  )
}
