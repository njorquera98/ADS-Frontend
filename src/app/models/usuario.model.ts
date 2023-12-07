export enum UsuarioRol {
  Profesor = 0,
  Estudiante = 1,
  Director = 2,
  Secretaria = 3,
}

export interface Usuario {
  id_usuario: number;
  nombre: string;
  run: string;
  email: string;
  apellido_paterno: string;
  apellido_materno: string;
  telefono: string;
  rol: UsuarioRol;
  image_url: string;
}