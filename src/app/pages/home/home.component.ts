import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { BLOGS, PROFILE_TILES } from '../../shared/blogs';

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatCardModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly blogs = BLOGS;
  readonly profiles = PROFILE_TILES;
}
