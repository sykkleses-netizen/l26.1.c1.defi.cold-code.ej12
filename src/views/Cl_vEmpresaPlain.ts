import { I_vEmpresa } from "../interfaces/I_vEmpresa.js";

export default class Cl_vEmpresaPlain implements I_vEmpresa {
  private lblPorcenHombres: HTMLLabelElement;
  private lblPorcenMujeres: HTMLLabelElement;
  private lblTotalHombres: HTMLLabelElement;
  private btNuevoEmpleado: HTMLButtonElement;

  private vista: HTMLElement;
  constructor() {
    // Usamos el ID del section contenedor que tenías en tu index-plainHTML
    this.vista = document.getElementById("body") as HTMLElement;
    this.btNuevoEmpleado = document.getElementById("body_btNuevoEmpleado") as HTMLButtonElement;
    this.lblPorcenHombres = document.getElementById("body_lblPorcenHombres") as HTMLLabelElement;
    this.lblPorcenMujeres = document.getElementById("body_lblPorcenMujeres") as HTMLLabelElement;
    this.lblTotalHombres = document.getElementById("body_lblTotalHombres") as HTMLLabelElement;
  }
  onNuevoEmpleado(callback: () => void): void {
    this.btNuevoEmpleado.onclick = callback;
  }
  reportar(porcenMujeres: number  , porcenHombres: number,  totalHombres: number): void {
    this.lblPorcenMujeres.innerHTML = porcenMujeres.toFixed(2);
    this.lblPorcenHombres.innerHTML = porcenHombres.toFixed(2);
    this.lblTotalHombres.innerHTML = totalHombres.toString();
  }
}