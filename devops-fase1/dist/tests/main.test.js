import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { calcularStatusPipeline, gerarMensagemBoasVindas, } from "../src/main.js";
describe("aplicacao DevOps", () => {
    it("aprova o pipeline quando testes e Terraform estao validos", () => {
        assert.equal(calcularStatusPipeline(true, true), "aprovado");
    });
    it("reprova o pipeline quando alguma validacao falha", () => {
        const cenarios = [
            [false, true],
            [true, false],
            [false, false],
        ];
        for (const [testesPassando, terraformValido] of cenarios) {
            assert.equal(calcularStatusPipeline(testesPassando, terraformValido), "reprovado");
        }
    });
    it("gera mensagem de boas-vindas com nome do projeto", () => {
        assert.equal(gerarMensagemBoasVindas("DevOps Fase 1"), "Projeto DevOps Fase 1 pronto para automacao.");
    });
    it("gera mensagem padrao quando o nome do projeto esta vazio", () => {
        assert.equal(gerarMensagemBoasVindas("   "), "Projeto DevOps pronto para automacao.");
    });
});
