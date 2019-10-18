import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  ID_KEY = 'id';

  constructor() { }

  setId(valor: number): void {
    window.localStorage.setItem(this.ID_KEY, valor.toString());
  }

  getId(): number {
    const id = window.localStorage.getItem(this.ID_KEY);
    return parseInt(id, 10);
  }

  removeId(): void {
    window.localStorage.removeItem(this.ID_KEY);
  }

  hasId(): boolean {
    const id = window.localStorage.getItem(this.ID_KEY);
    if (id === null) {
      return false;
    }
    return true;
  }

}
