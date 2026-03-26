import { I_vEmpleado } from "../interfaces/I_vEmpleado.js";

export default class Cl_vEmpleadoPlain implements I_vEmpleado {
  private inNombre: HTMLInputElement;
  private inSexo: HTMLInputElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;
  private vista: HTMLElement;

  constructor() {
    // Capturamos el section que funciona como "modal" en HTML plano
    this.vista = document.getElementById("empleado") as HTMLElement;
    this.inNombre = document.getElementById("empleado_inNombre") as HTMLInputElement;
    this.inSexo = document.getElementById("empleado_inSexo") as HTMLInputElement;
    this.btCancelar = document.getElementById("empleado_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("empleado_btAceptar") as HTMLButtonElement;
   
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
    this.inSexo.value = "";
    if (this.vista) this.vista.hidden = false;
  }

  ocultar(): void {
    if (this.vista) this.vista.hidden = true;
  }
}