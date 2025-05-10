"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Medal, Award, ArrowUp, ArrowDown, Minus } from "lucide-react"

export function DonorRankingTable() {
  // Dados de exemplo para o ranking
  const rankingData = [
    {
      id: 1,
      position: 1,
      name: "Mercado Bom Preço",
      location: "Boa Viagem",
      type: "Supermercado",
      donationAmount: 1250,
      donationCount: 42,
      trend: "up",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      position: 2,
      name: "Feira de Afogados",
      location: "Afogados",
      type: "Feira",
      donationAmount: 980,
      donationCount: 65,
      trend: "up",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      position: 3,
      name: "Padaria São José",
      location: "Casa Amarela",
      type: "Padaria",
      donationAmount: 745,
      donationCount: 38,
      trend: "down",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      position: 4,
      name: "Restaurante Sabor da Terra",
      location: "Espinheiro",
      type: "Restaurante",
      donationAmount: 680,
      donationCount: 25,
      trend: "same",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      position: 5,
      name: "Hortifruti Recife",
      location: "Madalena",
      type: "Hortifruti",
      donationAmount: 620,
      donationCount: 30,
      trend: "up",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      position: 6,
      name: "Supermercado Pão de Açúcar",
      location: "Boa Viagem",
      type: "Supermercado",
      donationAmount: 580,
      donationCount: 22,
      trend: "down",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 7,
      position: 7,
      name: "Feira de Casa Amarela",
      location: "Casa Amarela",
      type: "Feira",
      donationAmount: 520,
      donationCount: 45,
      trend: "up",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 8,
      position: 8,
      name: "Mercadinho da Esquina",
      location: "Cordeiro",
      type: "Mercado",
      donationAmount: 480,
      donationCount: 28,
      trend: "same",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 9,
      position: 9,
      name: "Padaria Delícia",
      location: "Encruzilhada",
      type: "Padaria",
      donationAmount: 450,
      donationCount: 32,
      trend: "up",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 10,
      position: 10,
      name: "Restaurante Sabor do Nordeste",
      location: "Derby",
      type: "Restaurante",
      donationAmount: 420,
      donationCount: 18,
      trend: "down",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  // Função para renderizar o ícone de posição
  const renderPositionIcon = (position: number) => {
    if (position === 1) return <Trophy className="h-5 w-5 text-yellow-500" />
    if (position === 2) return <Medal className="h-5 w-5 text-gray-400" />
    if (position === 3) return <Award className="h-5 w-5 text-amber-500" />
    return null
  }

  // Função para renderizar o ícone de tendência
  const renderTrendIcon = (trend: string) => {
    if (trend === "up") return <ArrowUp className="h-4 w-4 text-green-600" />
    if (trend === "down") return <ArrowDown className="h-4 w-4 text-red-600" />
    return <Minus className="h-4 w-4 text-gray-400" />
  }

  // Função para renderizar o tipo de estabelecimento com badge
  const renderTypeBadge = (type: string) => {
    const colors: Record<string, string> = {
      Supermercado: "bg-blue-100 text-blue-800",
      Feira: "bg-green-100 text-green-800",
      Padaria: "bg-amber-100 text-amber-800",
      Restaurante: "bg-red-100 text-red-800",
      Hortifruti: "bg-emerald-100 text-emerald-800",
      Mercado: "bg-indigo-100 text-indigo-800",
    }

    return <Badge className={colors[type] || "bg-gray-100 text-gray-800"}>{type}</Badge>
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60px]">Pos.</TableHead>
            <TableHead>Doador</TableHead>
            <TableHead>Localização</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead className="text-right">Quantidade (kg)</TableHead>
            <TableHead className="text-right">Doações</TableHead>
            <TableHead className="text-center w-[80px]">Tendência</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rankingData.map((donor) => (
            <TableRow key={donor.id}>
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <span className="mr-2">{donor.position}</span>
                  {renderPositionIcon(donor.position)}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={donor.avatar || "/placeholder.svg"} alt={donor.name} />
                    <AvatarFallback>{donor.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{donor.name}</span>
                </div>
              </TableCell>
              <TableCell>{donor.location}</TableCell>
              <TableCell>{renderTypeBadge(donor.type)}</TableCell>
              <TableCell className="text-right font-medium">{donor.donationAmount.toLocaleString()} kg</TableCell>
              <TableCell className="text-right">{donor.donationCount}</TableCell>
              <TableCell className="text-center">{renderTrendIcon(donor.trend)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
