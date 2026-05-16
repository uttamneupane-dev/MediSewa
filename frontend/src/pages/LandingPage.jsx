import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Icons } from '../icons'
import styles from '../styles/LandingPage.module.css'

const features = [
  {
    icon: Icons.Calendar,
    title: 'Easy Appointment Booking',
    description:
      'Book your appointments in minutes with our simple and intuitive system.',
  },
  {
    icon: Icons.Doctor,
    title: 'Expert Healthcare Providers',
    description:
      'Access a network of qualified doctors and healthcare professionals.',
  },
  {
    icon: Icons.Lock,
    title: 'Secure & Private',
    description:
      'Your health information is protected with industry-standard security.',
  },
]

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Your Health, Our Priority</h1>
          <p className={styles.heroSubtitle}>
            Medisewa connects patients with healthcare professionals. Book
            appointments, manage your health records, and get the care you
            deserve.
          </p>
          <div className={styles.heroActions}>
            <Link to="/login" className={styles.btnPrimary}>
              Book Appointment
            </Link>
            <Link to="/login" className={styles.btnOutline}>
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <div className={styles.featuresInner}>
          <h2 className={styles.sectionTitle}>Why Choose Medisewa?</h2>
          <p className={styles.sectionSubtitle}>
            We provide a seamless healthcare experience from the comfort of your
            home.
          </p>
          <div className={styles.grid}>
            {features.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to get started?</h2>
          <p className={styles.ctaText}>
            Join thousands of patients who trust Medisewa for their healthcare
            needs.
          </p>
          <Link to="/login" className={styles.btnCta}>
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 Medisewa. All rights reserved.</p>
      </footer>
    </div>
  )
}
