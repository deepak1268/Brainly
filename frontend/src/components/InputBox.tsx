interface InputProps{
    placeholder: string;
    onChange: () => void;

}

export const InputBox = (props: InputProps) => {
    return <div>
        <input type="text" placeholder={props.placeholder} onChange={props.onChange} className="px-4 py-2 w-full my-2 text-lg border-2 border-gray-200"/>
    </div>
}