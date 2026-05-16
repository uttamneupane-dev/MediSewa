import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Icons } from '../icons'
import styles from '../styles/AppointmentPage.module.css'

const departments = [
  'General Medicine',
  'Cardiology',
  'Dermatology',
  'Orthopedics',
  'Neurology',
  'Pediatrics',
  'Gynecology',
  'Ophthalmology',
]

const timeSlots = [
  '09:00 AM',
  '09:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
]

export default function AppointmentPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    department: '',
    date: '',
    time: '',
    reason: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={styles.successPage}>
        <div className={styles.successCard}>
          <div className={styles.successIcon}>{Icons.Celebration}</div>
          <h2 className={styles.successTitle}>Appointment Booked!</h2>
          <p className={styles.successText}>
            Your appointment for <strong>{form.department}</strong> has been
            scheduled.
          </p>
          <p className={styles.successMeta}>
            {form.date} at {form.time}
          </p>
          <button
            onClick={() => navigate('/dashboard')}
            className={styles.backBtn}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <Link to="/dashboard" className={styles.backLink}>
          ← Back
        </Link>
        <div className={styles.logoMark}>
          <span className={styles.logoMarkText}>M</span>
        </div>
        <span className={styles.logoName}>Medisewa</span>
      </div>

      <div className={styles.body}>
        <h1 className={styles.pageTitle}>Book an Appointment</h1>
        <p className={styles.pageSub}>
          Fill in the details below to schedule your visit.
        </p>

        <div className={styles.card}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Full Name</label>
                <input
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                  placeholder="John Doe"
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label>Phone Number</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+977 98XXXXXXXX"
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label>Department</label>
              <select
                required
                value={form.department}
                onChange={(e) =>
                  setForm({ ...form, department: e.target.value })
                }
                className={styles.select}
              >
                <option value="">Select a department</option>
                {departments.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Preferred Date</label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label>Preferred Time</label>
                <select
                  required
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className={styles.select}
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label>
                Reason for Visit{' '}
                <span style={{ color: '#9ca3af', fontWeight: 400 }}>
                  (optional)
                </span>
              </label>
              <textarea
                rows={3}
                value={form.reason}
                onChange={(e) => setForm({ ...form, reason: e.target.value })}
                placeholder="Brief description of your symptoms or reason for the visit..."
                className={styles.textarea}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={styles.submitBtn}
            >
              {loading ? 'Booking...' : 'Confirm Appointment'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
