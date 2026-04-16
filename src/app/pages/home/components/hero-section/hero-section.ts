import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection {
  activeSlide = signal(0);
  totalSlides = 4;

  setSlide(index: number): void {
    this.activeSlide.set(index);
  }
}
