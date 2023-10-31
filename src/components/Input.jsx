import { useContext, useEffect, useState } from "react"
import styles from "./input.module.css"
import { PlusCircle } from "@phosphor-icons/react"
import TaskContext from "../contexts/TaskContext"

export default function Input() {
  const { task, setTask } = useContext(TaskContext)
  const [newTask, setNewTask] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    setTask([...task, newTask]) // Adicionar uma nova tarefa ao array de tarefas
    setNewTask("") // Limpar o campo de entrada

    //salva a tarefa
  }

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  useEffect(() => {
    console.log(task) // Isso exibirá o estado atualizado de task
  }, [task]) // Este efeito é executado sempre que task é atualizado

  return (
    <div className={styles.containerNewTask}>
      <form onSubmit={handleSubmit} className={styles.inputNewTask}>
        <textarea
          name="task"
          className={styles.inputNewTask}
          value={newTask}
          onChange={handleChange}
          placeholder="Adicione uma nova tarefa"
        />
        <button type="submit" className={styles.buttonNewTask}>
          {" "}
          Criar <PlusCircle size={16} />
        </button>
      </form>
    </div>
  )
}
