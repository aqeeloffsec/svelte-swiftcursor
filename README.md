<div align="center">
  <h1>✨ Svelte Swift Cursor</h1>
  <p>A premium, highly customizable, and buttery-smooth cursor component designed to elevate interactions in your Svelte 5 applications.</p>
</div>

---

## ⚡ Features

- **Modern & Smooth:** Built for Svelte 5 with `$state` and `$derived` runes for optimal performance.
- **Highly Customizable:** Easily change color, size, and shape (circle or square).
- **Interactive:** Built-in hover animations when interacting with links or `.hoverable` elements.
- **Zero Dependencies:** Keeps your bundle light and clean.

## 📦 Installation

Choose your preferred package manager to install `svelte-swift-cursor`:

**NPM**
```bash
npm i svelte-swift-cursor
```

**Yarn**
```bash
yarn add svelte-swift-cursor
```

**PNPM**
```bash
pnpm add svelte-swift-cursor
```

## 🚀 Quick Start

Import the `Cursor` component and place it in your root layout or main component:

```svelte
<script lang="ts">
  import { Cursor } from 'svelte-swift-cursor';
</script>

<!-- Default configuration -->
<Cursor />

<!-- Custom configuration -->
<Cursor 
  cColor="#00f0ff" 
  cSize={28} 
  cShape="circle" 
  hoverAnimate={true} 
/>
```

## 🛠️ Properties

You can pass the following props to easily customize the behavior and appearance of your cursor:

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `cColor` | `String` | `'black'` | The CSS background color of your cursor (e.g., `'red'`, `'#00f0ff'`, `'rgba(0,0,0,0.5)'`). |
| `cSize` | `Number` | `20` | The diameter (or width/height) of the cursor in pixels. |
| `cShape` | `'circle' \| 'square'` | `'circle'` | The shape of the cursor. |
| `hoverAnimate` | `Boolean` | `false` | Whether the cursor expands when lingering over interactive elements (`a`, `button`, `.hoverable`). |

## ✨ Hover Effects

If `hoverAnimate` is set to `true`, the cursor will automatically expand when hovering over standard interactive elements (`<a>`, `<button>`). 

You can also apply this effect to any other element by simply adding the `.hoverable` class to it:

```svelte
<div class="hoverable">
  <h2>Hover over me for magic!</h2>
</div>
```

## 📄 License

This project is licensed under the MIT License.
