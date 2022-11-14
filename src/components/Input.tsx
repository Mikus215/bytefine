import React from 'react';

interface InputProps {
    color: string;
    onSetColorHanlder: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({color, onSetColorHanlder}) => {
    return ( 
    <div className="project__color">
        <label htmlFor={`${color}`} className={`project__label project__label--${color}`}></label>
        <input type="radio" name='colors' value={`${color}`} className={`project__radio project__radio--${color}`} id={`${color}`} onChange={onSetColorHanlder} />
    </div>
     );
}
 
export default Input;