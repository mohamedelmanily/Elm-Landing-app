import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-section.html',
  styleUrl: './news-section.scss'
})
export class NewsSection {
  articles = signal([
    { title: 'عنوان المقال الأول', date: '15 أبريل 2024', excerpt: 'نبذة مختصرة عن المقال يمكن عرضها هنا مع إمكانية القراءة الكاملة من خلال الرابط.' },
    { title: 'عنوان المقال الثاني', date: '12 أبريل 2024', excerpt: 'نبذة مختصرة عن المقال يمكن عرضها هنا مع إمكانية القراءة الكاملة من خلال الرابط.' },
    { title: 'عنوان المقال الثالث', date: '10 أبريل 2024', excerpt: 'نبذة مختصرة عن المقال يمكن عرضها هنا مع إمكانية القراءة الكاملة من خلال الرابط.' }
  ]);
}
