import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styles from '../styles/LoginPage.module.css'

export default function LoginPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    await new Promise((r) => setTimeout(r, 800))

    if (form.email && form.password) {
      localStorage.setItem(
        'medisewa_user',
        JSON.stringify({
          name: form.email.split('@')[0],
          email: form.email,
        }),
      )
      navigate('/dashboard')
    } else {
      setError('Please enter your email and password.')
    }
    setLoading(false)
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Link to="/" className={styles.logoLink}>
          <div className={styles.logoMark}>
            <span className={styles.logoMarkText}>M</span>
          </div>
          <span className={styles.logoName}>Medisewa</span>
        </Link>
      </div>

      <div className={styles.body}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h1 className={styles.cardTitle}>Welcome back</h1>
            <p className={styles.cardSubtitle}>
              Sign in to your Medisewa account
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label>Email address</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label>Password</label>
              <input
                type="password"
                required
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                placeholder="••••••••"
                className={styles.input}
              />
            </div>

            {error && <div className={styles.error}>{error}</div>}

            <button
              type="submit"
              disabled={loading}
              className={styles.submitBtn}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <p className={styles.formFooter}>
            Don&apos;t have an account?{' '}
            <span className={styles.formFooterLink}>
              Contact your administrator
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
