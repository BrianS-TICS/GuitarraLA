import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import Listado from '../components/Listado';
import Curso from '../components/Curso';
import Entrada from '../components/Entrada'
import ListadoBlog from "../components/ListadoBlog"

import styles from '../styles/Home.module.css';

export default function Home({ guitarras, curso, entradas }) {

  return (
    <Layout
      pagina='Inicio'
      guitarra={guitarras[3]}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra coleccion</h1>
        <Listado
          guitarras={guitarras}
        />
      </main>

      <Curso
        curso={curso}
      />

      <section className="contenedor">
        <ListadoBlog
          entradas={entradas}
        />
      </section>

    </Layout>
  )
}

// Corre en servidor
export async function getServerSideProps() {

  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=created_at:desc`;
  const urlCursos = `${process.env.API_URL}/cursos`;
  // filtro con _limit=3&
  const urlblog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;

  // Para ejecutar en paralelo
  const [resGuitarras, resCursos, resEntradas] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlblog)
  ]);

  const [guitarras, curso, entradas] = await Promise.all([
    await resGuitarras.json(),
    await resCursos.json(),
    await resEntradas.json(),
  ])

  return {
    props: {
      guitarras,
      curso,
      entradas
    }
  }
}
