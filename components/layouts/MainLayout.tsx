import Head from 'next/head'
import { FC } from 'react'
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'
import { FunctionComponent, ReactNode } from "react"

interface BaseLayoutProps {
    children?: ReactNode;
}

export const MainLayout: FunctionComponent<BaseLayoutProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contact</title>
                <meta name="description" content="About page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>
                {children}
            </main>

        </div>
    )
}
