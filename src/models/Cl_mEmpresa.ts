import Cl_mEmpleado from "./Cl_mEmpleado.js";

export default class Cl_mEmpresa {

    private cntHombres: number;
    private cntMujeres: number;
    private totalEmpleados: number;
  

    constructor() {
        this.cntHombres = 0;
        this.cntMujeres = 0;
        this.totalEmpleados = 0;
    }

    procesarEmpleado(e: Cl_mEmpleado) {
        this.totalEmpleados++;
       if (e.sexo === "F" || e.sexo === "f") {
    this.cntMujeres++;
} else {
    this.cntHombres++;
}

}

    totalHombres(): number {
        return this.cntHombres;
    }
    porcenHombres(): number {
        return (this.cntHombres / this.totalEmpleados) * 100;
    }

    porcenMujeres(): number {
        return (this.cntMujeres / this.totalEmpleados) * 100;
    }
    
}
