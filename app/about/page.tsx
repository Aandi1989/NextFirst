import styles from './page.module.scss'

export default function About() {
    console.log('its okay')

    return <div className={styles.main}>
                <div className={styles.main__container}>About page</div>
            </div>
}