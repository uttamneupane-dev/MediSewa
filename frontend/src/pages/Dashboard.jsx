import { Link, useNavigate } from 'react-router-dom'
import { Icons } from '../icons'
import styles from '../styles/Dashboard.module.css'

const upcomingAppointments = [
  {
    id: 1,
    doctor: 'Dr. Anita Sharma',
    specialty: 'General Physician',
    date: '2026-05-20',
    time: '10:00 AM',
    status: 'confirmed',
  },
  {
    id: 2,
    doctor: 'Dr. Ramesh Koirala',
    specialty: 'Cardiologist',
    date: '2026-05-25',
    time: '2:30 PM',
    status: 'pending',
  },
]

const stats = [
  { label: 'Total Appointments', value: '12', icon: Icons.Calendar },
  { label: 'Upcoming', value: '2', icon: Icons.Clock },
  { label: 'Completed', value: '10', icon: Icons.CheckCircle },
]

const statusClass = {
  confirmed: styles.statusConfirmed,
  pending: styles.statusPending,
  cancelled: styles.statusCancelled,
}

function NavItem({ icon, label, active }) {
  return (
    <button
      className={`${styles.navItem} ${active ? styles.navItemActive : ''}`}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  )
}

export default function Dashboard() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('medisewa_user') || '{}')

  const handleLogout = () => {
    localStorage.removeItem('medisewa_user')
    navigate('/')
  }

  return (
    <div className={styles.page}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link to="/" className={styles.logoLink}>
            <div className={styles.logoMark}>
              <span className={styles.logoMarkText}>M</span>
            </div>
            <span className={styles.logoName}>Medisewa</span>
          </Link>
        </div>

        <nav className={styles.nav}>
          <NavItem icon={Icons.Home} label="Dashboard" active />
          <NavItem icon={Icons.Calendar} label="Appointments" />
          <NavItem icon={Icons.User} label="Profile" />
          <NavItem icon={Icons.Records} label="Medical Records" />
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.userRow}>
            <div className={styles.avatar}>
              <span className={styles.avatarText}>{user.name?.[0]}</span>
            </div>
            <div className={styles.userInfo}>
              <p className={styles.userName}>{user.name}</p>
              <p className={styles.userRole}>Patient</p>
            </div>
          </div>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.mainInner}>
          <div className={styles.pageHeader}>
            <h1 className={styles.greeting}>
              Good morning,{' '}
              <span className={styles.greetingName}>{user.name}</span>{' '}
              {Icons.Wave}
            </h1>
            <p className={styles.greetingSub}>
              Here&apos;s your health overview for today.
            </p>
          </div>

          {/* Book Appointment CTA */}
          <div className={styles.ctaBanner}>
            <div>
              <h2 className={styles.ctaTitle}>Need to see a doctor?</h2>
              <p className={styles.ctaSub}>
                Schedule your appointment in just a few clicks.
              </p>
            </div>
            <Link to="/appointments/new" className={styles.ctaBtn}>
              Book Appointment
            </Link>
          </div>

          {/* Stats */}
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <div className={styles.statIcon}>{s.icon}</div>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Upcoming Appointments */}
          <div className={styles.appointmentsCard}>
            <div className={styles.appointmentsHeader}>
              <h3 className={styles.appointmentsTitle}>
                Upcoming Appointments
              </h3>
              <Link to="/appointments/new" className={styles.newLink}>
                + New
              </Link>
            </div>
            <div>
              {upcomingAppointments.map((apt) => (
                <div key={apt.id} className={styles.appointmentRow}>
                  <div className={styles.doctorAvatar}>
                    <span className={styles.doctorIcon}>{Icons.Doctor}</span>
                  </div>
                  <div className={styles.aptInfo}>
                    <p className={styles.aptDoctor}>{apt.doctor}</p>
                    <p className={styles.aptSpecialty}>{apt.specialty}</p>
                  </div>
                  <div className={styles.aptDate}>
                    <p className={styles.aptDateText}>{apt.date}</p>
                    <p className={styles.aptTime}>{apt.time}</p>
                  </div>
                  <span
                    className={`${styles.statusBadge} ${statusClass[apt.status]}`}
                  >
                    {apt.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
