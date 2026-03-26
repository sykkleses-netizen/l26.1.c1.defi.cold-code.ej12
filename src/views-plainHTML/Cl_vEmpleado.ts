export default class Cl_vEmpleado {
  inNombre: HTMLInputElement;
  inSexo: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;
  constructor() {
    this.vista = document.getElementById("empleado") as HTMLElement;
    this.inNombre = document.getElementById(
      "empleado_inNombre",
    ) as HTMLInputElement;
    this.inSexo = document.getElementById("empleado_inSexo") as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "empleado_btCancelar",
    ) as HTMLButtonElement;
    this.btAceptar = document.getElementById(
      "empleado_btAceptar",
    ) as HTMLButtonElement;
    this.mostrar();
  }
  get nombre(): string {
    return this.inNombre.value;
  }
  set nombre(nombre: string) {
    this.inNombre.value = nombre.toString();
  }

  get sexo(): string {
    return this.inSexo.value;
  }

  set sexo(sexo: string) {
    this.inSexo.value = sexo.toString();
  }
  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}
