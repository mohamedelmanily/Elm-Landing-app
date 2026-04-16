import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isMobileMenuOpen = signal(false);
  isScrolled = signal(false);

  navItems = signal([
    { label: 'القسم الرئيسي', route: '/home', hasDropdown: true },
    { label: 'رخصة البناء', route: '/building-permit', hasDropdown: true },
    { label: 'حقول النص', route: '/text-fields', hasDropdown: true },
    { label: 'تبويب 4', route: '/home', hasDropdown: true },
    { label: 'تبويب 5', route: '/home', hasDropdown: true },
    { label: 'تبويب 6', route: '/home', hasDropdown: true },
    { label: 'تبويب 7', route: '/home', hasDropdown: true },
  ]);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 10);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
