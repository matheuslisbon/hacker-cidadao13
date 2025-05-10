"use client"

import { useEffect, useRef } from "react"

export function DonationChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar o canvas para alta resolução
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    // Dados do gráfico
    const data = [
      { name: "Mercado Bom Preço", value: 1250 },
      { name: "Feira de Afogados", value: 980 },
      { name: "Padaria São José", value: 745 },
      { name: "Restaurante Sabor da Terra", value: 680 },
      { name: "Hortifruti Recife", value: 620 },
      { name: "Supermercado Pão de Açúcar", value: 580 },
      { name: "Feira de Casa Amarela", value: 520 },
      { name: "Mercadinho da Esquina", value: 480 },
      { name: "Padaria Delícia", value: 450 },
      { name: "Restaurante Sabor do Nordeste", value: 420 },
    ]

    // Configurações do gráfico
    const barWidth = (rect.width - 100) / data.length - 10
    const maxValue = Math.max(...data.map((item) => item.value))
    const barHeightMultiplier = (rect.height - 100) / maxValue

    // Desenhar o gráfico
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Desenhar eixo Y
    ctx.beginPath()
    ctx.moveTo(50, 20)
    ctx.lineTo(50, rect.height - 50)
    ctx.lineTo(rect.width - 20, rect.height - 50)
    ctx.strokeStyle = "#e2e8f0"
    ctx.stroke()

    // Desenhar linhas de grade horizontais
    const gridLines = 5
    ctx.textAlign = "right"
    ctx.font = "12px Inter, sans-serif"
    ctx.fillStyle = "#64748b"

    for (let i = 0; i <= gridLines; i++) {
      const y = rect.height - 50 - (i * (rect.height - 70)) / gridLines
      const value = Math.round((i * maxValue) / gridLines)

      ctx.beginPath()
      ctx.moveTo(50, y)
      ctx.lineTo(rect.width - 20, y)
      ctx.strokeStyle = "#e2e8f0"
      ctx.stroke()

      ctx.fillText(`${value} kg`, 45, y + 4)
    }

    // Desenhar barras
    data.forEach((item, index) => {
      const x = 60 + index * (barWidth + 10)
      const barHeight = item.value * barHeightMultiplier
      const y = rect.height - 50 - barHeight

      // Gradiente para as barras
      const gradient = ctx.createLinearGradient(x, y, x, rect.height - 50)
      gradient.addColorStop(0, "#16a34a") // Verde mais escuro no topo
      gradient.addColorStop(1, "#22c55e") // Verde mais claro na base

      // Desenhar barra
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.roundRect(x, y, barWidth, barHeight, [4, 4, 0, 0])
      ctx.fill()

      // Adicionar valor no topo da barra
      ctx.fillStyle = "#166534"
      ctx.textAlign = "center"
      ctx.font = "bold 12px Inter, sans-serif"
      ctx.fillText(`${item.value}`, x + barWidth / 2, y - 10)

      // Adicionar nome abaixo da barra
      ctx.fillStyle = "#64748b"
      ctx.font = "12px Inter, sans-serif"
      ctx.textAlign = "center"
      const nameWidth = barWidth + 10
      const name = item.name.length > 12 ? item.name.substring(0, 10) + "..." : item.name
      ctx.fillText(name, x + barWidth / 2, rect.height - 30)
    })
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
