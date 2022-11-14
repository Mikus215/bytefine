import React, { useEffect } from 'react';

interface DragMoveProps {
    boxContainer: React.RefObject<HTMLDivElement>;
    iconMoveRef: React.RefObject<HTMLDivElement>;
    isClicked: React.MutableRefObject<boolean>;
    coords: React.MutableRefObject<{
        startX: number;
        startY: number;
        lastX: number;
        lastY: number;
    }>;
    projectContainer: React.RefObject<HTMLDivElement>;
    startEditing: boolean;
    children: JSX.Element;
}

const DragMove: React.FC<DragMoveProps> = ({boxContainer, iconMoveRef, isClicked, coords, projectContainer, startEditing, children}) => {
    
    useEffect(() => {
        if(!iconMoveRef.current || !projectContainer.current || !boxContainer.current) return;

        const container = projectContainer.current
        const box = boxContainer.current
        const icon = iconMoveRef.current

        const onMouseDown = (e: MouseEvent) => {
            isClicked.current = true
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
        }

        const onMouseUp = (e: MouseEvent) => {
            isClicked.current = false
            coords.current.lastX = box.offsetLeft;
            coords.current.lastY = box.offsetTop;
        }

        const onMouseMove = (e: MouseEvent) => {
            if(!isClicked.current) return

            const nextX = e.clientX - coords.current.startX + coords.current.lastX;
            const nextY = e.clientY - coords.current.startY + coords.current.lastY;
      
            box.style.top = `${nextY}px`;
            box.style.left = `${nextX}px`;
        }

        icon.addEventListener('mousedown', onMouseDown)
        icon.addEventListener('mouseup', onMouseUp)
        container.addEventListener('mousemove', onMouseMove)
        
        const cleanUp = () => {
            icon.removeEventListener('mousedown', onMouseDown)
            icon.removeEventListener('mouseup', onMouseUp)
            container.removeEventListener('mousemove', onMouseMove)
        }

        return cleanUp
    }, [startEditing])

    return children;
}
 
export default DragMove;