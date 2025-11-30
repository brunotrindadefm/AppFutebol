import { ITime } from "./ITime";

export interface IJogador {
    id?: number;
    nome: string;
    posicao: string;
    timeId: number;
    numero: number;
    nacionalidade: string;
    idade: number;
    time?: ITime;
}