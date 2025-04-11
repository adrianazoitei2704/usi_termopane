import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';
import { CaruselComponent } from "../carusel/carusel.component";

@Component({
  selector: 'app-models',
  imports: [CaruselComponent],
  templateUrl: './models.component.html',
  styleUrl: './models.component.css'
})
export class ModelsComponent implements OnInit{
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  datas = [new Map([
    ["arte","assets/pvc/arte.png"],
    ["classic","assets/pvc/classic.png"],
    ["elegant","assets/pvc/elegant.png"],
    ["exclusiv","assets/pvc/exclusiv.png"],
    ["modern","assets/pvc/modern.png"],
    ["premium","assets/pvc/premium.png"],
    ["standard","assets/pvc/standard.png"],
    ["vizual","assets/pvc/vizual.png"],
  ]),new Map([
    ["biokovo","assets/hpl/biokovo.jpg"],
    ["classic","assets/classic.png"],
    ["elegant","assets/elegant.png"],
    ["exclusiv","assets/exclusiv"],
    ["modern","assets/modern"],
    ["premium","assets/premium"],
    ["standard","assets/standard"],
    ["vizual","assets/vizual"],
  ]),new Map([
    ["arte","assets/arte.png"],
    ["classic","assets/classic.png"],
    ["elegant","assets/elegant.png"],
    ["exclusiv","assets/exclusiv"],
    ["modern","assets/modern"],
    ["premium","assets/premium"],
    ["standard","assets/standard"],
    ["vizual","assets/vizual"],
  ])];
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }
}
