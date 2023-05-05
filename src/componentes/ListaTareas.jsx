import Tarea from "./Tarea";

function ListaTareas({ tareas = [] }) {
    return (
        <div style={{
            border: '1px',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: 'red'
        }}>
            {
                tareas.map((elemento, index) => (
                    <Tarea
                        key={index}
                        indice={index}
                        tarea={elemento}
                    />
                ))
            }
        </div>
    )
}

export default ListaTareas;