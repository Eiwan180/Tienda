import './App.css'
import { useState } from 'react';
import { Catalogo } from './Catalogo';
import { productos } from './datos';
import { Encabezado } from './Encabezado';
import { Layout } from './Layout';
import { PiePagina } from './PiePagina';
import { Filtros } from './Filtros';

const categorias = ["todas", ...new Set(productos.map((p) => p.categoria))];


function App() {
  const [categoria, setCategoria] = useState("todas");

  const productosVisibles = categoria === "todas" ? productos : productos.filter((p) => p.categoria === categoria);

  return (
    <Layout encabezado={<Encabezado piezas={0} />}pie={<PiePagina piezas={0} total={0} />}>
      <section className="portada">
        <h1>Catalogo de temporada</h1>
        <Filtros categorias={categorias} activa={categoria} onCambiar={setCategoria} />
        <Catalogo productos={productosVisibles} onAgregar={(p) => console.log('agregar', p.nombre)} />
      </section>
    </Layout>
  );
}

export default App
