import { Usuario } from "./usuario.model";

export interface Estudiante extends Usuario{
  nro_cuenta: string;
  tipo_cuenta: string;
  banco: string;
  promedio_notas: number;
}