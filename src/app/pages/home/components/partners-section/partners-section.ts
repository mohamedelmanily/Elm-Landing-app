import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Partner {
  // name: string;
  logo: string;
}

@Component({
  selector: 'app-partners-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners-section.html',
  styleUrl: './partners-section.scss'
})
export class PartnersSection {
  readonly visibleCount = 6;

  currentIndex = signal(0);

  partners = signal<Partner[]>([
    { logo: '/assets/images/palm-swords.png' },
    { logo: '/assets/images/palm-swords.png' },
    { logo: '/assets/images/palm-swords.png' },
    { logo: '/assets/images/palm-swords.png' },
    { logo: '/assets/images/palm-swords.png' },
    { logo: '/assets/images/palm-swords.png' },
    { logo: '/assets/images/palm-swords.png' },
    { logo: '/assets/images/palm-swords.png' },
  ]);

  maxIndex = computed(() => Math.max(0, this.partners().length - this.visibleCount));

  visiblePartners = computed(() => {
    const start = this.currentIndex();
    return this.partners().slice(start, start + this.visibleCount);
  });

  canPrev = computed(() => this.currentIndex() > 0);
  canNext = computed(() => this.currentIndex() < this.maxIndex());

  prev(): void {
    if (this.canPrev()) {
      this.currentIndex.update(v => v - 1);
    }
  }

  next(): void {
    if (this.canNext()) {
      this.currentIndex.update(v => v + 1);
    }
  }
}
