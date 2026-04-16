import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatItem {
  icon: string;
  value: string;
  label: string;
}

@Component({
  selector: 'app-stats-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-section.html',
  styleUrl: './stats-section.scss'
})
export class StatsSection {
  stats = signal<StatItem[]>([
    { icon: 'pi pi-users', value: '1.5M', label: 'مستخدم' },
    { icon: 'pi pi-plus-circle', value: '1.5M', label: 'خدمة' },
    { icon: 'pi pi-star', value: '1.5M', label: 'تقييم' },
    { icon: 'pi pi-shield', value: '1.5M', label: 'معاملة' }
  ]);
}
