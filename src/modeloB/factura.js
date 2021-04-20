"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factura = void 0;
class Factura {
    constructor(letra, numero, recargo, tipoPago, totalItems, totalFinal, fecha, cliente) {
        this.detallesFacturas = [];
        this.letra = letra;
        this.numero = numero;
        this.recargo = recargo;
        this.tipoPago = tipoPago;
        this.totalItems = totalItems;
        this.totalFinal = totalFinal;
        this.fecha = fecha;
        this.cliente = cliente;
    }
    calcularTotalItems() {
        if (this.detallesFacturas != null) {
            this.detallesFacturas.map((detalle) => {
                this.totalItems += detalle.calcularSubTotal();
            });
        }
        return this.totalItems;
    }
    calcularTotalFinal() {
        return (this.totalFinal = this.totalItems + this.recargo);
    }
}
exports.Factura = Factura;
