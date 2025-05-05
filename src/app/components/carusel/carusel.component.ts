import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-carusel',
  imports: [CommonModule],
  templateUrl: './carusel.component.html',
  styleUrl: './carusel.component.css'
})
export class CaruselComponent implements OnInit{

  @Input() data!:Map<string,string>;
  @Input() carouselId!: string;

  @Input() carouselDescription!: string;

  items: { title: string, path: string }[] = [];
  chunkedItems: { title: string, path: string }[][] = [];
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit() {
    this.items = Array.from(this.data.entries()).map(([title, path]) => ({ title, path }));
    if (isPlatformBrowser(this.platformId)) {
      this.updateChunkedItems();
      window.addEventListener('resize', this.updateChunkedItems.bind(this));
    }
  
  }
  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.updateChunkedItems.bind(this));
    }
  }
  updateChunkedItems() {
    const itemsPerChunk = window.innerWidth < 600 ? 1 : (window.innerWidth < 768 ? 2 : 4); 
    this.chunkedItems = this.chunkArray(this.items, itemsPerChunk);
  }
  private chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
  
}
