import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  currentYear = new Date().getFullYear();

  summaryLinks = [
    { label: 'حول [اسم البوابة]', href: '#' },
    { label: 'الخصوصية وشروط الاستخدام', href: '#' },
    { label: 'كيفية استخدام [اسم البوابة]', href: '#' },
    { label: 'الأخبار والأحداث', href: '#' },
    { label: '[إحصائيات اتفاقية مستوى الخدمة]', href: '#' }
  ];

  importantLinks = [
    { label: 'بوابة الخدمة الوطنية', href: '#' },
    { label: 'البيانات الحكومية المفتوحة', href: '#' },
    { label: 'الاستراتيجية الوطنية للبيانات والذكاء الاصطناعي', href: '#' },
    { label: 'بوابة البيانات المفتوحة', href: '#' },
    { label: 'بوابة المشاركة الإلكترونية', href: '#' }
  ];

  supportLinks = [
    { label: 'مركز العملاء', href: '#' },
    { label: 'تواصل معنا', href: '#' },
    { label: 'شارك معنا', href: '#' },
    { label: 'تقديم شكوى', href: '#' },
    { label: 'الإبلاغ عن الفساد', href: '#' }
  ];

  socialLinks = [
    { icon: 'pi pi-linkedin', label: 'لينكدإن', href: '#', isX: false },
    { icon: 'pi pi-instagram', label: 'إنستغرام', href: '#', isX: false },
    { icon: '', label: 'X (تويتر)', href: '#', isX: true },
  ];
}
