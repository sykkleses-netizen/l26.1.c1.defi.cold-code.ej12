export default class Cl_vEmpresaBootstrap {
    lblPorcenMujeres;
    lblPorcenHombres;
    lblTotalHombres;
    btNuevoEmpleado;
    vista;
    constructor() {
        this.vista = document.getElementById("app-bootstrap");
        this.btNuevoEmpleado = document.getElementById("body_btNuevoEmpleado");
        this.lblPorcenMujeres = document.getElementById("body_lblPorcenMujeres");
        this.lblPorcenHombres = document.getElementById("body_lblPorcenHombres");
        this.lblTotalHombres = document.getElementById("body_lblTotalHombres");
    }
    onNuevoEmpleado(callback) {
        this.btNuevoEmpleado.onclick = callback;
    }
    reportar(porcenMujeres, porcenHombres, totalHombres) {
        this.lblPorcenMujeres.innerHTML = porcenMujeres.toFixed(2);
        this.lblPorcenHombres.innerHTML = porcenHombres.toFixed(2);
        this.lblTotalHombres.innerHTML = totalHombres.toString();
    }
}
//# sourceMappingURL=Cl_vEmpresaBootstrap.js.map