import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, ShoppingBasket, MessageSquare, CheckCircle } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="h-10 w-10 text-green-600" />,
      title: "Cadastro",
      description: "Doadores se cadastram na plataforma Recife Sustenta",
    },
    {
      icon: <ShoppingBasket className="h-10 w-10 text-green-600" />,
      title: "Registro de Alimentos",
      description: "Cadastram alimentos próximos do vencimento, mas ainda em boas condições",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-green-600" />,
      title: "Acesso via WhatsApp",
      description:
        "Pessoas em vulnerabilidade social acessam as ofertas pelo WhatsApp da Prefeitura ou app Conecta Recife",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-green-600" />,
      title: "Retirada",
      description: "Beneficiários retiram os alimentos no local indicado, evitando o desperdício",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8 bg-green-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Como Funciona</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A plataforma Recife Sustenta conecta doadores de alimentos com pessoas que precisam, de forma simples e
          eficiente.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border-green-100 bg-white">
              <CardHeader className="flex flex-col items-center pb-2">
                <div className="mb-4 p-3 bg-green-50 rounded-full">{step.icon}</div>
                <CardTitle className="text-center text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
