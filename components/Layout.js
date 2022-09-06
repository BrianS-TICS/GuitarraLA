import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
const Layout = ({ children, pagina, guitarra }) => {
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />
                <title>Guitar LA | {pagina}</title>
                <meta name="description" content="sitio web de venta de guitarras" />

            </Head>
            <Header 
                guitarra = {guitarra}
            />

            {children}

            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    guitarra: null
}

export default Layout