import Cl_mEmpresa from "../models/Cl_mEmpresa.js";
export default class Cl_cEmpresa {
    mEmpresa = new Cl_mEmpresa();
    vEmpresa;
    cEmpleado;
    // Recibe la vista de la Empresa y el controlador del artículo ya armado
    constructor(vistaEmpresa, controladorEmpleado) {
        this.vEmpresa = vistaEmpresa;
        this.cEmpleado = controladorEmpleado;
        this.vEmpresa.onNuevoEmpleado(() => this.procesar1Empleado());
    }
    procesar1Empleado() {
        this.cEmpleado.solicitarEmpleado((Empleado) => {
            if (Empleado !== null) {
                this.mEmpresa.procesarEmpleado(Empleado);
                this.vEmpresa.reportar(this.mEmpresa.porcenMujeres(), this.mEmpresa.porcenHombres(), this.mEmpresa.totalHombres());
            }
        });
    }
}
//# sourceMappingURL=Cl_cEmpresa.js.map