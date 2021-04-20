"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleFactura = void 0;
class DetalleFactura {
    constructor(cantidad, subtotal, factura, articulo) {
        this.cantidad = cantidad;
        this.subtotal = subtotal;
        this.factura = factura;
        this.articulo = articulo;
    }
    calcularSubTotal() {
        return (this.subtotal = this.cantidad * this.articulo.precio);
    }
}
exports.DetalleFactura = DetalleFactura;
