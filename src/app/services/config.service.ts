import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configComponentVisits: number;

  private userName: string;

  constructor() {
    this.configComponentVisits = 0;
    this.userName = '';
  }

  incrementConfigComponentVisits(): void {
    this.configComponentVisits++;
  }

  getConfigComponentVisits(): number {
    return this.configComponentVisits;
  }

  setUserName(userName: string): void {
    this.userName = userName;
  }

  getUserName(): string {
    return this.userName;
  }

}
