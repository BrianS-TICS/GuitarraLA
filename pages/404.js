import React from 'react'
import styles from '../styles/NoEncontrado.module.css'
import Link from 'next/link'
const NoEncontrado = () => {
    return (
        <div className={styles.no_encontrado}>
            <h1 className='heading'>Página no encontrada</h1>

            <Link href="/">Volver al inicio</Link>
        </div>
    )
}

export default NoEncontrado