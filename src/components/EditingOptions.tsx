import React from 'react'

interface EditingOptionsProps {
    imgUrl: string;
    handleStartEditing: (type: string) => void;
    text: string;
    setFileBackgroundUpload: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>;
    setFilePictureUpload: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>;
}

const EditingOptions: React.FC<EditingOptionsProps> = ({imgUrl, handleStartEditing, text, setFileBackgroundUpload, setFilePictureUpload}) => {

    const uploadImageHanler = (e: any) => {
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            if(e.target.id === "Background") return setFileBackgroundUpload(reader.result)
            setFilePictureUpload(reader.result)
        }
    }

    const startEditingProject = () => handleStartEditing(text === "Text" ? "text" : "")

    return ( 
    <div className="editor__box">
        <div className="editor__box-content">
            <img src={imgUrl} alt="" />
            <button className='editor__option' onClick={startEditingProject}>
                {
                    text === "Text" ? 
                        text : 
                    (
                        <>
                            <label htmlFor={text} className="editor__picture-label">{text}</label>
                            <input type="file" id={text} className="editor__picture" accept='image/*' onChange={uploadImageHanler}/>
                        </>
                    )
                }
            </button>
        </div>
    </div>
     );
}
 
export default EditingOptions;