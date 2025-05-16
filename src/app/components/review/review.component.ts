import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  reviews = [
    {
      name: 'Adrian Azoitei',
      email: 'adriana_shamanca_ta@yahoo.com',
      phone: '0792696969',
      message: 'Montare rapida si seriozitate!',
      rating: 5
    },
    {
      name: 'Adrian Azoitei',
      email: 'adriana_shamanca_ta@yahoo.com',
      phone: '0792696969',
      message: 'Montare rapida si seriozitate!',
      rating: 5
    },
    {
      name: 'Adrian Azoitei',
      email: 'adriana_shamanca_ta@yahoo.com',
      phone: '0792696969',
      message: 'Montare rapida si seriozitate!',
      rating: 5
    },
    {
      name: 'Adrian Azoitei',
      email: 'adriana_shamanca_ta@yahoo.com',
      phone: '0792696969',
      message: 'Montare rapida si seriozitate!',
      rating: 5
    },
    {
      name: 'Adrian Azoitei',
      email: 'adriana_shamanca_ta@yahoo.com',
      phone: '0792696969',
      message: 'Montare rapida si seriozitate!',
      rating: 5
    },
    {
      name: 'Adrian Azoitei',
      email: 'adriana_shamanca_ta@yahoo.com',
      phone: '0792696969',
      message: 'Montare rapida si seriozitate!',
      rating: 5
    },
    {
      name: 'Adrian Azoitei',
      email: 'adriana_shamanca_ta@yahoo.com',
      phone: '0792696969',
      message: 'Montare rapida si seriozitate!',
      rating: 5
    },
    {
      name: 'Adrian Azoitei',
      email: 'adriana_shamanca_ta@yahoo.com',
      phone: '0792696969',
      message: 'Montare rapida si seriozitate!',
      rating: 5
    },
    {
      name: 'Adrian Azoitei',
      email: 'adriana_shamanca_ta@yahoo.com',
      phone: '0792696969',
      message: 'Montare rapida si seriozitate!',
      rating: 5
    }
    
  ];
  hoveredRating = 0;

  setRating(rating: number) {
    this.newReview.rating = rating;
  }
  
  setHovered(rating: number) {
    this.hoveredRating = rating;
  }
  
  clearHovered() {
    this.hoveredRating = 0;
  }
  visibleCount = 4;

  newReview = {
    name: '',
    email: '',
    phone: '',
    message: '',
    rating: 0
  };

  addReview() {
    if (this.newReview.name && this.newReview.email && this.newReview.message && this.newReview.rating > 0) {
      this.reviews.unshift({ ...this.newReview });
      this.newReview = { name: '', email: '', phone: '', message: '', rating: 0 };
    }
  }

  loadMore() {
    this.visibleCount += 4;
  }

  getStars(rating: number): string[] {
    return Array.from({ length: 5 }, (_, i) => i < rating ? '★' : '☆');
  }
}
