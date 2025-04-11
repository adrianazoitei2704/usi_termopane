import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carusel',
  imports: [CommonModule],
  templateUrl: './carusel.component.html',
  styleUrl: './carusel.component.css'
})
export class CaruselComponent implements OnInit{

  @Input() data!:Map<string,string>;
  @Input() carouselId!: string;

  items: { title: string, path: string }[] = [];
  chunkedItems: { title: string, path: string }[][] = [];

  ngOnInit() {
    this.items = Array.from(this.data.entries()).map(([title, path]) => ({ title, path }));
    this.chunkedItems = this.chunkArray(this.items, 4); // chunk into 4 per slide
  }

  private chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
  
}
