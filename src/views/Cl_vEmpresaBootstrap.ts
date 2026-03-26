import { I_vEmpresa } from "../interfaces/I_vEmpresa.js";

export default class Cl_vEmpresaBootstrap implements I_vEmpresa {
  private lblPorcenMujeres: HTMLElement;
  private lblPorcenHombres: HTMLElement;
  private lblTotalHombres: HTMLElement;
  private btNuevoEmpleado: HTMLButtonElement;
  private vista: HTMLElement;

  constructor() {
    this.vista = document.getElementById("app-bootstrap") as HTMLElement;
    this.btNuevoEmpleado = document.getElementById("body_btNuevoEmpleado") as HTMLButtonElement;
    this.lblPorcenMujeres = document.getElementById("body_lblPorcenMujeres") as HTMLElement;
    this.lblPorcenHombres = document.getElementById("body_lblPorcenHombres") as HTMLElement;
    this.lblTotalHombres = document.getElementById("body_lblTotalHombres") as HTMLElement;

  }
  onNuevoEmpleado(callback: () => void): void {
    this.btNuevoEmpleado.onclick = callback;
  }
  reportar(porcenMujeres: number, porcenHombres: number, totalHombres: number): void {
    this.lblPorcenMujeres.innerHTML = porcenMujeres.toFixed(2);
    this.lblPorcenHombres.innerHTML = porcenHombres.toFixed(2);
    this.lblTotalHombres.innerHTML = totalHombres.toString();
  }
}