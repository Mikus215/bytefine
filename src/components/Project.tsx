import React, { useRef } from 'react';
import defaultPoster from '../assets/default-background.png'
import PictureBaner from './PictureBaner';
import TextAreaField from './TextAreaField';

interface ProjectProps {
    startEditing: boolean;
    fileBackgroundUpload: string | ArrayBuffer | null;
    filePictureUpload: string | ArrayBuffer | null;
    projectContainer: React.RefObject<HTMLDivElement>;
    setFilePictureUpload: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>;
    setTextareaValue: React.Dispatch<React.SetStateAction<string>>;
    textareaValue: string;
    setShowTextarea: React.Dispatch<React.SetStateAction<boolean>>;
    showTextarea: boolean;
}

const Project: React.FC<ProjectProps> = ({ startEditing, fileBackgroundUpload, filePictureUpload, projectContainer, setFilePictureUpload, setTextareaValue, textareaValue, setShowTextarea, showTextarea}) => {

    

    return ( 
        <div className={`project`} ref={projectContainer} style={{backgroundImage: 'url(' + fileBackgroundUpload + ')'}}>
            {!startEditing && <img src={defaultPoster} alt="" />}
            {startEditing && 
                <>
                    {showTextarea && <TextAreaField projectContainer={projectContainer} startEditing={startEditing} setTextareaValue={setTextareaValue} textareaValue={textareaValue} setShowTextarea={setShowTextarea}/>}
                    {filePictureUpload && <PictureBaner filePictureUpload={filePictureUpload} projectContainer={projectContainer} startEditing={startEditing} setFilePictureUpload={setFilePictureUpload}/>}
                </>
            }
        </div>
     );
}
 
export default Project;