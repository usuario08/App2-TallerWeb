function Tarea({ tarea, indice }) {
    return (
        <div style={{
            color: '#2C3E50',
            margin: '4px 0px 4px 0px',
            padding: '4px',
            backgroundColor: '#08F7FE',
            borderRadius: '7px',
        }}>
            <span style={{
                marginRight: '5px',
                fontWeight: 'bold',
                color: '#FF2079'
            }}>{indice}</span>
            <span>{tarea}</span>
        </div>
    )
}

export default Tarea;