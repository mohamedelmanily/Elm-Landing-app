import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent, ServiceCardData } from '../../../../shared/components/service-card';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  templateUrl: './services-section.html',
  styleUrl: './services-section.scss'
})
export class ServicesSection {
  activeSlide = signal(0);

  services = signal<ServiceCardData[]>([
    {
      id: 1,
      icon: '/assets/icons/success.svg',
      title: 'عنوان البطاقة',
      description: 'نص إضافي لمحتوى البطاقة عبر البوابة والتعرف على المزيد من التفاصيل.',
      tags: [
        { name: 'وسم', variant: 'outlined' },
        { name: 'وسم', variant: 'gray' },
        { name: 'وسم', variant: 'green' }
      ],
      primaryAction: 'اجراء',
      secondaryAction: 'اجراء ثانوي'
    },
    {
      id: 2,
      icon: '/assets/icons/success.svg',
      title: 'عنوان البطاقة',
      description: 'نص إضافي لمحتوى البطاقة عبر البوابة والتعرف على المزيد من التفاصيل.',
      tags: [
        { name: 'وسم', variant: 'outlined' },
        { name: 'وسم', variant: 'gray' },
        { name: 'وسم', variant: 'green' }
      ],
      primaryAction: 'اجراء',
      secondaryAction: 'اجراء ثانوي'
    },
    {
      id: 3,
      icon: '/assets/icons/success.svg',
      title: 'عنوان البطاقة',
      description: 'نص إضافي لمحتوى البطاقة عبر البوابة والتعرف على المزيد من التفاصيل.',
      tags: [
        { name: 'وسم', variant: 'outlined' },
        { name: 'وسم', variant: 'gray' },
        { name: 'وسم', variant: 'green' }
      ],
      primaryAction: 'اجراء',
      secondaryAction: 'اجراء ثانوي'
    }
  ]);
}
