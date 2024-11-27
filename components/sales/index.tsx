import { Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export const Sale = () => {
    return(
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center ">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">Últimos clientes</CardTitle>
                    <Users className="ml-auto w-4 h-4"/>
                </div>
                <CardDescription>
                    Novos clientes nas últimas 24 horas
                </CardDescription>
            </CardHeader>
            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/Bielzera97.png"/>
                        <AvatarFallback>GS</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Gabriel Silveira</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">ramos.gsrc@gmail.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/devfraga.png"/>
                        <AvatarFallback>DF</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Dev Fraga</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">emaildele@gmail.com</span>
                    </div>
                </article>
            </CardContent>

        </Card>
    )
}