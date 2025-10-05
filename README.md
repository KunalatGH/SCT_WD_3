# Quiz Game Application

A simple interactive multiple-choice quiz game built with **React**, **Vite**, and **TailwindCSS**. This is a frontend-only project designed for desktop/laptop view, featuring instant feedback, a progress bar, and summary results.

## Features

- Single-select, multi-select, and fill-in-the-blank questions
- Visual progress bar
- Instant answer feedback (correct/incorrect)
- End-of-quiz stats: score, correct, incorrect, review per question
- Restart option

## Project Structure

quiz-game/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Quiz.jsx
│ │ ├── Question.jsx
│ │ └── Result.jsx
│ ├── assets/
│ │ └── data/
│ │ └── questions.js
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── package.json
├── tailwind.config.js
└── vite.config.js


## Getting Started

### 1. Clone the repository
git clone https://github.com/yourusername/quiz-game.git
cd quiz-game

### 2. Install dependencies

npm install

### 3. Run the app in development

npm run dev

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Customization

- Add or edit questions in `src/assets/data/questions.js`
- Adjust styling with Tailwind classes in the components or `index.css`
- All logic is in the `src/components` folder for easy changes

## Build for Production

npm run build

## License
MIT
