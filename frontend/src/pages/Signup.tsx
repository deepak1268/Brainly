import { InputBox } from "../components/InputBox"


export const Signup = () => {
    return <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex flex-col justify-center items-center w-full max-w-md border bg-white">
            <InputBox placeholder="Enter Username"></InputBox>
            <InputBox placeholder="Enter Password"></InputBox>
            
        </div>
    </div>
}