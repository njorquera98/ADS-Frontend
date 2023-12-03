import { Ayudantia } from "./ayudantia.model";
import { Usuario } from "./usuario.model";

export interface Solicitud {
  id_solicitud: number;
  id_ayudantia: number;
  id_usuario: number;
  fecha: Date;
  estado: string;
  id_periodo: number;
  prioridad: number;
  promedio_asignatura: number;
  anteriormente_ayudante: boolean;
  ayudantia?: Ayudantia;
  estudiante?: Usuario;
}