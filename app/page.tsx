import styles from './styles/page.module.scss'

export default function Home() {
  console.log('Main page') 
  let a= 'Main page' 
  console.log("🚀 ~ file: page.tsx:7 ~ Home ~ a:", a) // ! логи не выводятся
  
  
  return (
    <div className={styles.main}>
      <div className={styles.main__container}> 
        Welcome to NextJS world
      </div>
    </div>
  )
  
}

