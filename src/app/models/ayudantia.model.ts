import { Asignatura } from "./asignatura.model";
import { Usuario } from "./usuario.model";

export interface Ayudantia {
  id_ayudantia: number;
  id_asignatura: number;
  id_usuario: number;
  cupos: number;
  horas: number;
  estado: string;
  id_periodo: number;
  profesor?: Usuario;
  asignatura?: Asignatura;
}