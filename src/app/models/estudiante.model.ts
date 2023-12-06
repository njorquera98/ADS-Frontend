import { Usuario } from "./usuario.model";

export interface Estudiante extends Usuario{
  id_estudiante: number;
  nro_cuenta: string;
  tipo_cuenta: string;
  banco: string;
  promedio_notas: number;
}