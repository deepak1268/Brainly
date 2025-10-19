import { useRef, useState } from "react"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/button"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


export const Signin = () => {
    const [loading,setLoading] = useState(false);
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signin(){
        setLoading(true)
        try{
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;
            const res = await axios.post(`${BACKEND_URL}/api/v1/signin`,{username,password});
            localStorage.setItem("token",res.data.token);
            navigate("/dashboard")
            alert("Successfuly signed in")
        } catch(err){
            alert("Incorrect Credentials")
        } finally{
            setLoading(false)
        }   
    }

    return <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex flex-col justify-center items-center w-full max-w-md bg-white p-10 shadow-xl rounded-lg">
            <InputBox text="Username" reference={usernameRef} placeholder="Enter Username"></InputBox>
            <InputBox text="Password" reference={passwordRef} placeholder="Enter Password"></InputBox>
            <br />
            <Button disabled={loading} size="lg" variant="secondary" text="Sign In" fullWidth={true} onClick={signin}></Button>
        </div>
    </div>
}