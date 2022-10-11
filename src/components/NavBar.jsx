import styles from 'styles/NavBar.module.css'

function NavBar({cls}) {
  return (
    <nav className={`${styles[`nav`]} ${styles[`${cls}`]}`}>
      <div className={styles.logo_container}>
        <a href='/'>
          <img 
            className={styles.logo}
            src="/assets/oa-logo.png"
            alt="OA-Logo"
          />
        </a>
      </div>
      <ul className={styles.links}>
        <li>
          <a href='/'>About OA</a>
        </li>
        <li>
          <a href='/'>About SP</a>
        </li>
        <li className={styles.login}>
          <a href='/'>Login</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar