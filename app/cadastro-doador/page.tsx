import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DonorRegistration() {
  return (
    <main className="min-h-screen bg-green-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link href="/" className="inline-flex items-center text-green-700 hover:text-green-800 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para a página inicial
        </Link>

        <Card className="border-green-100 shadow-md">
          <CardHeader className="bg-green-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Cadastro de Doador</CardTitle>
            <CardDescription className="text-green-50">
              Preencha o formulário abaixo para se cadastrar como doador de alimentos
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Informações Pessoais</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" placeholder="Digite seu nome completo" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(81) 99999-9999" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="document">CPF ou CNPJ</Label>
                    <Input id="document" placeholder="Digite seu documento" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Informações do Estabelecimento</h3>

                <div className="space-y-2">
                  <Label htmlFor="donor-type">Tipo de Doador</Label>
                  <Select>
                    <SelectTrigger id="donor-type">
                      <SelectValue placeholder="Selecione o tipo de doador" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="market">Mercado/Supermercado</SelectItem>
                      <SelectItem value="fair">Feira</SelectItem>
                      <SelectItem value="restaurant">Restaurante</SelectItem>
                      <SelectItem value="bakery">Padaria</SelectItem>
                      <SelectItem value="individual">Pessoa Física</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="establishment-name">Nome do Estabelecimento</Label>
                  <Input id="establishment-name" placeholder="Nome do seu estabelecimento (se aplicável)" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Endereço</Label>
                  <Input id="address" placeholder="Rua, número" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="neighborhood">Bairro</Label>
                    <Input id="neighborhood" placeholder="Seu bairro" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">Cidade</Label>
                    <Input id="city" placeholder="Recife" defaultValue="Recife" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">Estado</Label>
                    <Input id="state" placeholder="PE" defaultValue="PE" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    placeholder="Conte um pouco sobre seu estabelecimento e os tipos de alimentos que costuma doar"
                    rows={4}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Senha de Acesso</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" type="password" placeholder="Digite sua senha" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirmar Senha</Label>
                    <Input id="confirm-password" type="password" placeholder="Confirme sua senha" />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  Cadastrar como Doador
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
