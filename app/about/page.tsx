import { Metadata } from 'next'
import styles from './page.module.scss'

export const metadata: Metadata = {
    title: 'About | Next App', 
  }

export default function About() {
    console.log('its okay')

    return  <div className={styles.main}>Select subitem</div>
            
}