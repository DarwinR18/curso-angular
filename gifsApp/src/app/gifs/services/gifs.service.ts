import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  private apiKey:string ="rp1WmMsRoDQOsdL3VMRsHWROuaPlZeiu";
  private _historial: string[] = [];

  get historial() {

    return [...this._historial];
  }

  buscarGifs(query: string) {
    query = query.trim().toLowerCase();
    

    if (!this._historial.includes(query)) { // valida que no esté en el arreglo el valor que viene desde la busqueda
      this._historial.unshift(query);
      this._historial =this._historial.splice(0,10); //limita los datos de busqueda a 10
    }
    

    console.log(this._historial);

  }

}
