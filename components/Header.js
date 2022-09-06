import Link from "next/link"
import styles from "../styles/Header.module.css"
import Image from 'next/image'
import { useRouter } from "next/router"

const Header = ({ guitarra }) => {
    const router = useRouter();
    console.log(router.pathname);

    return (
        <header className={styles.header}>
            <div className="contenedor">
                <div className={styles.barra}>
                    <div className={styles.logotipo}>
                        <Link href="/" >
                            <a>
                                <Image width={400} height={100} src="/img/logo.svg" alt="Imagen logo" />
                            </a>
                        </Link>
                    </div>

                    <nav className={styles.navegacion}>
                        <Link href="/">Inicio</Link>
                        <Link href="/nosotros">Nosotros</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/tienda">Tienda</Link>
                    </nav>
                </div>

                {guitarra && (
                    <div className={styles.modelo}>
                        <h2>Modelo {guitarra.nombre}</h2>
                        <p className={styles.descripcion}>{guitarra.descripcion}</p>
                        <p className={styles.precio} >${guitarra.precio}</p>
                        <Link href={`/guitarras/${guitarra.url}`}>
                            <a className={styles.enlace}>
                                Ver producto
                            </a>
                        </Link>
                    </div>
                )}


            </div>

            {router.pathname === "/" && (
                <div className={styles.guitarra}>
                    <Image layout="fixed" width={500} height={1200} src="/img/header_guitarra.png" alt="imagen header guitarra"/>
                </div>
            )}

        </header>
    )
}

export default Header