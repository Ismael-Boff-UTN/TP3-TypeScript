"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HojaRuta = void 0;
class HojaRuta {
    constructor() {
        this.detallesRuta = [];
        this.fecha = new Date();
        this.numero = 0;
        this.detallesRuta = [];
    }
    calcularTotalKilometros() {
        let kilometrosTotales = 0;
        if (this.detallesRuta != null) {
            this.detallesRuta.forEach((detalle) => (kilometrosTotales +=
                detalle.kmRegreso - detalle.kmSalida));
        }
        return kilometrosTotales;
    }
}
exports.HojaRuta = HojaRuta;
