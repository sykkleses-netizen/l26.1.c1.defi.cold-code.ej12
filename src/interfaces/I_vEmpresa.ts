
export interface I_vEmpresa {

  onNuevoEmpleado(callback: () => void): void;
  reportar(porcenMujeres: number, porcenHombres: number, totalHombres: number): void;
}
