
import { Personagem } from "./Personagem"
import { HabilidadeEspecial } from "./HabilidadeEspecial"

export class Guardiao extends Personagem implements HabilidadeEspecial {
    private protecaomaxima: number

    constructor(nome: string, vida: number, vidamaxima: number, ataque: number, defesa: number, protecaomaxima: number) {
        super(nome, vida, vidamaxima, ataque, defesa)
        this.protecaomaxima = protecaomaxima
    }

    usarescudo(): void {
        if (!this.estavivo()) {
            console.log(`${this.nome} está derrotado!`)
            return
        }

        console.log(`${this.nome} usou o escudo com proteção de ${this.protecaomaxima}`)
    }

    habilidadeEspecial(): void {
        this.usarescudo()
    }
}
