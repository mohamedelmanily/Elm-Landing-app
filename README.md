# Elm Landing Application - Frontend Assessment Task

An Angular-based frontend application built to demonstrate pixel-perfect UI implementation, responsive design, and accessible user interactions in accordance with the provided Figma requirements.

## 🚀 Live Demo & Repository
- **Live Demo:** [https://elm-landing-app.vercel.app/](https://elm-landing-app.vercel.app/)
- **Source Code:** [https://github.com/mohamedelmanily/Elm-Landing-app](https://github.com/mohamedelmanily/Elm-Landing-app)

## 🛠️ Technology Stack
- **Framework:** Angular (v21.x Standalone Components)
- **UI Libraries:** PrimeNG (v21.x) & Bootstrap 5 (Grid System & Utilities)
- **Styling:** SCSS with custom Design System variables (CSS Custom Properties)
- **Forms:** Angular Reactive Forms

## ✨ Key Features & Achieved Objectives

### 1. Pixel-Perfect & Responsive UI
- Meticulously matched all typography, colors, padding, and layout structures specified in the protected Figma file (`flame-group-wake-tart`).
- Handled all responsive breakpoints (Desktop, Tablet, Mobile) fluidly. The application gracefully restructures layouts, navbar menus, and form structures without content overflow.
- Overridden PrimeNG default native stylings via deep scoping (`::ng-deep`) to strictly adhere to the brand guidelines (e.g., seamless input group addons, custom stepper vertical/horizontal behaviors, tailored active/disabled states).

### 2. Multi-Page Routing
- Configured clean routing logic to handle seamless navigation between pages (`/home`, `/building-permit`, `/text-fields`).
- Modularized feature views into dedicated Standalone Components.

### 3. Interactive Components & Forms
- Developed robust and interactive forms using **Angular Reactive Forms**.
- Included complex dynamic validation logic spanning from required fields to multi-step wizard logic (PrimeNG Stepper handling).
- Built functional custom PrimeNG implementations (e.g., dynamic error bound states, responsive stepper navigation, dynamic Addons layout in RTL).

### 4. Accessibility (a11y) & Semantic HTML
- Fully semantic HTML structure utilizing `<section>`, `<aside>`, `<nav>`, `<main>`, and `<article>` tags.
- Maintained **Screen Reader Support** by incorporating appropriate `aria-label`, `aria-hidden`, and `role` attributes across interactive elements.
- Guaranteed extensive **Keyboard Navigation** compatibility natively via PrimeNG and properly configured `tabindex` flows.

## ⏱️ Time Estimation vs. Actual Summary

| Metric | Estimated Time | Actual Time | Notes / Details |
|--------|----------------|-------------|-----------------|
| Estimation | 12–16 Hours | 24 Hours | Due to time constraints, the task was implemented within 24 hours. Additional time would have been used to further refine UI polish, animations, and edge-case handling. A significant portion of the effort was spent on customizing PrimeNG styles to achieve pixel-perfect alignment with the Figma design, especially for RTL layout and responsiveness. |

---

## 💻 Development Server Setup

To deploy this project locally, ensure you have Node.js and Angular CLI installed.

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   ng serve
   ```
4. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## 📦 Build for Production
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory, optimized for the best UI performance.
