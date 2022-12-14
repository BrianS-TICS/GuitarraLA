import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Guitarra.module.css'

const Guitarra = ({guitarra}) => {
    
    const {nombre, descripcion, imagen, precio, url} = guitarra;

    return (
        <div className={styles.guitarra}>
            <Image layout='responsive' width={180} height={350} src={imagen[0].url} alt={`Imagen de guitarra ${nombre}`} />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>

                <Link href={`/guitarras/${url}`}>
                    <a>
                        Ver producto
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Guitarra