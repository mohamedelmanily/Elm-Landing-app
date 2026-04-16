import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ServiceCardTag {
  name: string;
  variant: 'outlined' | 'gray' | 'green';
}

export interface ServiceCardData {
  id: number;
  icon?: string;       // SVG path e.g. '/assets/icons/success.svg'
  title: string;
  description: string;
  tags: ServiceCardTag[];
  primaryAction?: string;
  secondaryAction?: string;
  primaryLink?: string;
  secondaryLink?: string;
}

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss'
})
export class ServiceCardComponent {
  @Input({ required: true }) data!: ServiceCardData;
  @Input() showActions = true;
}
