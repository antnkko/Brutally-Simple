# Developer Brief: Brutally Simple

## Project Overview

**Brutally Simple** is a marketing agency portfolio website featuring sophisticated scroll-based animations and a minimalist design aesthetic. The site showcases two case studies (Young Lions Competition and Evee. AI Interviewer) with smooth transitions and interactive elements.

## Tech Stack

- **React 18** - Component-based UI
- **Vite** - Build tool and dev server
- **React Router DOM v7** - Client-side routing
- **Tailwind CSS v3** - Utility-first styling
- **GSAP (GreenSock)** - Advanced scroll animations via ScrollTrigger
- **@squircle-js/react** - Rounded corner components (if used)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Button component with variants (black/white/gray)
│   ├── IconCross.jsx   # Close icon for case study pages
│   ├── IconDot.jsx     # Dot separator icon
│   ├── IconOpen.jsx    # Arrow/open icon
│   ├── IconVolumeOff.jsx / IconVolumeOn.jsx  # Volume control icons
│   └── ScrollToTop.jsx # Scroll restoration component
│
├── pages/              # Page-level components
│   ├── HomePage.jsx    # Main landing page
│   └── YoungLionsPage.jsx  # Case study page (template for others)
│
├── sections/           # Page sections
│   ├── Hero.jsx        # Hero section with pinned scroll animation + typewriter effect
│   ├── ProjectCard.jsx # Project intro cards with fade-out scroll
│   ├── MediaSection.jsx # Media containers (video/image/case-cover)
│   ├── ParagraphSection.jsx # Text content sections
│   └── Footer.jsx      # Footer with scale animation
│
├── hooks/              # Custom React hooks
│   ├── useScrollAnimation.js  # GSAP scroll animation hooks
│   └── useTypewriter.js       # Typewriter text animation hook
│
├── App.jsx             # Router setup and main layout
├── main.jsx            # React entry point
└── index.css           # Global styles + animation system
```

## Key Features

### 1. Scroll-Based Animations

The site uses GSAP ScrollTrigger for sophisticated scroll-driven animations:

- **Hero Section**: Pinned section with fade-out on scroll + typewriter animation for prefix text
- **Project Cards**: Text sections that fade out as you scroll past
- **Media Sections**: Scale animations as content enters viewport
- **Footer**: Scale-up animation with pinning
- **Blur Fade-In**: CSS-based blur fade-in for content appearance

### 2. Animation System

#### Scroll Animation Hooks (`useScrollAnimation.js`)

- `useTextScrollAnimation()` - Pins text sections and fades them out
- `useMediaScrollAnimation()` - Scales media as it enters viewport
- `useMediaWithFadeOutAnimation()` - Scales up then fades out
- `useFooterScrollAnimation()` - Footer scale animation
- `useBlurFadeIn()` - Intersection Observer-based blur fade-in

#### Typewriter Animation Hook (`useTypewriter.js`)

- `useTypewriter()` - Types out text character by character with configurable speed and delay
  - Used in Hero section to type "Make it " before "Brutally Simple" appears
  - Configurable: `text`, `speed` (ms per character), `delay` (ms), `enabled` (boolean)

#### CSS Animation System (`index.css`)

- **Blur Fade-In**: `[data-appear]` attribute with staggered delays (80ms increments)
- **Scroll Blur**: `.scroll-blur-section` for blur effect during smooth scrolling
- **Blur Morph Text**: `.blur-morph-text` for button text transitions
- **Button Bounce**: `.btn-bounce-wrapper` for button width animations

### 3. Routing

- `/` - Home page with hero and project showcases
- `/young-lions` - Case study page (template for other case studies)
- Navigation handled via React Router with state management for animation triggers

### 4. SectionsWrapper Pattern

Both `HomePage` and `YoungLionsPage` use a `SectionsWrapper` component that:
- Automatically finds the last `MediaSection` before `Footer`
- Applies `fadeOut` prop to that section
- Manages scroll blur state for middle sections
- Uses React's `Children` API to clone and enhance children

## Design System

### Colors (Tailwind Config)

```javascript
'brand-black': '#030303'
'brand-white': '#FCFCFC'
'gray-10': '#EDEDED'
'gray-20': '#CCCCCC'
'gray-50': '#808080'
'gray-60': '#666666'
```

### Typography

- **Serif**: "Young Serif" - Used for headings
- **Display**: "Inter Display" (weight 800) - Used for buttons and UI text

### Font Sizes (Custom Tailwind)

- `text-h1`: 67px (mobile: 55px)
- `text-h2`: 25px
- `text-body`: 18px
- `text-button`: 18px
- `text-label`: 18px

### Border Radius

- `rounded-card`: 36px
- `rounded-image`: 36px
- `rounded-pill`: 9999px

## Development Workflow

### Getting Started

```bash
npm install          # Install dependencies
npm run dev         # Start dev server (http://localhost:5173)
npm run build       # Production build
npm run preview     # Preview production build
```

### Key Conventions

1. **Component Structure**: Functional components with hooks
2. **Styling**: Tailwind utility classes with custom design tokens
3. **Animations**: GSAP for scroll animations, CSS for appearance animations
4. **State Management**: React hooks (useState, useEffect, useCallback)
5. **Props Pattern**: Destructured props with defaults

### Important Patterns

#### Scroll Animation Setup

```jsx
const { sectionRef, contentRef } = useTextScrollAnimation({
  pinDuration: "85%",
  scrubDuration: 0.5
});
```

#### Blur Fade-In

```jsx
<div data-appear="1">Content</div>  // Delay: 0ms
<div data-appear="2">Content</div>  // Delay: 80ms
<div data-appear="3">Content</div>  // Delay: 160ms
```

#### Typewriter Animation

```jsx
const prefixTyped = useTypewriter({
  text: 'Make it ',
  speed: 80,              // milliseconds per character
  delay: 1130,            // delay before starting (fade-in duration + extra delay)
  enabled: true,          // enable/disable the animation
});

<h1>
  <span>{prefixTyped}</span>
  <span>Brutally Simple</span>
</h1>
```

#### Media Section Types

- `type="video"` - Video placeholder with sound button
- `type="case-cover"` - Case study cover with Explore + Sound buttons
- `type="image"` - Image placeholder
- `layout="two-column"` - Two-column image layout

## Animation Timing

- **Blur Fade-In Duration**: 630ms (customizable via CSS variables)
- **Typewriter Speed**: 80ms per character (Hero section)
- **Typewriter Delay**: 1130ms (630ms fade-in + 500ms additional delay)
- **Scroll Blur Duration**: 800ms (matches smooth scroll easing)
- **Button Morph**: 350ms
- **Stagger Delays**: 80ms increments

## CSS Variables (Customizable)

```css
--appear-blur: 20px;        /* Range: 8-32px */
--appear-distance: 18px;    /* Range: 12-48px */
--appear-duration: 630ms;   /* Range: 400-900ms */
```

## Special Behaviors

### Scroll-to-Footer Blur

When clicking "Work with us" button:
1. Activates blur on middle sections
2. Smoothly scrolls to footer
3. Automatically removes blur before scroll completes

### Case Study Navigation

- Clicking project cards navigates to case study pages
- Returning to home triggers re-animation of hero content
- Uses React Router state (`fromCaseStudy`) to detect navigation

### Close Button (Case Study Pages)

- Fixed position top-right (46px from edges)
- Navigates back to home page
- Gray background with hover state

## Assets

- Images stored in `/public/images/`
- Current images: `Young Lions.jpg`, `Evee.jpg`
- Fonts loaded from Google Fonts (Young Serif, Inter Display)

## Browser Support

- Modern browsers with CSS custom properties support
- Smooth scroll behavior
- Intersection Observer API
- CSS filters (blur)

## Performance Considerations

- GSAP ScrollTrigger cleanup via `gsap.context()` and `revert()`
- `will-change-transform` utility for animation optimization
- Intersection Observer cleanup on unmount
- Scroll blur transitions match browser smooth scroll timing

## Common Tasks

### Adding a New Case Study

1. Create new page component in `src/pages/`
2. Add route in `App.jsx`
3. Update `ProjectCard` in `HomePage.jsx` with new project data
4. Add `MediaSection` with `type="case-cover"` and `projectSlug` prop

### Modifying Animation Timing

- Scroll animations: Adjust in `useScrollAnimation.js` hook options
- CSS animations: Modify CSS variables in `index.css`
- Stagger delays: Update `[data-appear]` selectors in `index.css`

### Adding New Media Section

```jsx
<MediaSection 
  type="video"           // or "image", "case-cover"
  dataAppear="2"         // Optional: blur fade-in delay
  appearEarly={true}     // Optional: trigger animation earlier
  fadeOut={true}         // Optional: fade out on scroll
  projectSlug="slug"     // For case-cover type
/>
```

## Notes

- The project follows a "brutally simple" design philosophy - minimal UI, maximum impact
- Scroll animations are carefully timed to create smooth, cinematic experiences
- All animations are performant and use hardware acceleration where possible
- The codebase prioritizes clarity and maintainability over abstraction
