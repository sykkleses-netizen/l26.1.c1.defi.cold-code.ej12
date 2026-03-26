export default class Cl_mEmpresa {
    cntHombres;
    cntMujeres;
    totalEmpleados;
    constructor() {
        this.cntHombres = 0;
        this.cntMujeres = 0;
        this.totalEmpleados = 0;
    }
    procesarEmpleado(e) {
        this.totalEmpleados++;
        if (e.sexo === "F" || e.sexo === "f") {
            this.cntMujeres++;
        }
        else {
            this.cntHombres++;
        }
    }
    totalHombres() {
        return this.cntHombres;
    }
    porcenHombres() {
        return (this.cntHombres / this.totalEmpleados) * 100;
    }
    porcenMujeres() {
        return (this.cntMujeres / this.totalEmpleados) * 100;
    }
}
//# sourceMappingURL=Cl_mEmpresa.js.map