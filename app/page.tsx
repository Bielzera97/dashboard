import { Graphic } from "@/components/graphic";
import { Sale } from "@/components/sales";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Percent, Receipt, User2 } from "lucide-react";


export default function Home() {
  return (
    <main className="sm:ml-14 p-4"> 
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4"> 
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">Total de Vendas</CardTitle>
                <DollarSign className="ml-auto h-4 w-4"/>
              </div>
              <CardDescription>
                Total de vendas em 90 dias
              </CardDescription>
            </CardHeader>
            <CardContent className="text-base sm:text-lg font-bold">
              <p>R$40.000,00</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">Novos Clientes</CardTitle>
                <User2 className="ml-auto h-4 w-4"/>
              </div>
              <CardDescription>
                Novos clientes em 90 dias
              </CardDescription>
            </CardHeader>
            <CardContent className="text-base sm:text-lg font-bold">
              <p>260</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">Pedidos Hoje</CardTitle>
                <Percent className="ml-auto h-4 w-4"/>
              </div>
              <CardDescription>
                Total de pedidos hoje
              </CardDescription>
            </CardHeader>
            <CardContent className="text-base sm:text-lg font-bold">
              <p>65</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">Total Pedidos</CardTitle>
                <Receipt className="ml-auto h-4 w-4"/>
              </div>
              <CardDescription>
                Total de pedidos em 30 dias
              </CardDescription>
            </CardHeader>
            <CardContent className="text-base sm:text-lg font-bold">
              <p>2300</p>
            </CardContent>
          </Card>

        </section>
        <section className="mt-4 flex flex-col md:flex-row gap-4">
          <Graphic/>
          <Sale/>
        </section>
    </main>
  );
}
