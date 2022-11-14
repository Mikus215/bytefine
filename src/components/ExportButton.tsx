import React, { useCallback } from 'react'
import { toPng } from 'html-to-image'
import format from 'date-fns/format';

interface ExportButtonProps {
    projectContainer: React.RefObject<HTMLDivElement>;
}

const ExportButton: React.FC<ExportButtonProps> = ({ projectContainer }) => {

  const getFileName = (fileType:string) => `${format(new Date(), "'SomeName-'HH-mm-ss")}.${fileType}`

  const downloadPng = useCallback(() => {
    if (projectContainer.current === null) {
      return
    }
    toPng(projectContainer.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = `${getFileName('png')}`
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [projectContainer]);


    return <button className='editor__export-btn' onClick={downloadPng}>Export to PNG</button>
}
 
export default ExportButton;