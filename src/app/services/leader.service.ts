import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders(): Promise<Leader[]>{
    return Promise.resolve(LEADERS);
  }

  getFeaturedleader(): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  }

  getLeader(id:string): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((leader)=>(leader.id === id))[0]);
  }

  constructor() { }
}
