export default class Cl_vEmpresaPlain {
    lblPorcenHombres;
    lblPorcenMujeres;
    lblTotalHombres;
    btNuevoEmpleado;
    vista;
    constructor() {
        // Usamos el ID del section contenedor que tenías en tu index-plainHTML
        this.vista = document.getElementById("body");
        this.btNuevoEmpleado = document.getElementById("body_btNuevoEmpleado");
        this.lblPorcenHombres = document.getElementById("body_lblPorcenHombres");
        this.lblPorcenMujeres = document.getElementById("body_lblPorcenMujeres");
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
//# sourceMappingURL=Cl_vEmpresaPlain.js.map