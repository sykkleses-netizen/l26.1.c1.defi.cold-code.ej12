export default class Cl_vEmpresa {
    lblPorcenHombres;
    lblPorcenMujeres;
    lblTotalHombres;
    btNuevoEmpleado;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoEmpleado = document.getElementById("body_btNuevoEmpleado");
        this.lblPorcenHombres = document.getElementById("body_lblPorcenHombres");
        this.lblPorcenMujeres = document.getElementById("body_lblPorcenMujeres");
        this.lblTotalHombres = document.getElementById("body_lblTotalHombres");
    }
    reportar({ porcenMujeres, porcenHombres, sexoMasComun, difSexo, totalHombres, promedioPeso }) {
        this.lblPorcenMujeres.innerHTML = `${porcenMujeres}`;
        this.lblPorcenHombres.innerHTML = `${porcenHombres}`;
        this.lblTotalHombres.innerHTML = `${totalHombres}`;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vEmpresa.js.map