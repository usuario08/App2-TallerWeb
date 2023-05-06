import { useState } from 'react';
import ListaTareas from './componentes/ListaTareas'
import './App.css';

function App() {

    const [nuevaTarea, setNuevaTarea] = useState('');

    const [tareas, setTareas] = useState([]);

    const EliminarTarea = () => {
        tareas.shift();
        setTareas([...tareas]);
    }

    const AgregarTarea = () => {
        tareas.push({id: tareas.length + 1, tarea: nuevaTarea})
        setTareas([...tareas])
        setNuevaTarea('');
    }

    return (
        <div className='app'>
            <input onChange={e => setNuevaTarea(e.target.value)} value={nuevaTarea}/>
            <button onClick={AgregarTarea}>Agregar Tarea</button>
            <h1 className='titulo'>Lista de Tareas</h1>
            <ListaTareas tareas={tareas} />
            <button onClick={EliminarTarea} className='btn'>Eliminar Tarea</button>
        </div>
    );
}

export default App;
