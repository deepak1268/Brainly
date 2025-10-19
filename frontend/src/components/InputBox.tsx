import React from 'react';

interface InputProps{
    placeholder: string;
    reference?: React.Ref<HTMLInputElement>;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    value?: string;
    text: string;
}

export const InputBox = (props: InputProps) => {
    return <div >
        <span className='font-medium text-lg'>
            {props.text}
        </span>
        <input value={props.value} onChange={props.onChange} ref={props.reference} type="text" placeholder={props.placeholder} className="px-4 py-2 w-full text-lg border-2 border-gray-200"/>
    </div>
}