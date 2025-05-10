import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Search, Filter, MapPin } from "lucide-react"
import Link from "next/link"
import { FoodCard } from "@/components/food-card"

export default function AvailableFoods() {
  // Dados de exemplo para alimentos disponíveis
  const availableFoods = [
    {
      id: 1,
      title: "Bananas",
      quantity: "3 unidades",
      expiryDate: "Sexta-feira, 12/05",
      location: "Feira de Afogados",
      donor: "Barraca do João",
      image: "/images/banana.jpg",
    },
    {
      id: 2,
      title: "Tomates",
      quantity: "1kg",
      expiryDate: "Quinta-feira, 11/05",
      location: "Mercado da Encruzilhada",
      donor: "Hortifruti Maria",
      image: "/images/tomate.jpg",
    },
    {
      id: 3,
      title: "Pão Francês",
      quantity: "10 unidades",
      expiryDate: "Hoje, 09/05",
      location: "Padaria Boa Vista",
      donor: "Padaria Boa Vista",
      image: "/images/pao.jpg",
    },
    {
      id: 4,
      title: "Leite",
      quantity: "2 litros",
      expiryDate: "Amanhã, 10/05",
      location: "Mercado de Casa Amarela",
      donor: "Supermercado Bom Preço",
      image: "/images/leite.jpg",
    },
    {
      id: 5,
      title: "Cenouras",
      quantity: "500g",
      expiryDate: "Sexta-feira, 12/05",
      location: "Feira de Água Fria",
      donor: "Barraca da Dona Maria",
      image: "/images/cenoura.jpg",
    },
    {
      id: 6,
      title: "Arroz",
      quantity: "1kg",
      expiryDate: "30/06/2025",
      location: "ONG Alimento Solidário",
      donor: "ONG Alimento Solidário",
      image: "/images/arroz.jpg",
    },
    {
      id: 7,
      title: "Maçãs",
      quantity: "6 unidades",
      expiryDate: "Domingo, 14/05",
      location: "Mercado de Boa Viagem",
      donor: "Frutaria Central",
      image: "/images/maca.jpg",
    },
    {
      id: 8,
      title: "Iogurte Natural",
      quantity: "4 unidades",
      expiryDate: "Quinta-feira, 11/05",
      location: "Mercado da Madalena",
      donor: "Laticínios do Recife",
      image: "/images/iogurte.jpg",
    },
    {
      id: 9,
      title: "Alface",
      quantity: "2 pés",
      expiryDate: "Amanhã, 10/05",
      location: "Feira do Cordeiro",
      donor: "Horta Comunitária",
      image: "/images/alface.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-green-50 py-12 px-4">
      <div className="container mx-auto">
        <Link href="/" className="inline-flex items-center text-green-700 hover:text-green-800 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para a página inicial
        </Link>

        <h1 className="text-3xl font-bold mb-8">Alimentos Disponíveis</h1>

        <Card className="border-green-100 mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Buscar alimentos..." className="pl-10" />
              </div>

              <div>
                <Select>
                  <SelectTrigger>
                    <div className="flex items-center">
                      <Filter className="mr-2 h-4 w-4 text-gray-500" />
                      <SelectValue placeholder="Tipo de Alimento" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os Tipos</SelectItem>
                    <SelectItem value="fruits">Frutas</SelectItem>
                    <SelectItem value="vegetables">Legumes e Verduras</SelectItem>
                    <SelectItem value="grains">Grãos</SelectItem>
                    <SelectItem value="bakery">Padaria</SelectItem>
                    <SelectItem value="dairy">Laticínios</SelectItem>
                    <SelectItem value="meat">Carnes</SelectItem>
                    <SelectItem value="processed">Alimentos Processados</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select>
                  <SelectTrigger>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                      <SelectValue placeholder="Bairro" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os Bairros</SelectItem>
                    <SelectItem value="boa-vista">Boa Vista</SelectItem>
                    <SelectItem value="afogados">Afogados</SelectItem>
                    <SelectItem value="agua-fria">Água Fria</SelectItem>
                    <SelectItem value="boa-viagem">Boa Viagem</SelectItem>
                    <SelectItem value="casa-amarela">Casa Amarela</SelectItem>
                    <SelectItem value="encruzilhada">Encruzilhada</SelectItem>
                    <SelectItem value="madalena">Madalena</SelectItem>
                    <SelectItem value="cordeiro">Cordeiro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            Carregar Mais Alimentos
          </Button>
        </div>
      </div>
    </main>
  )
}
