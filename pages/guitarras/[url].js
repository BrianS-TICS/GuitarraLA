import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Guitarra.module.css'

const Producto = ({ guitarra , agregarCarrito}) => {
    
    const { nombre, descripcion, imagen, precio, id } = guitarra[0]

    const [cantidad, setCantidad] = useState(1)

    const handleSubmit = e => {
        e.preventDefault();
        if (cantidad < 1) {
            alert('Cantidad no válida');
            return;
        }

        const guitarraSeleccionada = {
            id,
            imagen : imagen[0].url,
            nombre,
            precio,
            cantidad
        }

        agregarCarrito(guitarraSeleccionada);
    }


    return (
        <Layout
            pagina={`Guitarra ${nombre}`}
        >
            <div className={styles.guitarra}>
                <Image layout='responsive' width={180} height={350} src={imagen[0].url} alt={`Imagen de guitarra ${nombre}`} />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>

                    <form onSubmit={handleSubmit} className={styles.formulario}>
                        <label htmlFor=''>Cantidad</label>
                        <select value={cantidad} onChange={ e => setCantidad(parseInt(e.target.value))}>
                            <option value="0">--Seleccione--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>

                        <input type="submit" name="" value="Agregar al carrito"/>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ query: { url } }) {

    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`;

    // Al consultar una url usando un filto "?" el resultado será un objeto dentro de otro objeto
    const respuesta = await fetch(urlGuitarra);
    const guitarra = await respuesta.json();

    return {
        props: {
            guitarra
        }
    }
}

export default Producto