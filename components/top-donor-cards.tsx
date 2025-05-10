import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Apple, CroissantIcon as Bread, Carrot, Beef, Milk, Wheat } from "lucide-react"

export function TopDonorCards() {
  const categoryDonors = [
    {
      category: "Frutas",
      icon: <Apple className="h-5 w-5 text-red-500" />,
      color: "bg-red-50 border-red-100",
      iconBg: "bg-red-100",
      donor: {
        name: "Hortifruti Recife",
        location: "Madalena",
        amount: "320 kg",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      category: "Pães e Massas",
      icon: <Bread className="h-5 w-5 text-amber-500" />,
      color: "bg-amber-50 border-amber-100",
      iconBg: "bg-amber-100",
      donor: {
        name: "Padaria São José",
        location: "Casa Amarela",
        amount: "280 kg",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      category: "Legumes e Verduras",
      icon: <Carrot className="h-5 w-5 text-green-500" />,
      color: "bg-green-50 border-green-100",
      iconBg: "bg-green-100",
      donor: {
        name: "Feira de Afogados",
        location: "Afogados",
        amount: "410 kg",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      category: "Carnes",
      icon: <Beef className="h-5 w-5 text-rose-500" />,
      color: "bg-rose-50 border-rose-100",
      iconBg: "bg-rose-100",
      donor: {
        name: "Mercado Bom Preço",
        location: "Boa Viagem",
        amount: "190 kg",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      category: "Laticínios",
      icon: <Milk className="h-5 w-5 text-blue-500" />,
      color: "bg-blue-50 border-blue-100",
      iconBg: "bg-blue-100",
      donor: {
        name: "Supermercado Pão de Açúcar",
        location: "Boa Viagem",
        amount: "150 kg",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      category: "Grãos",
      icon: <Wheat className="h-5 w-5 text-yellow-500" />,
      color: "bg-yellow-50 border-yellow-100",
      iconBg: "bg-yellow-100",
      donor: {
        name: "Mercadinho da Esquina",
        location: "Cordeiro",
        amount: "230 kg",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categoryDonors.map((item, index) => (
        <Card key={index} className={`border ${item.color}`}>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-full ${item.iconBg}`}>{item.icon}</div>
              <h3 className="font-medium">{item.category}</h3>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={item.donor.avatar || "/placeholder.svg"} alt={item.donor.name} />
                  <AvatarFallback>{item.donor.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{item.donor.name}</p>
                  <p className="text-sm text-gray-500">{item.donor.location}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-700">{item.donor.amount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
