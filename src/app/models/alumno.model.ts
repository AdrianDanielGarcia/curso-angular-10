export class Alumno {
  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public sexo: any,
    public activo: boolean,
    public perfil: any
  ) {}
}

const alumnoData = new Alumno(1, 'Juan', 'Perez', {id: 1, descripcion: 'hombre'}, true, {id: 1, descripcion: 'Desarrollador'});
export { alumnoData };
