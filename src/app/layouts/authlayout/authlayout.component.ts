import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-authlayout',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './authlayout.component.html',
  styleUrls: ['./authlayout.component.scss']
})
export class AuthlayoutComponent {

}
