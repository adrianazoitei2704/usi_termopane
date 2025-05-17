import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {
  apiUrl = 'https://sheetdb.io/api/v1/qwf91j0kjs0u7';
  constructor(private http: HttpClient) {}

  reviews: any[] = [];
  visibleCount = 4;
  hoveredRating = 0;
  incarca = "Vezi recenzii"
  newReview = {
    name: '',
    email: '',
    phone: '',
    message: '',
    rating: 0
  };

  ngOnInit() {
    // this.fetchReviews();
  }

  fetchReviews() {
    this.http.get<any[]>(this.apiUrl).subscribe((data: any) => {
      // SheetDB returns an array wrapped inside "data" key
      this.reviews = data;
    });
  }

  addReview() {
    if (
      this.newReview.name &&
      this.newReview.email &&
      this.newReview.message &&
      this.newReview.rating > 0
    ) {
      const payload = {
        data: [this.newReview]
      };

      this.http.post(this.apiUrl, payload).subscribe(() => {
        this.reviews.unshift({ ...this.newReview });
        this.newReview = { name: '', email: '', phone: '', message: '', rating: 0 };
      });
    }
  }

  loadMore() {
    if(this.reviews.length === 0){
      this.http.get<any[]>(this.apiUrl).subscribe((data: Array<any>) => {
      // SheetDB returns an array wrapped inside "data" key
      this.reviews = data.reverse();
      this.incarca = "Incarca mai multe";
    });
    }
    this.visibleCount += 4;
  }

  setRating(rating: number) {
    this.newReview.rating = rating;
  }

  setHovered(rating: number) {
    this.hoveredRating = rating;
  }

  clearHovered() {
    this.hoveredRating = 0;
  }

  getStars(rating: number): string[] {
    return Array.from({ length: 5 }, (_, i) => i < rating ? '★' : '☆');
  }
}
