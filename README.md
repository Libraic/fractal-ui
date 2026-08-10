# Fractal UI

A modern web platform for learning mathematics through interactive lessons and progressively challenging exercises. 
The application is designed to help students strengthen their understanding of mathematical concepts by combining clear 
explanations with practical problem-solving. 

The platform is organized into subjects such as Algebra, Geometry, Mathematical Analysis, and others, each containing 
structured lessons, exercises, and progress tracking. Its goal is to provide an intuitive and engaging learning 
experience while making mathematical concepts accessible to learners of all levels. 

The project is built using React for the frontend and is structured around a feature-based architecture to ensure 
scalability, maintainability, and a clear separation of concerns as the application grows.

## Fractal Project Structure

```text
src/
├── app/
│   ├── App.tsx
│   ├── router.tsx
│   ├── providers.tsx
│   └── layouts/
│       ├── RootLayout.tsx
│       └── DashboardLayout.tsx
│
├── features/
│   ├── subjects/
│   │   ├── api/
│   │   │   └── subjects.api.ts
│   │   ├── components/
│   │   │   ├── LearningCard.tsx
│   │   │   └── SubjectGrid.tsx
│   │   ├── data/
│   │   │   └── subjects.ts
│   │   ├── hooks/
│   │   │   └── useSubjects.ts
│   │   ├── pages/
│   │   │   ├── SubjectsPage.tsx
│   │   │   └── SubjectDetailsPage.tsx
│   │   ├── types/
│   │   │   └── subject.types.ts
│   │   └── index.ts
│   │
│   ├── exercises/
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── types/
│   │   └── index.ts
│   │
│   └── authentication/
│       ├── api/
│       ├── components/
│       ├── hooks/
│       ├── pages/
│       ├── types/
│       └── index.ts
│
├── shared/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── index.ts
│   │   ├── Card/
│   │   ├── Input/
│   │   └── Modal/
│   ├── hooks/
│   ├── icons/
│   ├── types/
│   └── utils/
│
├── services/
│   ├── httpClient.ts
│   └── storage.ts
│
├── assets/
│   ├── images/
│   └── fonts/
│
├── styles/
│   └── globals.css
│
├── main.tsx
└── vite-env.d.ts
```

## Organization Principles

* **app/** – Application bootstrap, routing, layouts, and global providers.
* **features/** – Business domains (TopicPage, Exercises, Authentication, etc.). Each feature owns its API, components, hooks, pages, and types.
* **shared/** – Reusable UI components, utilities, hooks, icons, and shared types used across multiple features.
* **services/** – Infrastructure code such as the HTTP client, local storage, authentication helpers, etc.
* **assets/** – Static assets like images and fonts.
* **styles/** – Global styles and Tailwind customizations.
* **main.tsx** – React entry point.
