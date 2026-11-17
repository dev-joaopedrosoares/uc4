
import { Curavel } from "./Curavel"

export class Personagem implements Curavel {
    protected nome: string
    protected vida: number
    protected vidamaxima: number = 100
    protected ataque: number
    protected defesa: number

    constructor(nome: string, vida: number, vidamaxima: number, ataque: number, defesa: number) {
        this.nome = nome
        this.vida = vida
        this.vidamaxima = vidamaxima
        this.ataque = ataque
        this.defesa = defesa
    }

    public getDefesa(): number {
        return this.defesa
    }

    public exibirstatus(): void {
        console.log("---- STATUS ----")
        console.log(`Nome: ${this.nome}`)
        console.log(`Vida: ${this.vida}`)
        console.log(`Vida máxima: ${this.vidamaxima}`)
        console.log(`Ataque: ${this.ataque}`)
        console.log(`Defesa: ${this.defesa}`)
    }

    receberdano(dano: number): void {
        if (dano < 0) {
            dano = 0
        }

        this.vida -= dano

        if (this.vida < 0) {
            this.vida = 0
        }
    }

    curar(): void {
        this.vida += 10

        if (this.vida >= this.vidamaxima) {
            this.vida = this.vidamaxima
        }
    }

    estavivo(): boolean {
        return this.vida > 0
    }

    atacar(inimigo: Personagem): void {
        if (!this.estavivo()) {
            console.log(`${this.nome} está derrotado e não pode atacar`)
            return
        }

        if (!inimigo.estavivo()) {
            console.log(`${inimigo.nome} já está derrotado`)
            return
        }

        let dano = this.ataque - inimigo.defesa

        if (dano < 0) {
            dano = 0
        }

        inimigo.receberdano(dano)

        console.log(`${this.nome} atacou ${inimigo.nome} causando ${dano} de dano`)
    }
}
