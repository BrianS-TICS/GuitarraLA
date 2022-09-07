import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Carrito.module.css'
const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {

    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (carrito.length > 0) {
            const totalPedido = carrito.reduce((acumulacion, elemento) => acumulacion + (elemento.cantidad * elemento.precio),0);

            console.log(total);
            setTotal(totalPedido);
        }
    }, [carrito])

    return (
        <Layout
            pagina={'Carrito de compras'}
        >
            <h1 className='heading'>Carrito</h1>
            <main className={`contenedor ${styles.contenido}`}>
                <div className={styles.carrito}>
                    <h2>Articulos</h2>
                    {carrito.length === 0 ? 'Carrito vacio' : (
                        carrito.map(producto => (
                            <div key={producto.id} className={styles.producto}>
                                <div>
                                    <Image layout='responsive' src={producto.imagen} alt={`imagen de ${producto.nombre}`} width={250} height={480} />
                                </div>
                                <div>
                                    <p className={styles.nombre}>{producto.nombre}</p>
                                    <div className={styles.cantidad}>
                                        <p>Cantidad:</p>
                                        <select
                                            className={styles.select}
                                            value={producto.cantidad}
                                            onChange={e => actualizarCantidad({
                                                cantidad: e.target.value,
                                                id: producto.id
                                            })}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                        </select>
                                    </div>
                                    <p className={styles.precio}> <span> ${producto.precio} </span></p>
                                    <p className={styles.subtotal}>Subtotal: <span> ${producto.precio * producto.cantidad} </span></p>
                                </div>
                                <button type='button' key={producto.id} onClick={() => eliminarProducto(producto.id)} className={styles.eliminar}>
                                    <Image layout='fixed' width={30} height={30} src="/img/borrar.svg" alt="Boton eliminar" />
                                </button>
                            </div>
                        ))
                    )}
                </div>
                <div className={styles.resumen}>
                    {total > 0 ? (
                        <>
                            <h3>Resumen del pedido</h3>
                            <p>Total a pagar: ${total}</p>
                        </>
                    ) : (
                        <p>No hay productos agregados</p>
                    )}
                </div>
            </main>

        </Layout>
    )
}

export default Carrito