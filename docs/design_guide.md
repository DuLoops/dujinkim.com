# Blog Design Guide

## 1. Design Philosophy
The blog features a **minimalist, dark-themed** aesthetic that emphasizes readability and content. It uses a "natural" color palette rooted in neutral grays, punctuated by a vibrant **Orange** accent to guide user interaction.

## 2. Color Palette

The color system is built on `tailwind`'s neutral scale and a custom orange accent.

### Light Theme
| Role | Class | Hex | Description |
|------|-------|-----|-------------|
| **Background** | `bg-white` | `#FFFFFF` | Primary page background. |
| **Surface** | `bg-white` | `#FFFFFF` | Card backgrounds, button fills. |
| **Foreground** | `text-neutral-950` | `#0A0A0A` | Primary text color. |
| **Muted Text** | `text-neutral-500` | `#737373` | Secondary text, dates, metadata. |

### Dark Theme (Default)
| Role | Class | Hex | Description |
|------|-------|-----|-------------|
| **Background** | `bg-neutral-800` | `#262626` | Primary page background. |
| **Surface** | `bg-neutral-900` | `#171717` | Card backgrounds, button fills. |
| **Foreground** | `text-gray-100` | `~#F3F4F6` | Primary text color. |
| **Muted Text** | `text-gray-400` | `~#9CA3AF` | Secondary text, dates, metadata. |

### Accents
| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| **Primary Accent** | `orange-400` | `#FB923C` | Call-to-action buttons, borders, hover states, scroll indicators. |
| **Dark Orange** | `_orange` | `#D95204` | Deeper shade, used in some brand elements. |

## 3. Typography

The typography pairs a clean geometric sans-serif with expressive scripts for creative flair.

### Font Families
- **Primary (Sans)**: `Montserrat` (`font-m`, `font-sans`)
  - Usage: Body text, UI elements, main headings.
- **Secondary (Script)**: `Courgette` (`font-co`)
  - Usage: Artistic accents, signatures, quote decorations.
- **Tertiary (Display)**: `Poiret One` (`font-po`)
  - Usage: Stylized headings or alternative display text.

## 4. Components

### Buttons
Buttons follow a high-contrast, outlined style in their default state.

- **Default Style**:
  - Border: `2px solid orange-400`
  - Background: `neutral-900` (Dark)
  - Text: `white` (or neutral-light)
  - **Hover State**:
    - Background: `orange-400` (Fills with accent)
    - Text: `black` (High contrast against orange)

```tsx
<Button className="border-orange-400 border-2 bg-neutral-900 md:hover:bg-orange-400 md:hover:text-black">
  Click Me
</Button>
```

### Cards & Surfaces
- **Background**: `neutral-900`
- **Border**: Minimal or none.
- **Shadow**: Subtle, used mainly for elevation on interaction.

### Scroll Indicator
- **Style**: Animated chevron.
- **Color**: `orange-400` (#FB923C).
- **Animation**: Bouncing motion (`animate-bounce` or custom keyframes).

## 5. Layout & Spacing
- **Container**: Centered, responsive max-width (`container`).
- **Padding**: Generous whitespace to maintain the "natural" and "clean" feel.
