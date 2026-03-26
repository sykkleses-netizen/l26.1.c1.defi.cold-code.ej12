export default class Cl_vEmpresa {
    lblPorcenHombres;
    lblPorcenMujeres;
    lblTotalHombres;
    btNuevoEmpleado;
    constructor() {
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
}
//# sourceMappingURL=Cl_vEmpresa.js.map