import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from "./components/header/header.component";
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from "./components/showcase/showcase.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ModelsComponent } from "./components/models/models.component";
import { GalleryComponent } from "./components/galerie/galerie.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AboutUsComponent, ModelsComponent, GalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'usi_termopane';
}
