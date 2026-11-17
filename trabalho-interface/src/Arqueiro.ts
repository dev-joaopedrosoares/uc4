
import { Personagem } from "./Personagem"
import { Equipavel } from "./Equipavel"

export class Arqueiro extends Personagem implements Equipavel {
    private precisao: number

    constructor(nome: string, vida: number, vidamaxima: number, ataque: number, defesa: number, precisao: number) {
        super(nome, vida, vidamaxima, ataque, defesa)
        this.precisao = precisao
    }

    atirarflecha(): void {
        if (!this.estavivo()) {
            console.log(`${this.nome} está derrotado!`)
            return
        }

        console.log(`${this.nome} atirou uma flecha com precisão ${this.precisao}%`)
    }

    equipar(item: string): void {
        console.log(`${this.nome} equipou ${item}`)
    }
}
