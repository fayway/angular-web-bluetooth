import { Component } from '@angular/core';

@Component({
  selector: 'ble-root',
  template: `
    <mat-toolbar color="primary">
      <img class="logo" src="assets/angular-web-ble.png" />
      <span>Angular Web BLE Demo</span>
      <nav class="nav">
        <button mat-button>Simple mode</button>
        <button mat-button>Batch mode</button>
      </nav>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .mat-toolbar.mat-primary {
      position: sticky;
      top: 0;
      z-index: 1;
    }
    .logo {
      width: 32px;
      margin: 0 10px;
    }
    .nav {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-left: 20px;
      padding: 8px 16px;
    }
  `]
})
export class AppComponent {}
