import Header from "./components/Header"
import Input from "./components/Input"
import Tasks from "./components/Tasks"
import styles from "./app.module.css"
import "./global.css"

import TaskContext from "./contexts/TaskContext"
import { useState } from "react"

export default function App() {
  const [task, setTask] = useState([])

  return (
    <TaskContext.Provider value={{ task, setTask }}>
      <div>
        <Header />
        <div className={styles.containerMain}>
          <Input />
          <Tasks />
        </div>
      </div>
    </TaskContext.Provider>
  )
}
