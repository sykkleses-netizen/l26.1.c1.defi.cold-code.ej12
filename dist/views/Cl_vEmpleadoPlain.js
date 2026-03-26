export default class Cl_vEmpleadoPlain {
    inNombre;
    inSexo;
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        // Capturamos el section que funciona como "modal" en HTML plano
        this.vista = document.getElementById("empleado");
        this.inNombre = document.getElementById("empleado_inNombre");
        this.inSexo = document.getElementById("empleado_inSexo");
        this.btCancelar = document.getElementById("empleado_btCancelar");
        this.btAceptar = document.getElementById("empleado_btAceptar");
    }
    get nombre() {
        return this.inNombre.value;
    }
    get sexo() {
        return this.inSexo.value;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        this.inNombre.value = "";
        this.inSexo.value = "";
        if (this.vista)
            this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista)
            this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vEmpleadoPlain.js.map