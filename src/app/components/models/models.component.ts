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

  pvc = 
    new Map([
      ["arte","assets/pvc/arte.png"],
      ["classic","assets/pvc/classic.png"],
      ["elegant","assets/pvc/elegant.png"],
      ["exclusiv","assets/pvc/exclusiv.png"],
      ["modern","assets/pvc/modern.png"],
      ["premium","assets/pvc/premium.png"],
      ["standard","assets/pvc/standard.png"],
      ["vizual","assets/pvc/vizual.png"],
  ]);

  hpl = 
  new Map([
    ["biokovo","assets/hpl/biokovo.jpg"],
    ["brijuni","assets/hpl/brijuni.jpg"],
    ["dilj","assets/hpl/dilj.jpg"],
    ["dvor","assets/hpl/dvor.jpg"],
    ["erdut","assets/hpl/erdut.jpg"],
    ["galovac","assets/hpl/galovac.jpg"],
    ["hvar","assets/hpl/hvar.jpg"],
    ["jankovac","assets/hpl/jankovac.jpg"],
    ["jezerce","assets/hpl/jezerce.jpg"],
    ["kali","assets/hpl/kali.jpg"],
    ["klek","assets/hpl/klek.jpg"],
    ["kopacki","assets/hpl/kopacki.jpg"],
    ["kornati","assets/hpl/kornati.jpg"],
    ["kozjak","assets/hpl/kozjak.jpg"],
    ["lastovo","assets/hpl/lastovo.jpg"],
    ["lonja","assets/hpl/lonja.jpg"],
    ["medvednic","assets/hpl/medvednic.jpg"],
    ["mljet","assets/hpl/mljet.jpg"],
    ["murter","assets/hpl/murter.jpg"],
    ["olib","assets/hpl/olib.jpg"],
    ["paklenica","assets/hpl/paklenica.jpg"],
    ["papuk","assets/hpl/papuk.jpg"],
    ["plitvice","assets/hpl/plitvice.jpg"],
    ["psunj","assets/hpl/psunj.jpg"],
    ["rastoke","assets/hpl/rastoke.jpg"],
    ["risnjak","assets/hpl/risnjak.jpg"],
    ["side_elements","assets/hpl/side_elements.jpg"],
    ["skradin","assets/hpl/skradin.jpg"],
    ["ston","assets/hpl/ston.jpg"],
    ["telascica","assets/hpl/telascica.jpg"],
    ["vrana","assets/hpl/vrana.jpg"],
    ["vrsar","assets/hpl/vrsar.jpg"],
    ["zumberak","assets/hpl/zumberak.jpg"],
  ]);

  aluminiu = new Map([
    ["basic","assets/aluminiu/basic.png"],
    ["elevated","assets/aluminiu/elevated.png"],
    ["elite","assets/aluminiu/elite.png"],
    ["elite+","assets/aluminiu/elite+.png"],
    ["layers","assets/aluminiu/layers.png"],
    ["refined","assets/aluminiu/refined.png"],
    ["relief","assets/aluminiu/relief.png"],
    ["simple","assets/aluminiu/simple.png"],
    ["smart","assets/aluminiu/smart.png"],
    ["urban","assets/aluminiu/urban.png"],
  ]);



  datas = [
    { type: 'pvc', data: this.pvc, title: 'Panouri PVC'},
    { type: 'hpl', data: this.hpl, title: 'Panouri HPL' },
    { type: 'aluminiu', data: this.aluminiu, title: 'Panouri Aluminiu'}
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }
}
