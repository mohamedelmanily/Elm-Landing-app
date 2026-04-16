import { Component } from '@angular/core';
import { HeroSection } from './components/hero-section/hero-section';
import { AboutSection } from './components/about-section/about-section';
import { StatsSection } from './components/stats-section/stats-section';
import { ServicesSection } from './components/services-section/services-section';
import { NewsSection } from './components/news-section/news-section';
import { PartnersSection } from './components/partners-section/partners-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSection, AboutSection, StatsSection, ServicesSection, NewsSection, PartnersSection],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export default class Home {}

export { Home };
