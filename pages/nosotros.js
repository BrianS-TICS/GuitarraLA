import Image from 'next/image'
import Layout from '../components/Layout'
import style from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
        <Layout
            pagina='Nosotros'
        >
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>
                <div className={style.nosotros}>
                    <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt="Imagen sobre nosotros" />
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut sapien maximus, consectetur justo ut, lobortis est. Sed interdum libero aliquam, molestie risus nec, efficitur metus. Sed nisi enim, egestas id faucibus sit amet, posuere sed leo. Cras efficitur varius eros laoreet feugiat. Integer odio sem, maximus sed commodo eget, vestibulum vel quam. Morbi et arcu vitae mauris semper fringilla. Suspendisse eget lacinia orci, at fringilla massa. Fusce commodo, nisl in volutpat vulputate, magna lacus feugiat leo, eget laoreet odio felis eu est.
                            Phasellus non lacus pharetra, placerat velit sed, pulvinar ipsum. In pretium felis ut ex feugiat vestibulum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut sapien maximus, consectetur justo ut
                            Phasellus non lacus pharetra, placerat velit sed, pulvinar ipsum. In pretium felis ut ex feugiat vestibulum.</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros