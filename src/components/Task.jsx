import { Trash } from "@phosphor-icons/react"
import styles from "./task.module.css"
import { useState } from "react"

export default function Task({ task, onDelete, onTaskFinish }) {
  const [isFinished, setIsFinished] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const handleDelete = () => {
    if (isFinished) {
      onTaskFinish(false) // Subtrai do contador se estava concluída
    }
    onDelete(task)
  }

  const handleToggleFinish = () => {
    const newIsFinish = !isFinished
    setIsFinished(newIsFinish) // alterna o estado de concluido

    setIsFocused(newIsFinish)

    onTaskFinish(newIsFinish) //chama a função para atualizar o contador
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
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
        <button
          className={styles.checkContainer}
          onClick={handleToggleFinish}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <div
            style={{
              background: isFinished
                ? "var(--purple-100, #5E60CE)"
                : isFocused
                ? "var(--purple-100, #5E60CE)"
                : "",
              border: isFocused && "2px solid var(--purple-100, #5E60CE)",
            }}
          >
            {isFinished && "✔"}
          </div>
        </button>
        <p className={isFinished ? styles.finishedText : ""}>{task}</p>
        <button onClick={handleDelete} className={styles.buttonDelete}>
          <Trash size={24} />
        </button>
      </div>
    </div>
  )
}
