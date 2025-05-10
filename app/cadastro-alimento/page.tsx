"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Upload } from "lucide-react"
import Link from "next/link"

export default function FoodRegistration() {
  return (
    <main className="min-h-screen bg-green-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link href="/" className="inline-flex items-center text-green-700 hover:text-green-800 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para a página inicial
        </Link>

        <Card className="border-green-100 shadow-md">
          <CardHeader className="bg-green-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Cadastro de Alimento</CardTitle>
            <CardDescription className="text-green-50">
              Cadastre alimentos que estão próximos do vencimento para doação
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="food-name">Nome do Alimento</Label>
                  <Input id="food-name" placeholder="Ex: Bananas, Tomates, Pão Francês" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="food-type">Tipo de Alimento</Label>
                    <Select>
                      <SelectTrigger id="food-type">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fruits">Frutas</SelectItem>
                        <SelectItem value="vegetables">Legumes e Verduras</SelectItem>
                        <SelectItem value="grains">Grãos</SelectItem>
                        <SelectItem value="bakery">Padaria</SelectItem>
                        <SelectItem value="dairy">Laticínios</SelectItem>
                        <SelectItem value="meat">Carnes</SelectItem>
                        <SelectItem value="processed">Alimentos Processados</SelectItem>
                        <SelectItem value="other">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantidade</Label>
                    <div className="flex space-x-2">
                      <Input id="quantity" placeholder="Ex: 3, 1kg, 500g" />
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Unidade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="unit">Unidade(s)</SelectItem>
                          <SelectItem value="kg">Quilograma (kg)</SelectItem>
                          <SelectItem value="g">Grama (g)</SelectItem>
                          <SelectItem value="l">Litro (L)</SelectItem>
                          <SelectItem value="ml">Mililitro (ml)</SelectItem>
                          <SelectItem value="package">Pacote(s)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry-date">Data de Validade</Label>
                    <Input id="expiry-date" type="date" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pickup-until">Disponível para Retirada até</Label>
                    <Input id="pickup-until" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    placeholder="Descreva o alimento, estado de conservação e outras informações relevantes"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="food-image">Foto do Alimento (opcional)</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <div className="flex flex-col items-center">
                      <Upload className="h-10 w-10 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500">Arraste uma imagem ou clique para fazer upload</p>
                      <p className="text-xs text-gray-400 mt-1">PNG, JPG ou JPEG (máx. 5MB)</p>
                      <Input id="food-image" type="file" className="hidden" accept="image/png, image/jpeg, image/jpg" />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="mt-4"
                        onClick={() => document.getElementById("food-image")?.click()}
                      >
                        Selecionar Arquivo
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pickup-location">Local de Retirada</Label>
                  <Select>
                    <SelectTrigger id="pickup-location">
                      <SelectValue placeholder="Selecione o local de retirada" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="establishment">Meu Estabelecimento</SelectItem>
                      <SelectItem value="other">Outro Endereço</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pickup-instructions">Instruções para Retirada</Label>
                  <Textarea
                    id="pickup-instructions"
                    placeholder="Horários disponíveis, como encontrar o local, pessoa de contato, etc."
                    rows={2}
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  Cadastrar Alimento para Doação
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
