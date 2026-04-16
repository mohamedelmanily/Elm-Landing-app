import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TabsModule } from 'primeng/tabs';
import { ServiceCardComponent, ServiceCardData } from "../../shared/components/service-card";

@Component({
  selector: 'app-building-permit',
  standalone: true,
  imports: [CommonModule, RouterLink, TabsModule, ServiceCardComponent],
  templateUrl: './building-permit.html',
  styleUrl: './building-permit.scss'
})
export default class BuildingPermit {
  activeTab = signal(0);
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
  steps = [
    'قم بالدخول إلى البوابة الوطنية للتسجيل الموحد عبر منصة بلدي.',
    'اختيار خدمات تراخيص البناء، ثم إصدار البناء.',
    'خدمات الترخيص ثم البلدية المطلوبة.',
    'اختيار المكتب الهندسي، ثم إدخال رقم وسنة إصدار مخطط التنظيم وإرفاق نسخة من السند.',
    'تقديم الطلب إلى المكتب الهندسي المحدد، ثم استكمال جميع المعلومات والمرفقات في المكتب الهندسي وإرسالها إلى البلدية.',
    'التأكد من بيانات الطلب والمرفقات والموافقات من قبل البلدية.',
    'الموافقة على الطلب وإصدار دفعة سداد. دفع الرسوم والحصول على الرخصة.'
  ];

  serviceInfo = [
    { icon: 'pi pi-users', label: 'الفئة المستهدفة', value: 'المواطنين وجنسيات دول مجلس التعاون الخليجي والمستثمرين والأجانب' },
    { icon: 'pi pi-clock', label: 'مدة الخدمة', value: '5.0 أيام' },
    { icon: 'pi pi-desktop', label: 'قنوات الخدمة', value: 'تطبيق الويب والجوال' },
    { icon: 'pi pi-wallet', label: 'تكلفة الخدمة', value: 'مجانًا' }
  ];

  requiredDocs = [
    'صورة من الهوية الوطنية أو الإقامة',
    'صورة من صك الملكية',
    'مخطط موقع معتمد',
    'رخصة المكتب الهندسي',
    'تقرير فحص التربة'
  ];

  conditions = [
    'أن يكون المتقدم مالك العقار أو مفوض عنه',
    'أن يكون العقار داخل النطاق العمراني',
    'سداد جميع الرسوم المستحقة',
    'الحصول على موافقة الدفاع المدني',
    'تقديم مخططات هندسية معتمدة'
  ];
}

export { BuildingPermit };
