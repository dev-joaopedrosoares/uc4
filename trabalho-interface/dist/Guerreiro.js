"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
const Personagem_1 = require("./Personagem");
class Guerreiro extends Personagem_1.Personagem {
    forcaextra;
    constructor(nome, vida, vidamaxima, ataque, defesa, forcaextra) {
        super(nome, vida, vidamaxima, ataque, defesa);
        this.forcaextra = forcaextra;
    }
    equipar(item) {
        console.log(`${this.nome} equipou ${item}`);
    }
    habilidadeEspecial() {
        console.log(`${this.nome} utilizou sua força extra de ${this.forcaextra}`);
    }
    atacar(inimigo) {
        if (!this.estavivo()) {
            console.log(`${this.nome} está derrotado e não pode atacar`);
            return;
        }
        if (!inimigo.estavivo()) {
            console.log("O inimigo já está derrotado");
            return;
        }
        let dano = this.ataque + this.forcaextra - inimigo.getDefesa();
        if (dano < 0) {
            dano = 0;
        }
        inimigo.receberdano(dano);
        console.log(`${this.nome} causou ${dano} de dano`);
    }
}
exports.Guerreiro = Guerreiro;
