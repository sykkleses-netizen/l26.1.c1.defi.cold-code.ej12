export default class Cl_mEmpleado {
   private _nombre: string;
   private _sexo: string;


  constructor({ nombre, sexo}: { nombre: string; sexo: string },) { this._nombre = nombre;
        this._sexo = sexo;
    
  }
   

  get nombre(): string {
    return this._nombre;
  }
  get sexo(): string {
    return this._sexo;
  }


 
}
