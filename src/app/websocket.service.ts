import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
 
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor(private socket: Socket) { }
}