import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Component made in React / NextJS</p>
      <p>
        Repo: 
        <a href="https://github.com/dodi-the-rad/energy-service-react">
          https://github.com/dodi-the-rad/energy-service-react
        </a>
      </p>
      <p>
        Standalone url:
        <a href="https://energy-service-react.vercel.app/">
          https://energy-service-react.vercel.app/
        </a></p>
    </main>
  )
}
