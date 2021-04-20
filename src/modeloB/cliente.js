"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(numero, razonSocial, cuit) {
        this.facturas = [];
        this.numero = numero;
        this.razonSocial = razonSocial;
        this.cuit = cuit;
    }
    totalFacturadoXTipoPago(tipoPago) {
        let totalFacturado = 0;
        if (this.facturas != null) {
            this.facturas.map((factura) => {
                if (tipoPago === "E") {
                    if (tipoPago === factura.tipoPago) {
                        totalFacturado += factura.calcularTotalFinal();
                    }
                }
                else if (tipoPago === "TD") {
                    if (tipoPago === factura.tipoPago) {
                        totalFacturado += factura.calcularTotalFinal();
                    }
                }
                else if (tipoPago === "TC") {
                    if (tipoPago === factura.tipoPago) {
                        totalFacturado += factura.calcularTotalFinal();
                    }
                }
                else if (tipoPago === "TR") {
                    if (tipoPago === factura.tipoPago) {
                        totalFacturado += factura.calcularTotalFinal();
                    }
                }
                else if (tipoPago === "CC") {
                    if (tipoPago === factura.tipoPago) {
                        totalFacturado += factura.calcularTotalFinal();
                    }
                }
                else {
                    totalFacturado += factura.calcularTotalFinal();
                }
            });
        }
        return totalFacturado;
    }
}
exports.Cliente = Cliente;
