import { Link, useNavigate } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('medisewa_user') || 'null')

  const handleLogout = () => {
    localStorage.removeItem('medisewa_user')
    navigate('/')
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logoLink}>
          <div className={styles.logoMark}>
            <span className={styles.logoMarkText}>M</span>
          </div>
          <span className={styles.logoName}>Medisewa</span>
        </Link>

        <div className={styles.actions}>
          {user ? (
            <>
              <span className={styles.welcome}>Welcome, {user.name}</span>
              <Link to="/dashboard" className={styles.dashboardLink}>
                Dashboard
              </Link>
              <button onClick={handleLogout} className={styles.logoutBtn}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className={styles.loginBtn}>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
