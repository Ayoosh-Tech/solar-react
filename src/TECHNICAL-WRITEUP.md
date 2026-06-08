Technical Write-Up & Lessons Learnt

Project Overview

SolarLink Marketplace is a frontend web application designed to connect users with solar energy providers. The platform allows users to browse companies, request quotes, explore company profiles, access dashboards, communicate through chat, and use a solar calculator to estimate their energy needs.

Architecture Decisions

The application was built using React and Vite to take advantage of component-based development and fast build performance. React Router was used to manage navigation between pages, while reusable components helped maintain consistency throughout the application. The project was deployed using Netlify to provide an accessible live version of the application.

Tools Used

- React
- Vite
- React Router
- CSS
- Git and GitHub
- Netlify
- Lighthouse

Challenges Faced and Solutions

One of the major challenges was ensuring that the application was fully responsive across different screen sizes. Several layouts initially broke on smaller devices. This was resolved by using media queries and adjusting layouts to stack appropriately on mobile devices.

Another challenge involved accessibility. Running Lighthouse revealed that the application lacked a main landmark, which affected screen reader navigation. This issue was fixed by wrapping the application's routed content within a "<main>" element, resulting in a 100 Accessibility score.

Solutions I Am Most Proud Of

1. Accessibility Improvement

By introducing semantic HTML elements such as the "<main>" landmark, the application's accessibility score improved significantly and provided a better experience for assistive technology users.

2. Responsive Design Optimization

Careful testing across mobile, tablet, and desktop devices allowed the interface to adapt smoothly across different screen sizes without layout breakage or overflow issues.

Features I Would Add Given More Time

1. Backend Integration

Integrate live APIs to replace mock data and enable real-time functionality.

2. Push Notifications

Implement notifications to alert users about quote updates and new messages.

3. Online Payments

Allow users to securely pay for solar consultations or services directly through the platform.

Lessons Learnt

This project strengthened my understanding of responsive design, accessibility standards, testing practices, and deployment workflows. It also highlighted the importance of iterative testing and attention to user experience when building production-ready applications.