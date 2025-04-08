import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']  
})
export class ShowcaseComponent implements OnInit,  AfterViewInit {
  cards = [
    { title: 'Card 1', text: 'Description 1', image: 'assets/bianca1.jpg' },
    { title: 'Card 2', text: 'Description 2', image: 'assets/bianca2.jpg' },
    { title: 'Card 3', text: 'Description 3', image: 'assets/bianca3.jpg' },
    { title: 'Card 4', text: 'Description 4', image: 'assets/bianca4.jpg' },
    { title: 'Card 5', text: 'Description 5', image: 'assets/bianca5.jpg' },
    { title: 'Card 6', text: 'Description 6', image: 'assets/bianca6.jpg' }
  ];

  cardGroups: any[][] = [];

  ngOnInit() {
    
    if (typeof window !== 'undefined') {
      this.buildCardGroups();
    }
  }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      this.checkVisibility();
    }
  }
  checkVisibility() {
    const container = document.querySelector('.container');
    if (container) {
      const rect = container.getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isInView) {
        container.classList.add('animate');
      }
    }
  }
  @HostListener('window:scroll', [])
  onScroll() {
    this.checkVisibility();
  }
  @HostListener('window:resize', ['$event'])  
  onResize(event: any) {
    if (typeof window !== 'undefined') {
      this.buildCardGroups();
    }
  }

  buildCardGroups() {
    // Ensure we're in the browser environment
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 768;
      const groupSize = isMobile ? 1 : 3;  
      this.cardGroups = [];
      for (let i = 0; i < this.cards.length; i += groupSize) {
        this.cardGroups.push(this.cards.slice(i, i + groupSize));  
      }
    }
  }
}
