function Tarea({ tarea, indice }) {
    return (
        <div style={{
            color: 'black',
            margin: '4px 0px 4px 0px',
            padding: '4px',
            backgroundColor: '#00f6da',
            borderRadius: '7px',
        }}>
            <span style={{
                marginRight: '5px',
                fontWeight: 'bold',
                color: 'blue'
            }}>{indice + 1}</span>
            <span>{tarea}</span>
        </div>
    )
}

export default Tarea;