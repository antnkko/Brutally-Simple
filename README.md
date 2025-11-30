# Brutally Simple - Marketing Agency Website

A pixel-perfect implementation of the Brutally Simple marketing agency design.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Young Serif + Inter Display fonts (Google Fonts)

## Project Structure

```
src/
├── components/
│   ├── Button.jsx       # Reusable button component
│   ├── IconDot.jsx      # Dot separator icon
│   ├── IconOpen.jsx     # Arrow/open icon
│   └── IconVolumeOff.jsx # Volume off icon
├── sections/
│   ├── Hero.jsx         # Main hero section
│   ├── ProjectCard.jsx  # Project intro cards
│   ├── MediaSection.jsx # Media/image placeholders
│   └── Footer.jsx       # Dark footer
├── App.jsx              # Main layout
├── index.css            # Tailwind + custom styles
└── main.jsx             # Entry point
```

## Design Tokens

| Token | Value |
|-------|-------|
| Black | #030303 |
| White | #FCFCFC |
| Gray/10 | #EDEDED |
| Gray/20 | #CCCCCC |
| Gray/50 | #808080 |
| Gray/60 | #666666 |

