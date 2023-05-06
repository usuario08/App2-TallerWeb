import Tarea from "./Tarea";

function ListaTareas({ tareas = [] }) {
    return (
        <div style={{
            border: '1px',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#2C3E50'
        }}>
            {
                tareas.map((elemento, index) => (
                    <Tarea
                        key={index}
                        indice={elemento.id}
                        tarea={elemento.tarea}
                    />
                ))
            }
        </div>
    )
}

export default ListaTareas;