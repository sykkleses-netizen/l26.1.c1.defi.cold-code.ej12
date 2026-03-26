export default class Cl_vEmpleado {
    inNombre;
    inSexo;
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.vista = document.getElementById("empleado");
        this.inNombre = document.getElementById("empleado_inNombre");
        this.inSexo = document.getElementById("empleado_inSexo");
        this.btCancelar = document.getElementById("empleado_btCancelar");
        this.btAceptar = document.getElementById("empleado_btAceptar");
        this.mostrar();
    }
    get nombre() {
        return this.inNombre.value;
    }
    set nombre(nombre) {
        this.inNombre.value = nombre.toString();
    }
    get sexo() {
        return this.inSexo.value;
    }
    set sexo(sexo) {
        this.inSexo.value = sexo.toString();
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
//# sourceMappingURL=Cl_vEmpleado.js.map