import Layout from "../components/Layout"
import Listado from "../components/Listado";

const Tienda = ({guitarras}) => {

    return (
        <Layout
            pagina="Tienda"
        >
            <main className="contenedor">
                <h1 className="heading">Nuestra colección</h1>
                <Listado
                    guitarras = {guitarras}
                />
            </main>

        </Layout>
    )
}

// Corre en servidor
export async function getServerSideProps() {
    const url = `${process.env.API_URL}/guitarras?_sort=created_at:desc`;
    const respuesta = await fetch(url);
    const guitarras = await respuesta.json();

    return {
        props: {
            guitarras : guitarras
        }
    }
}

export default Tienda