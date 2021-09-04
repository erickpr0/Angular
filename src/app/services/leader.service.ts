import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders(): Leader[]{
    return LEADERS;
  }

  getFeaturedleader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }

  getLeader(id:string): Leader {
    return LEADERS.filter((leader)=>(leader.id === id))[0];
  }

  constructor() { }
}
