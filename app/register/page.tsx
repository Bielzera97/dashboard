"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import {auth} from "../../lib/firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useRouter } from "next/navigation"

const Register = () => {
    const router = useRouter()
    const [username, setUser] = useState<string>("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleClick = async () => {
        try{
            const useCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = useCredential.user;
            await updateProfile(user, {
                displayName: username
            }) 
            alert("Usuário criado com sucesso!" + user.displayName)
            router.push('/')
        }
        

        catch(err) {
            console.log(err)
        }
    }


    return(
        <div className="flex items-center justify-center mt-24">
        <Card className="px-10">
            <CardHeader>
                <CardTitle>Registro</CardTitle>
            </CardHeader>
            <CardContent>
                <Input type="text" placeholder="Usuário" value={username} onChange={(e) => setUser(e.target.value)}/>
                <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button onClick={handleClick}>Registrar</Button>
            </CardContent>
        </Card>
        </div>
    )
}

export default Register