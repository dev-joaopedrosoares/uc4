"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    nome;
    vida;
    vidamaxima = 100;
    ataque;
    defesa;
    constructor(nome, vida, vidamaxima, ataque, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.vidamaxima = vidamaxima;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    getDefesa() {
        return this.defesa;
    }
    exibirstatus() {
        console.log("---- STATUS ----");
        console.log(`Nome: ${this.nome}`);
        console.log(`Vida: ${this.vida}`);
        console.log(`Vida máxima: ${this.vidamaxima}`);
        console.log(`Ataque: ${this.ataque}`);
        console.log(`Defesa: ${this.defesa}`);
    }
    receberdano(dano) {
        if (dano < 0) {
            dano = 0;
        }
        this.vida -= dano;
        if (this.vida < 0) {
            this.vida = 0;
        }
    }
    curar() {
        this.vida += 10;
        if (this.vida >= this.vidamaxima) {
            this.vida = this.vidamaxima;
        }
    }
    estavivo() {
        return this.vida > 0;
    }
    atacar(inimigo) {
        if (!this.estavivo()) {
            console.log(`${this.nome} está derrotado e não pode atacar`);
            return;
        }
        if (!inimigo.estavivo()) {
            console.log(`${inimigo.nome} já está derrotado`);
            return;
        }
        let dano = this.ataque - inimigo.defesa;
        if (dano < 0) {
            dano = 0;
        }
        inimigo.receberdano(dano);
        console.log(`${this.nome} atacou ${inimigo.nome} causando ${dano} de dano`);
    }
}
exports.Personagem = Personagem;
