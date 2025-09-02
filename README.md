# use-smart-clipboard

> ✨ A smart clipboard React hook with copy, paste, history, and clear support.

[![npm version](https://img.shields.io/npm/v/use-smart-clipboard.svg?style=flat-square)](https://www.npmjs.com/package/use-smart-clipboard)
[![npm downloads](https://img.shields.io/npm/dm/use-smart-clipboard.svg?style=flat-square)](https://www.npmjs.com/package/use-smart-clipboard)

---

## 🚀 Install

```bash
npm install use-smart-clipboard
# or
yarn add use-smart-clipboard
# or
pnpm add use-smart-clipboard
# or
bun add use-smart-clipboard
```

---

## 📖 Usage

```jsx
import { useSmartClipboard } from "use-smart-clipboard";

export default function App() {
  const { copy, paste, history, clear } = useSmartClipboard({ limit: 10 });

  return (
    <div>
      <h1>Smart Clipboard Demo</h1>

      <button onClick={() => copy("Hello World!")}>Copy "Hello World!"</button>

      <button onClick={() => alert(paste() || "Clipboard is empty")}>
        Paste Last Copied
      </button>

      <button onClick={clear}>Clear History</button>

      <h2>History</h2>
      <ul>
        {history.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 📌 Hook API

```jsx
const { copy, paste, history, clear } = useSmartClipboard(options);
```

### Options

- `limit?: number` - Maximum number of items to store in history (default: `20`).

### Returns

- `copy(text: string): Promise<boolean>` - Copies text to clipboard and adds to history. Returns true if successful.
- `paste(): string | null` - Returns the most recent copied value (or null if empty).
- `history: string[]` - Array of unique copied values (latest first).
- `clear(): void` - Clears the clipboard history.
