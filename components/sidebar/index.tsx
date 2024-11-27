"use client"
import Link from "next/link"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { Home, LogOut, Package, PanelBottom, Settings, ShoppingBag, Users } from "lucide-react"
import { TooltipProvider, TooltipTrigger, Tooltip, TooltipContent } from "../ui/tooltip"
import { signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"



export const Sidebar = () => {




    const handleLogOut = async () => {
        try { 
            await signOut(auth)
            alert('Deslogado!')
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div className="flex w-full flex-col bg-muted/40">

            <aside className="fixed inset-y-0 left-0 z-10 hidden border-r w-14 bg-background sm:flex flex-col">
                <nav className="flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Link href={"/"} className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full">
                            <Package className="h-4 w-4"/>
                            <span className="sr-only">Dashboard</span>
                        </Link>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href={"/"} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                                    <Home className="h-5 w-5"/>
                                    <span className="sr-only">Home</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Início
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href={"/"} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                                    <ShoppingBag className="h-5 w-5"/>
                                    <span className="sr-only">Pedidos</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Pedidos
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href={"/"} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                                    <Package className="h-5 w-5"/>
                                    <span className="sr-only">Produtos</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Produtos
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href={"/"} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                                    <Users className="h-5 w-5"/>
                                    <span className="sr-only">User</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Usuário
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href={"/"} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                                    <Settings className="h-5 w-5"/>
                                    <span className="sr-only">Configurações</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Configurações
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
                <nav className="mt-auto flex flex-col  items-center gap-4 px-2 py-4">
                    <TooltipProvider>
                    <Tooltip>
                            <TooltipTrigger asChild>
                                <Button onClick={handleLogOut} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                                    <LogOut className="h-5 w-5"/>
                                    <span className="sr-only">Sair</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Sair
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>



            <div className="sm:hidden flex flex-col sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelBottom className="w-5 h-5"/>
                                <span className="sr-only" >Abrir/Fechar menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetTitle/>
                        <SheetContent side="left" className="sm:max-w-x">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link href={"/"} className="flex w-10 h-10 bg-primary rounded-full text-lg text-primary-foreground items-center  justify-center md:text-base" prefetch={false}>
                                    <Package className="h-5 w-5 transition-all"/>
                                    <span className="sr-only">Logo do Projeto</span>
                                </Link>
                                <Link href={'/'} className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                                    <Home className="w-5 h-5 transition-all"/>
                                    Início
                                </Link>
                                <Link href={'/'} className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                                    <ShoppingBag className="w-5 h-5 transition-all"/>
                                    Pedidos
                                </Link>
                                <Link href={'/'} className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                                    <Package className="w-5 h-5 transition-all"/>
                                    Produtos
                                </Link>
                                <Link href={'/'} className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                                    <Users className="w-5 h-5 transition-all"/>
                                    Usuários
                                </Link>
                                <Link href={'/'} className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                                    <Settings className="w-5 h-5 transition-all"/>
                                    Configurações
                                </Link>
                            </nav>
                            </SheetContent>
                    </Sheet>
                    <h2>Menu</h2>

                </header>
            </div>
        </div>
    )
}