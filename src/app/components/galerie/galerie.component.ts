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
    { src: 'assets/montaj/montaj1.jpg', alt: 'Montaj 1' },
    { src: 'assets/montaj/montaj2.jpg', alt: 'Montaj 2' },
    { src: 'assets/montaj/montaj4.jpg', alt: 'Montaj 3' },
    { src: 'assets/montaj/montaj5.jpg', alt: 'Montaj 4' },
    { src: 'assets/montaj/montaj3.jpg', alt: 'Montaj 5' },
    { src: 'assets/montaj/montaj6.jpg', alt: 'Montaj 6' },
    { src: 'assets/montaj/montaj7.jpg', alt: 'Montaj 7' },
    { src: 'assets/montaj/montaj8.jpg', alt: 'Montaj 8' },
    { src: 'assets/montaj/montaj9.jpg', alt: 'Montaj 9' },
    { src: 'assets/montaj/montaj10.jpg', alt: 'Montaj 10' },
    { src: 'assets/montaj/montaj11.jpg', alt: 'Montaj 11' },
    { src: 'assets/montaj/montaj12.jpg', alt: 'Montaj 12' },
    { src: 'assets/montaj/montaj13.jpg', alt: 'Montaj 13' },
    { src: 'assets/montaj/montaj14.jpg', alt: 'Montaj 14' },
    { src: 'assets/montaj/montaj15.jpg', alt: 'Montaj 15' },
    { src: 'assets/montaj/montaj16.jpg', alt: 'Montaj 16' },
    { src: 'assets/montaj/montaj17.jpg', alt: 'Montaj 17' },
  ];

  selectedImageIndex: number = -1;
  isModalOpen = false;

  openImage(image: { src: string; alt: string }) {
     this.selectedImageIndex = this.images.findIndex(img => img.src === image.src);
    this.isModalOpen = true;  // Open the modal
  }

  get selectedImage() {
  return this.images[this.selectedImageIndex];
}

closeImage(event?: Event) {
  if (event) event.stopPropagation(); // Prevent modal from closing when clicking inside
  this.isModalOpen = false;
}

nextImage() {
  this.selectedImageIndex = (this.selectedImageIndex + 1) % this.images.length;
}

prevImage() {
  this.selectedImageIndex = (this.selectedImageIndex - 1 + this.images.length) % this.images.length;
}


}
