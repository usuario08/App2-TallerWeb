import { useState } from 'react';
import ListaTareas from './componentes/ListaTareas'
import './App.css';

function App() {

    const [tareas, setTareas] = useState([
        'Realizar compras',
        'Lavar ropa',
        'Cocinar',
        'Sacar al perro al parque',
        'Asistir a las clases de Taller Web'
    ]);
    const [titulo, setTitulo] = useState('Lista de Tareas');
    const [contador, setContador] = useState(0);

    const CambiarTitulo = () => {
        setTitulo('Nuevo Titulo ' + contador);
        setContador(contador + 1);
    }

    return (
        <div className='app'>
            <h1 className='titulo'>{titulo}</h1>
            <ListaTareas tareas={tareas} />
            <button onClick={CambiarTitulo} className='btn'> Cambiar Titulo</button>
        </div>
    );
}

export default App;
