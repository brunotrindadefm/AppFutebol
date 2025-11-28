import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export abstract class BaseService<T> {
  
  constructor(
    protected http: HttpClient, 
    protected apiUrl: string
  ) {}

  async getAll(): Promise<T[]> {
    return await firstValueFrom(this.http.get<T[]>(this.apiUrl));
  }

  async getById(id: number | string): Promise<T> {
    return await firstValueFrom(this.http.get<T>(`${this.apiUrl}/${id}`));
  }

  async create(resource: T): Promise<T> {
    return await firstValueFrom(this.http.post<T>(this.apiUrl, resource));
  }

  async update(id: number | string, resource: T): Promise<T> {
    return await firstValueFrom(this.http.put<T>(`${this.apiUrl}/${id}`, resource));
  }

  async delete(id: number | string): Promise<void> {
    return await firstValueFrom(this.http.delete<void>(`${this.apiUrl}/${id}`));
  }
}