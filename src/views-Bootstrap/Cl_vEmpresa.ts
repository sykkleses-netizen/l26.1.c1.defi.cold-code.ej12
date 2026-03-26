export default class Cl_vEmpresa {
  lblPorcenHombres: HTMLInputElement;
  lblPorcenMujeres: HTMLInputElement;
  lblTotalHombres: HTMLInputElement;
  btNuevoEmpleado: HTMLButtonElement;
  constructor() {
    this.btNuevoEmpleado = document.getElementById(
      "body_btNuevoEmpleado",
    ) as HTMLButtonElement;
  this.lblPorcenHombres = document.getElementById(
    "body_lblPorcenHombres",
  ) as HTMLInputElement;
    this.lblPorcenMujeres = document.getElementById(
      "body_lblPorcenMujeres",
    ) as HTMLInputElement;

    this.lblTotalHombres = document.getElementById(
      "body_lblTotalHombres",
    ) as HTMLInputElement;
  }
  reportar({ porcenMujeres, porcenHombres, sexoMasComun, difSexo, totalHombres, promedioPeso }: { 
    porcenMujeres: number; porcenHombres: number; sexoMasComun: string; difSexo: number, totalHombres: number, promedioPeso: number }): void {
   
    this.lblPorcenMujeres!.innerHTML = `${porcenMujeres}`;
    this.lblPorcenHombres!.innerHTML = `${porcenHombres}`;
    this.lblTotalHombres!.innerHTML = `${totalHombres}`;
  
  }
}
