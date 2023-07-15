import Header from '@/components/header/Header'
import './styles/null.scss'
import styles from './styles/globals.module.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ReduxProvider } from '@/redux/provider'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next App', // название в заголовке браузера
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <ReduxProvider>
       <div className={styles.layoutWrapper}>
            <Header />
            <main className={styles.main}> {children}</main>
            <Footer />
          </div>
       </ReduxProvider>
      </body>
    </html >
  )
}
