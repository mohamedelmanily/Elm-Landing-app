import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    title: 'علم | الصفحة الرئيسية'
  },
  {
    path: 'building-permit',
    loadComponent: () => import('./pages/building-permit/building-permit').then(m => m.BuildingPermit),
    title: 'علم | رخصة البناء'
  },
  {
    path: 'text-fields',
    loadComponent: () => import('./pages/text-fields/text-fields').then(m => m.TextFields),
    title: 'علم | حقول النص'
  },
  { path: '**', redirectTo: 'home' }
];
