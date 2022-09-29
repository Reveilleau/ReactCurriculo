import { useEffect, useState } from "react"


const Formulario = ({ onSave, curriculumData }) => {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[phone, setPhone] = useState('')
    const[position, setPosition] = useState('')
    const[description, setDescription] = useState('')

    useEffect(() => {
        if (curriculumData != null) {
            setName(curriculumData.name)
            setEmail(curriculumData.email)
            setPhone(curriculumData.phone)
            setPosition(curriculumData.position)
            setDescription(curriculumData.description)
        }
    }, [])

    const saveData = (newCurriculum) => {
        const STORAGE_KEY = 'my-curriculum'
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newCurriculum))
    }

    const save = () => {
        const curriculumData = {
            name,
            email,
            phone,
            position,
            description
        }

        onSave(curriculumData)
        saveData(curriculumData)
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Nome" 
                value={name}
                onChange={event => setName(event.target.value)}/><br/>
                
                <input type="email" placeholder="E-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}/><br/>
                
                <input type="text" placeholder="Telefone"
                value={phone} 
                onChange={event => setPhone(event.target.value)}/><br/>
                
                <input type="text" placeholder="Cargo"
                value={position} 
                onChange={event => setPosition(event.target.value)}/><br/>

                <textarea type="text" placeholder="Experiencia profissional"
                value={description} 
                onChange={event => setDescription(event.target.value)}/>
            </div>

            <button onClick={save}>Salvar</button>
        </div>
    )
}

export default Formulario