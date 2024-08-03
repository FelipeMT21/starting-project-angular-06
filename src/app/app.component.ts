import { Component } from '@angular/core';

import { HeaderComponent } from "./header/header.component";
import { SeverStatusComponent } from "./dashboard/sever-status/sever-status.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SeverStatusComponent, TrafficComponent, TicketsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
