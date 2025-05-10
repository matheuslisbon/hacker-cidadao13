import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Smartphone, MessageSquare, MapPin, Info } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HowToReceive() {
  return (
    <main className="min-h-screen bg-green-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center text-green-700 hover:text-green-800 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para a página inicial
        </Link>

        <Card className="border-green-100 shadow-md overflow-hidden">
          <CardHeader className="bg-green-600 text-white">
            <CardTitle className="text-2xl">Como Receber Alimentos</CardTitle>
            <CardDescription className="text-green-50">
              Guia para pessoas em situação de vulnerabilidade social acessarem as doações de alimentos
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-xl font-medium text-green-800 mb-4">Duas formas de acessar as doações:</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-green-200">
                  <CardHeader className="pb-2">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <MessageSquare className="h-10 w-10 text-green-600" />
                      </div>
                    </div>
                    <CardTitle className="text-center">Via WhatsApp da Prefeitura</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="font-medium mb-2">Como acessar:</p>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Adicione o número da Prefeitura: (81) 3355-8000</li>
                          <li>Envie uma mensagem com o texto "ALIMENTOS"</li>
                          <li>Siga as instruções do chatbot para ver alimentos disponíveis próximos a você</li>
                          <li>Selecione o alimento desejado e confirme a reserva</li>
                        </ol>
                      </div>

                      <div className="flex justify-center">
                        <Button className="bg-green-600 hover:bg-green-700">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Acessar WhatsApp
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader className="pb-2">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <Smartphone className="h-10 w-10 text-green-600" />
                      </div>
                    </div>
                    <CardTitle className="text-center">Via App Conecta Recife</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="font-medium mb-2">Como acessar:</p>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Baixe o aplicativo Conecta Recife na loja de apps</li>
                          <li>Faça login com seu CPF e data de nascimento</li>
                          <li>Acesse a seção "Recife Sustenta"</li>
                          <li>Veja os alimentos disponíveis e faça sua reserva</li>
                        </ol>
                      </div>

                      <div className="flex justify-center space-x-4">
                        <Button className="bg-black hover:bg-gray-800">
                          <Image
                            src="/placeholder.svg?height=20&width=20"
                            alt="App Store"
                            width={20}
                            height={20}
                            className="mr-2"
                          />
                          App Store
                        </Button>
                        <Button className="bg-green-700 hover:bg-green-800">
                          <Image
                            src="/placeholder.svg?height=20&width=20"
                            alt="Google Play"
                            width={20}
                            height={20}
                            className="mr-2"
                          />
                          Google Play
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
                <div className="flex items-start">
                  <Info className="h-6 w-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Informações Importantes</h4>
                    <ul className="list-disc list-inside space-y-2 text-yellow-700">
                      <li>
                        As doações são destinadas prioritariamente a pessoas em situação de vulnerabilidade social
                      </li>
                      <li>É necessário apresentar documento de identificação no momento da retirada</li>
                      <li>Verifique sempre a data de validade e as condições do alimento antes do consumo</li>
                      <li>
                        Caso não possa retirar um alimento reservado, cancele sua reserva para que outras pessoas possam
                        aproveitá-lo
                      </li>
                      <li>
                        Em caso de dúvidas, entre em contato com a Central de Atendimento da Prefeitura pelo telefone
                        156
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-100 rounded-lg p-6">
                <h4 className="font-medium text-green-800 mb-4 text-center">Pontos de Apoio</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Centro de Referência de Assistência Social (CRAS) - Boa Vista</p>
                      <p className="text-sm text-gray-600">Rua da Aurora, 529 - Boa Vista</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Centro de Referência de Assistência Social (CRAS) - Afogados</p>
                      <p className="text-sm text-gray-600">Rua Dr. José Rufino, 67 - Afogados</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Centro de Referência de Assistência Social (CRAS) - Ibura</p>
                      <p className="text-sm text-gray-600">Av. Dois Rios, s/n - Ibura</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">
                        Centro de Referência de Assistência Social (CRAS) - Campina do Barreto
                      </p>
                      <p className="text-sm text-gray-600">Rua Anísio Galvão, 120 - Campina do Barreto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
