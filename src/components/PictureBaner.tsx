import React, { useEffect, useRef } from 'react'
import iconMove from '../assets/icon-move.svg'
import trashcan from '../assets/trashcan.svg'
import DragMove from '../utils/DragMove';

interface PictureBanerProps {
    filePictureUpload: any;
    projectContainer: React.RefObject<HTMLDivElement>;
    startEditing: boolean;
    setFilePictureUpload: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>;
}

const PictureBaner: React.FC<PictureBanerProps> = ({filePictureUpload, projectContainer, startEditing, setFilePictureUpload}) => {
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

    return ( 
        <DragMove boxContainer={boxContainer} iconMoveRef={iconMoveRef} isClicked={isClicked} coords={coords} projectContainer={projectContainer} startEditing={startEditing}>
            <div ref={boxContainer} className="project__baner-box">
                {filePictureUpload && <img src={filePictureUpload} alt=""  className="project__baner"/>}
                <div className='project__picture-move' ref={iconMoveRef}>
                    <img src={iconMove} alt=""/>
                </div>
                <button className='project__textarea-trashcan-baner' onClick={() => setFilePictureUpload("")}>
                    <img src={trashcan} alt=""/>
                </button>
            </div>
        </DragMove>
     );
}
 
export default PictureBaner;