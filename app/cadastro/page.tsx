import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, User, Building, Store, Utensils, ShoppingBasket, Home } from "lucide-react"

export default function RegisterTypePage() {
  const userTypes = [
    {
      id: "individual",
      title: "Pessoa Física",
      description: "Para moradores que desejam doar alimentos ocasionalmente",
      icon: <User className="h-10 w-10 text-green-600" />,
      link: "/cadastro-pessoa-fisica",
    },
    {
      id: "market",
      title: "Mercado/Supermercado",
      description: "Para mercados e supermercados que desejam doar regularmente",
      icon: <Store className="h-10 w-10 text-green-600" />,
      link: "/cadastro-doador?tipo=mercado",
    },
    {
      id: "restaurant",
      title: "Restaurante",
      description: "Para restaurantes que desejam doar excedentes de alimentos",
      icon: <Utensils className="h-10 w-10 text-green-600" />,
      link: "/cadastro-doador?tipo=restaurante",
    },
    {
      id: "fair",
      title: "Feira",
      description: "Para feirantes que desejam doar produtos não vendidos",
      icon: <ShoppingBasket className="h-10 w-10 text-green-600" />,
      link: "/cadastro-doador?tipo=feira",
    },
    {
      id: "bakery",
      title: "Padaria",
      description: "Para padarias que desejam doar pães e outros produtos",
      icon: <Building className="h-10 w-10 text-green-600" />,
      link: "/cadastro-doador?tipo=padaria",
    },
    {
      id: "other",
      title: "Outro Estabelecimento",
      description: "Para outros tipos de estabelecimentos comerciais",
      icon: <Home className="h-10 w-10 text-green-600" />,
      link: "/cadastro-doador?tipo=outro",
    },
  ]

  return (
    <main className="min-h-screen bg-green-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center text-green-700 hover:text-green-800 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para a página inicial
        </Link>

        <Card className="border-green-100 shadow-md">
          <CardHeader className="text-center bg-green-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Cadastro na Plataforma</CardTitle>
            <CardDescription className="text-green-50">
              Escolha o tipo de usuário que melhor se encaixa no seu perfil
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {userTypes.map((type) => (
                <Link key={type.id} href={type.link} className="block">
                  <Card className="h-full border-green-100 hover:border-green-300 hover:shadow-md transition-all">
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      <div className="p-3 bg-green-50 rounded-full mb-4">{type.icon}</div>
                      <h3 className="font-medium text-lg mb-2">{type.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">{type.description}</p>
                      <Button className="w-full bg-green-600 hover:bg-green-700 mt-auto">Selecionar</Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Já possui uma conta?{" "}
                <Link href="/login" className="text-green-600 hover:text-green-700 font-medium">
                  Faça login
                </Link>
              </p>
              <p className="text-sm text-gray-500">
                Ao se cadastrar, você concorda com os{" "}
                <Link href="/termos" className="text-green-600 hover:underline">
                  Termos de Serviço
                </Link>{" "}
                e{" "}
                <Link href="/privacidade" className="text-green-600 hover:underline">
                  Política de Privacidade
                </Link>{" "}
                da plataforma Recife Sustenta.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
