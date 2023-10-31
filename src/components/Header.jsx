import igniteLogo from "../assets/logo.svg"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <div className={styles.container}>
      <img src={igniteLogo} alt="logo ignite" />
    </div>
  )
}
