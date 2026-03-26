import { I_vEmpleado } from "../interfaces/I_vEmpleado.js";
declare var bootstrap: any;

export default class Cl_vEmpleadoBootstrap implements I_vEmpleado {
  private inNombre: HTMLInputElement;
  private inSexo: HTMLInputElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;
  private modal: any;

  constructor() {
    this.inNombre = document.getElementById("empleado_inNombre") as HTMLInputElement;
    this.inSexo = document.getElementById("empleado_inSexo") as HTMLInputElement;
    this.btCancelar = document.getElementById("empleado_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("empleado_btAceptar") as HTMLButtonElement;
    const elementoModal = document.getElementById("empleado");
    this.modal = new bootstrap.Modal(elementoModal);
  }
get nombre(): string {
  return this.inNombre.value;
}
  get sexo(): string {
    return this.inSexo.value;
  }
  
  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }
  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }
  mostrar(): void {
    this.inNombre.value = "";
    this.inSexo.value = ""; // Limpiamos al abrir
    this.modal.show();
  }
  ocultar(): void {
    this.modal.hide();
  }
}