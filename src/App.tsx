import React, { useRef, useState, useEffect } from 'react'
import Editor from './components/Editor'
import Project from './components/Project'

function App() {

  const [startEditing, setStartEditinig] = useState(false)
  const [fileBackgroundUpload, setFileBackgroundUpload] = useState<string | ArrayBuffer | null>("")
  const [filePictureUpload, setFilePictureUpload] = useState<string | ArrayBuffer | null>("")
  const [textareaValue, setTextareaValue] = useState<string>("")
  const [showTextarea, setShowTextarea] = useState(false)
  const projectContainer = useRef<HTMLDivElement>(null)


  const handleStartEditing = (type: string) => {
    if(type === "text") setShowTextarea(true)
    setStartEditinig(true)
  }

  const resetEditor = () => {
    setFileBackgroundUpload("")
    setFilePictureUpload("")
    setTextareaValue("")
    setShowTextarea(false)
    setStartEditinig(false)
  }

  useEffect(() => {
    if(textareaValue === "" && filePictureUpload === "" && fileBackgroundUpload === "") setStartEditinig(false)
  },[textareaValue, filePictureUpload])

  return (
    <div className="app">
      <Project 
        startEditing={startEditing} 
        fileBackgroundUpload={fileBackgroundUpload} 
        filePictureUpload={filePictureUpload} 
        projectContainer={projectContainer} 
        setFilePictureUpload={setFilePictureUpload}
        setTextareaValue={setTextareaValue}
        textareaValue={textareaValue}
        setShowTextarea={setShowTextarea}
        showTextarea={showTextarea}
      />
      <Editor 
        handleStartEditing={handleStartEditing} 
        setFileBackgroundUpload={setFileBackgroundUpload} 
        setFilePictureUpload={setFilePictureUpload} 
        projectContainer={projectContainer}
        resetEditor={resetEditor}
      />
    </div>
  )
}

export default App
