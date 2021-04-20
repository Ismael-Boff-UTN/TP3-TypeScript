"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor() {
        this.hojasDeRutas = [];
        this.patente = "";
        this.marca = "";
        this.modelo = "";
        this.hojasDeRutas = [];
    }
    calcularTotalKilometrosRecorridos(fechaDesde, fechaHasta) {
        var kmTotalRecorridos = 0;
        if (this.hojasDeRutas != null) {
            this.hojasDeRutas.forEach((hojaRuta) => {
                if (hojaRuta.fecha >= fechaDesde && hojaRuta.fecha <= fechaHasta) {
                    kmTotalRecorridos += hojaRuta.calcularTotalKilometros();
                }
            });
        }
        return kmTotalRecorridos;
    }
}
exports.Vehiculo = Vehiculo;
