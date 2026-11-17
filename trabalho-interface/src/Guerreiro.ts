
import { Personagem } from "./Personagem"
import { Equipavel } from "./Equipavel"
import { HabilidadeEspecial } from "./HabilidadeEspecial"

export class Guerreiro extends Personagem implements Equipavel, HabilidadeEspecial {
    private forcaextra: number

    constructor(nome: string, vida: number, vidamaxima: number, ataque: number, defesa: number, forcaextra: number) {
        super(nome, vida, vidamaxima, ataque, defesa)
        this.forcaextra = forcaextra
    }

    equipar(item: string): void {
        console.log(`${this.nome} equipou ${item}`)
    }

    habilidadeEspecial(): void {
        console.log(`${this.nome} utilizou sua força extra de ${this.forcaextra}`)
    }

     atacar(inimigo: Personagem): void {
        if (!this.estavivo()) {
            console.log(`${this.nome} está derrotado e não pode atacar`)
            return
        }

        if (!inimigo.estavivo()) {
            console.log("O inimigo já está derrotado")
            return
        }

        let dano = this.ataque + this.forcaextra - inimigo.getDefesa()

        if (dano < 0) {
            dano = 0
        }

        inimigo.receberdano(dano)

        console.log(`${this.nome} causou ${dano} de dano`)
    }
}
