import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule,NgClass],
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css'],
})
export class GalleryComponent {
  images = [
    { src: 'assets/montaj/montaj1.jpg', alt: 'Imagine 1' },
    { src: 'assets/montaj/montaj2.jpg', alt: 'Imagine 2' },
    { src: 'assets/montaj/montaj4.jpg', alt: 'Imagine 3' },
    { src: 'assets/montaj/montaj5.jpg', alt: 'Imagine 4' },
  ];

  selectedImage: { src: string; alt: string } | null = null;
  isModalOpen = false;

  openImage(image: { src: string; alt: string }) {
    this.selectedImage = image;
    this.isModalOpen = true;  // Open the modal
  }

  closeImage() {
    this.isModalOpen = false;  // Close the modal
    this.selectedImage = null; // Optionally reset selected image
  }
}
