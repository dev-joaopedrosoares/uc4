
import * as readline from "readline-sync"
import { Personagem } from "./Personagem"
import { Arqueiro } from "./Arqueiro"
import { Guardiao } from "./Guardiao"
import { Guerreiro } from "./Guerreiro"

// Variáveis do jogo
let herois: Personagem[] = []
let inimigos: Personagem[] = []
let heroiEscolhido: Personagem | null = null
let opcao = ""
let vitorias = 0
let inimigoAtual = 0
let aventuraConcluida = false
let encerrado = false

// Criar ou reiniciar a aventura
function reiniciarJogo(): void {
    herois = [
        new Arqueiro("Diegolas", 100, 100, 20, 10, 90),
        new Guardiao("Samuel", 100, 100, 15, 30, 40),
        new Guerreiro("Seu Zé", 100, 100, 30, 20, 15)
    ]

    inimigos = [
        new Personagem("Fiscal de Preços", 100, 100, 15, 5),
        new Personagem("Operador de Ofertas", 120, 120, 18, 8),
        new Personagem("Balrog do Boleto", 150, 150, 25, 10)
    ]

    heroiEscolhido = null
    vitorias = 0
    inimigoAtual = 0
    aventuraConcluida = false
    encerrado = false

    console.log("\nUma nova aventura começou!")
}

// Listar personagens
function verSociedade(): void {
    console.log("\n=== SOCIEDADE ===")

    console.log("1 - Diegolas (Arqueiro)")
    console.log("2 - Samuel (Guardião)")
    console.log("3 - Seu Zé (Guerreiro)")

    for (const heroi of herois) {
        heroi.exibirstatus()
    }
}

// Escolher herói
function escolherHeroi(): void {
    console.log("\n=== ESCOLHER HERÓI ===")
    console.log("1 - Diegolas")
    console.log("2 - Samuel")
    console.log("3 - Seu Zé")

    const escolha = Number(readline.question("Escolha: "))

    if (!Number.isInteger(escolha) ||
        escolha < 1 ||
        escolha > herois.length) {
        console.log("Personagem inexistente!")
        return
    }

    const selecionado = herois[escolha - 1]

    if (!selecionado.estavivo()) {
        console.log("Esse herói está derrotado!")
        return
    }

    heroiEscolhido = selecionado

    console.log("Herói selecionado com sucesso!")
    heroiEscolhido.exibirstatus()
}

// Registrar vitória
function registrarVitoria(): void {
    vitorias++
    inimigoAtual++

    console.log("\nVocê venceu o combate!")

    if (inimigoAtual >= inimigos.length) {
        aventuraConcluida = true
        finalizarAventura()
    } else {
        console.log("Próximo inimigo desbloqueado!")
    }
}

// Encerramento da aventura
function finalizarAventura(): void {
    console.log("\n================================")
    console.log("      SERVIDOR DA PERDIÇÃO")
    console.log("================================")

    console.log("O Balrog do Boleto foi derrotado!")
    console.log("A Sociedade chegou ao Servidor da Perdição!")
    console.log("O destino do Cupom Único está em suas mãos!")

    let escolhaFinal = ""

    do {
        console.log("\n1 - Destruir o Cupom Único")
        console.log("2 - Guardar o Cupom Único")

        escolhaFinal = readline.question("Escolha: ")

        switch (escolhaFinal) {
            case "1":
                console.log("\nO Cupom Único foi destruído!")
                console.log("A Terra dos Mercados está livre!")
                break

            case "2":
                console.log("\nVocê decidiu guardar o Cupom Único!")
                console.log("Seu poder permanece na Terra dos Mercados!")
                break

            default:
                console.log("Opção inválida!")
        }

    } while (escolhaFinal !== "1" && escolhaFinal !== "2")

    console.log("\n===== RESULTADO FINAL =====")
    console.log(`Inimigos derrotados: ${vitorias}`)
    console.log("Aventura concluída!")

    let escolha = ""

    do {
        console.log("\n1 - Jogar novamente")
        console.log("0 - Sair")

        escolha = readline.question("Escolha: ")

        switch (escolha) {
            case "1":
                reiniciarJogo()
                return

            case "0":
                console.log("Obrigado por jogar!")
                encerrado = true
                return

            default:
                console.log("Opção inválida!")
        }

    } while (escolha !== "1" && escolha !== "0")
}

// Iniciar combate
function iniciarCombate(): void {
    if (heroiEscolhido === null) {
        console.log("Escolha um herói antes de combater!")
        return
    }

    const heroi = heroiEscolhido

    if (!heroi.estavivo()) {
        console.log("Seu herói está derrotado!")
        return
    }

    if (aventuraConcluida || inimigoAtual >= inimigos.length) {
        console.log("A aventura já foi concluída!")
        return
    }

    const inimigo = inimigos[inimigoAtual]

    console.log("\nUm inimigo apareceu!")
    inimigo.exibirstatus()

    if (inimigoAtual === 2) {
        console.log("\nBALROG DO BOLETO:")
        console.log("VOCÊ NÃO VAI PARCELAR!")
    }

    let opcaoCombate = ""

    do {
        console.log("\n=== COMBATE ===")
        console.log("1 - Atacar")
        console.log("2 - Habilidade especial")
        console.log("3 - Ver status")
        console.log("4 - Curar")
        console.log("0 - Voltar")

        opcaoCombate = readline.question("Escolha: ")

        switch (opcaoCombate) {
            case "1":
                heroi.atacar(inimigo)
                break

            case "2":
                if (heroi instanceof Guerreiro) {
                    heroi.habilidadeEspecial()
                    heroi.atacar(inimigo)

                } else if (heroi instanceof Guardiao) {
                    heroi.habilidadeEspecial()
                    heroi.atacar(inimigo)

                } else if (heroi instanceof Arqueiro) {
                    heroi.atirarflecha()
                    heroi.atacar(inimigo)
                }
                break

            case "3":
                console.log("\nHerói:")
                heroi.exibirstatus()

                console.log("\nInimigo:")
                inimigo.exibirstatus()
                break

            case "4":
                heroi.curar()
                console.log("Seu herói recuperou vida!")
                break

            case "0":
                console.log("Voltando ao menu principal...")
                break

            default:
                console.log("Opção inválida!")
        }

        // Verificar vitória
        if (!inimigo.estavivo()) {
            registrarVitoria()
            return
        }

        // Contra-ataque do inimigo
        if (opcaoCombate === "1" ||
            opcaoCombate === "2" ||
            opcaoCombate === "4") {

            console.log("\n=== TURNO DO INIMIGO ===")

            inimigo.atacar(heroi)

            if (!heroi.estavivo()) {
                console.log("Seu herói foi derrotado!")
                return
            }
        }

    } while (opcaoCombate !== "0")
}

// Consultar progresso
function verJornada(): void {
    console.log("\n=== SUA JORNADA ===")
    console.log(`Inimigos derrotados: ${vitorias}`)
    console.log(`Total de inimigos: ${inimigos.length}`)

    if (aventuraConcluida) {
        console.log("Aventura concluída!")
    } else {
        console.log(`Confronto atual: ${inimigoAtual + 1}`)
    }

    if (heroiEscolhido !== null) {
        console.log("\nHerói atual:")
        heroiEscolhido.exibirstatus()
    } else {
        console.log("Nenhum herói selecionado.")
    }
}

// Iniciar o jogo
reiniciarJogo()

// Menu principal
do {
    console.log("\n=== O SENHOR DOS MERCADOS II ===")
    console.log("1 - Ver Sociedade")
    console.log("2 - Escolher herói")
    console.log("3 - Enfrentar inimigo")
    console.log("4 - Ver jornada")
    console.log("0 - Sair")

    opcao = readline.question("Escolha: ")

    switch (opcao) {
        case "1":
            verSociedade()
            break

        case "2":
            escolherHeroi()
            break

        case "3":
            iniciarCombate()
            break

        case "4":
            verJornada()
            break

        case "0":
            console.log("Obrigado por jogar!")
            encerrado = true
            break

        default:
            console.log("Opção inválida! Tente novamente.")
    }

} while (!encerrado)
