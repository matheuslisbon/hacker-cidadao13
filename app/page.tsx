import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ShoppingBasket, Users } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { FoodCard } from "@/components/food-card"
import { HowItWorks } from "@/components/how-it-works"

export default function Home() {
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
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Alimentos Disponíveis Agora</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableFoods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/alimentos">
              <Button className="bg-green-600 hover:bg-green-700">
                Ver todos os alimentos disponíveis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <HowItWorks />

      <section className="py-16 px-4 md:px-8 bg-green-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Junte-se à Nossa Missão</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-green-200 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingBasket className="mr-2 h-6 w-6 text-green-600" />
                  Para Doadores
                </CardTitle>
                <CardDescription>
                  Cadastre seus alimentos que estão próximos do vencimento e ajude a combater o desperdício
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Se você é um comerciante, feirante ou mesmo um morador que possui alimentos em boas condições que não
                  serão consumidos, cadastre-se e faça a diferença.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/cadastro-doador">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Cadastrar como Doador</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-green-200 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-6 w-6 text-green-600" />
                  Para Beneficiários
                </CardTitle>
                <CardDescription>Acesse alimentos gratuitos disponíveis próximos a você</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Pessoas em situação de vulnerabilidade social podem acessar as ofertas de alimentos por meio do
                  WhatsApp da Prefeitura ou pelo app Conecta Recife.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/como-receber">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Como Receber Alimentos</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
