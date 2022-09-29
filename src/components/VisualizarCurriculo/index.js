const VisualizarCurriculo = ({ onEdit, curriculumData }) => {
    return(
        <div>
            <div>
                <div>
                    <h1>{curriculumData.name}</h1>
                    <br/>
                    <p>{curriculumData.email}</p>
                    <br/>
                    <p>{curriculumData.phone}</p>
                </div>
                <br/>
                <div>
                    <p>{curriculumData.position}</p>
                    <br/>
                    <p>{curriculumData.description}</p>
                </div>

                <button onClick={onEdit}>Editar</button>
            </div>
        </div>
    )
}

export default VisualizarCurriculo