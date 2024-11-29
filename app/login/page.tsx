"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import {auth} from "../../lib/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"


const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter(); 

    const handleSubmit = async () => {
        try{
            signInWithEmailAndPassword(auth, email, password)
            console.log("Usuário logado com sucesso")

            router.push('/')
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <div className="flex items-center justify-center mt-24">
        <Card className="px-10">
            <CardHeader className="flex items-center">
                <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
                <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button onClick={handleSubmit}>Login</Button>
            </CardContent>
        </Card>
        </div>
    )
}

export default Login