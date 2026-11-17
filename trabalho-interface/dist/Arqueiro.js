"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arqueiro = void 0;
const Personagem_1 = require("./Personagem");
class Arqueiro extends Personagem_1.Personagem {
    precisao;
    constructor(nome, vida, vidamaxima, ataque, defesa, precisao) {
        super(nome, vida, vidamaxima, ataque, defesa);
        this.precisao = precisao;
    }
    atirarflecha() {
        if (!this.estavivo()) {
            console.log(`${this.nome} está derrotado!`);
            return;
        }
        console.log(`${this.nome} atirou uma flecha com precisão ${this.precisao}%`);
    }
    equipar(item) {
        console.log(`${this.nome} equipou ${item}`);
    }
}
exports.Arqueiro = Arqueiro;
