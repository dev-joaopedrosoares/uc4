"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guardiao = void 0;
const Personagem_1 = require("./Personagem");
class Guardiao extends Personagem_1.Personagem {
    protecaomaxima;
    constructor(nome, vida, vidamaxima, ataque, defesa, protecaomaxima) {
        super(nome, vida, vidamaxima, ataque, defesa);
        this.protecaomaxima = protecaomaxima;
    }
    usarescudo() {
        if (!this.estavivo()) {
            console.log(`${this.nome} está derrotado!`);
            return;
        }
        console.log(`${this.nome} usou o escudo com proteção de ${this.protecaomaxima}`);
    }
    habilidadeEspecial() {
        this.usarescudo();
    }
}
exports.Guardiao = Guardiao;
