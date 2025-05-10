import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, User } from "lucide-react"
import Image from "next/image"

interface Food {
  id: number
  title: string
  quantity: string
  expiryDate: string
  location: string
  donor: string
  image: string
}

interface FoodCardProps {
  food: Food
}

export function FoodCard({ food }: FoodCardProps) {
  return (
    <Card className="overflow-hidden border-green-100 hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full">
        <Image src={food.image || "/placeholder.svg"} alt={food.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="flex justify-between items-start">
          <span>{food.title}</span>
          <span className="text-sm font-normal bg-green-100 text-green-800 px-2 py-1 rounded-full">
            {food.quantity}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-green-600" />
            <span>Válido até: {food.expiryDate}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-green-600" />
            <span>{food.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <User className="h-4 w-4 mr-2 text-green-600" />
            <span>Doador: {food.donor}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-green-600 hover:bg-green-700">Reservar Alimento</Button>
      </CardFooter>
    </Card>
  )
}
