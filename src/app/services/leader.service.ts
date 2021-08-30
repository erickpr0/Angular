import { Injectable } from '@angular/core';
import { Leader } from '../shared/Leader';
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

  constructor() { }
}
