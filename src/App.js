import Formulario from "./components/Formulario"
import VisualizarCurriculo from "./components/VisualizarCurriculo"
import { useEffect, useState } from "react"
import Button from "./components/Button"

const App = () => {
  const [showForm, setshowForm] = useState(false)
  const [content, setContent] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    const STORAGE_KEY = 'my-curriculum'
    const curriculum = localStorage.getItem(STORAGE_KEY)
        
    if (curriculum != null) {
      setContent(JSON.parse(curriculum))
      
    }

  }

  const handleClick = () => {
    setshowForm(true)
  }

  const onSave = (curriculumData) => {
    setContent(curriculumData)
    setshowForm(false)
  }

  return (
    <div className="App">
      {showForm ? <Formulario curriculumData={content} onSave={onSave} /> : content != null ? <VisualizarCurriculo onEdit={handleClick} curriculumData={content}/> : <Button onClick={handleClick} />}
      
    </div>
  )
}

export default App