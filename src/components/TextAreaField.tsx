import React, { useState, useRef, useEffect, TextareaHTMLAttributes, ChangeEvent } from 'react'
import iconMove from '../assets/icon-move.svg'
import trashcan from '../assets/trashcan.svg'
import DragMove from '../utils/DragMove';
import Input from './Input';

interface TextEditorFieldProps {
    startEditing: boolean;
    projectContainer: React.RefObject<HTMLDivElement>;
    setTextareaValue: React.Dispatch<React.SetStateAction<string>>;
    textareaValue: string;
    setShowTextarea: React.Dispatch<React.SetStateAction<boolean>>;
}


const TextEditorField: React.FC<TextEditorFieldProps> = ({startEditing, projectContainer, setTextareaValue, textareaValue, setShowTextarea}) => {

    const [textareaColor, setTextareaColor] = useState("white")

    const setColorHanlder = (e: React.ChangeEvent<HTMLInputElement>) => setTextareaColor(e.target.value)

    const boxContainer = useRef<HTMLDivElement>(null)
    const iconMoveRef = useRef<HTMLDivElement>(null)
    const isClicked = useRef<boolean>(false)
    const coords = useRef<{
        startX: number,
        startY: number,
        lastX: number,
        lastY: number
      }>({
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0
      })

      const deleteTextarea = () => {
        setShowTextarea(false)
        setTextareaValue("")
      }

      const handleTextareaValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => setTextareaValue(e.target.value)

    return ( 
        <DragMove boxContainer={boxContainer} iconMoveRef={iconMoveRef} isClicked={isClicked} coords={coords} projectContainer={projectContainer} startEditing={startEditing}>
            <div className="project__textarea-container" ref={boxContainer}>

                <div className='project__textarea-move' ref={iconMoveRef}>
                    <img src={iconMove} alt=""/>
                </div>
                <button className='project__textarea-trashcan' onClick={deleteTextarea}>
                    <img src={trashcan} alt=""/>
                </button>
                <textarea placeholder='Type your text here' className={`project__textarea ${textareaValue.length === 0 && 'project__textarea--opacity'}`} style={{color: textareaColor}} value={textareaValue} onChange={handleTextareaValue}></textarea>

                <div className="project__colors-box">
                    <Input color='black' onSetColorHanlder={setColorHanlder}/>
                    <Input color='white' onSetColorHanlder={setColorHanlder}/>
                    <Input color='red' onSetColorHanlder={setColorHanlder}/>
                    <Input color='blue' onSetColorHanlder={setColorHanlder}/>
                    <Input color='green' onSetColorHanlder={setColorHanlder}/>
                </div>
            </div>
        </DragMove>
     );
}
 
export default TextEditorField;