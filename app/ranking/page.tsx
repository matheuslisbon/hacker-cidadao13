import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Trophy, Medal, Award, Download, Filter } from "lucide-react"
import Link from "next/link"
import { DonorRankingTable } from "@/components/donor-ranking-table"
import { DonationChart } from "@/components/donation-chart"
import { TopDonorCards } from "@/components/top-donor-cards"

export default function RankingPage() {
  return (
    <main className="min-h-screen bg-green-50 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <Link href="/" className="inline-flex items-center text-green-700 hover:text-green-800 mb-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para a página inicial
            </Link>
            <h1 className="text-3xl font-bold">Ranking de Doadores</h1>
            <p className="text-gray-600 mt-1">
              Conheça os estabelecimentos e pessoas que mais contribuem para o combate ao desperdício
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
            <Select defaultValue="month">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Última Semana</SelectItem>
                <SelectItem value="month">Último Mês</SelectItem>
                <SelectItem value="quarter">Último Trimestre</SelectItem>
                <SelectItem value="year">Último Ano</SelectItem>
                <SelectItem value="all">Todo o Período</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Exportar Dados
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-yellow-700 text-sm font-medium">1º Lugar</p>
                  <h3 className="text-xl font-bold text-yellow-900">Mercado Bom Preço</h3>
                  <p className="text-yellow-700 mt-1">Boa Viagem</p>
                </div>
                <Trophy className="h-12 w-12 text-yellow-500" />
              </div>
              <div className="mt-4">
                <p className="text-yellow-900 text-3xl font-bold">1.250 kg</p>
                <p className="text-yellow-700 text-sm">de alimentos doados</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-600 text-sm font-medium">2º Lugar</p>
                  <h3 className="text-xl font-bold text-gray-800">Feira de Afogados</h3>
                  <p className="text-gray-600 mt-1">Afogados</p>
                </div>
                <Medal className="h-12 w-12 text-gray-400" />
              </div>
              <div className="mt-4">
                <p className="text-gray-800 text-3xl font-bold">980 kg</p>
                <p className="text-gray-600 text-sm">de alimentos doados</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-amber-700 text-sm font-medium">3º Lugar</p>
                  <h3 className="text-xl font-bold text-amber-900">Padaria São José</h3>
                  <p className="text-amber-700 mt-1">Casa Amarela</p>
                </div>
                <Award className="h-12 w-12 text-amber-500" />
              </div>
              <div className="mt-4">
                <p className="text-amber-900 text-3xl font-bold">745 kg</p>
                <p className="text-amber-700 text-sm">de alimentos doados</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="table" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
            <TabsTrigger value="table">Tabela de Ranking</TabsTrigger>
            <TabsTrigger value="chart">Gráfico de Doações</TabsTrigger>
          </TabsList>
          <TabsContent value="table" className="mt-6">
            <Card>
              <CardHeader className="pb-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle>Ranking Completo</CardTitle>
                    <CardDescription>Todos os doadores ordenados por quantidade de alimentos doados</CardDescription>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0">
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <Filter className="h-3 w-3" />
                      Filtrar
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <DonorRankingTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="chart" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Gráfico de Doações</CardTitle>
                <CardDescription>Visualização das doações dos 10 maiores doadores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <DonationChart />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Maiores Doadores por Categoria</CardTitle>
            <CardDescription>Conheça os destaques em cada categoria de alimentos</CardDescription>
          </CardHeader>
          <CardContent>
            <TopDonorCards />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
