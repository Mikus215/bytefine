import React, { useState } from 'react'
import inkPen from '../assets/ink-pen.svg'
import reset from '../assets/reset.svg'
import text from '../assets/text.svg'
import image from '../assets/image.svg'
import cross from '../assets/cross.svg'
import warningSign from '../assets/warning-sign.svg'
import background from '../assets/background.svg'
import EditingOptions from './EditingOptions'
import ExportButton from './ExportButton'
import Modal from '../utils/Modal'

interface EditorProps {
    handleStartEditing: (type: string) => void;
    setFileBackgroundUpload: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>;
    setFilePictureUpload: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>;
    projectContainer: React.RefObject<HTMLDivElement>;
    resetEditor: () => void;
}

const Editor: React.FC<EditorProps> = ({handleStartEditing, setFileBackgroundUpload, setFilePictureUpload, projectContainer, resetEditor}) => {

    const [isOpen, setIsOpen] = useState(false)
    const handleCloseModal = () => setIsOpen(false)

    return ( 
        <>
            <div className="editor">
                <header className='editor__header'>
                    <div className="editor__logo-title">
                        <img src={inkPen} alt="" className="editor__logo"/>
                        <h1 className="editor__title">CanvasEditor</h1>
                    </div>
                    <div className="editor__reset">
                        <span>Reset</span> 
                        <button onClick={() => setIsOpen(true)}>
                            <img src={reset} alt="" />
                        </button>
                    </div>
                </header>

                <div className="editor__add-content">
                    <p className='editor__add-content-text'>Add content</p>
                </div>

                <div className="editor__container">
                    <EditingOptions imgUrl={text} handleStartEditing={handleStartEditing} text="Text" setFileBackgroundUpload={setFileBackgroundUpload} setFilePictureUpload={setFilePictureUpload}/>
                    <EditingOptions imgUrl={image} handleStartEditing={handleStartEditing} text="Image" setFileBackgroundUpload={setFileBackgroundUpload} setFilePictureUpload={setFilePictureUpload}/>
                    <EditingOptions imgUrl={background} handleStartEditing={handleStartEditing} text="Background" setFileBackgroundUpload={setFileBackgroundUpload} setFilePictureUpload={setFilePictureUpload}/>
                </div>

                <ExportButton projectContainer={projectContainer}/>
            </div>
            
            <Modal isOpen={isOpen}>
                <>
                    <button className='modal__close' onClick={handleCloseModal}>
                        <img src={cross} alt=""/>
                    </button>
                    <img src={warningSign} alt="" className='modal__warning-sign'/>
                    <p className='modal__warning-sign-title'>warning</p>
                    <p className='modal__warning-sign-description'>You're about to reset whole process. Are you sure you want to do it?</p>
                    <div className="modal__button-box">
                        <button onClick={handleCloseModal} className="modal__button">Cancel</button>
                        <button onClick={
                            () => {
                            resetEditor()
                            handleCloseModal()
                        }} className="modal__button modal__button--reset">Reset</button>
                    </div>
                </>
            </Modal>
        </>
     );
}
 
export default Editor;