import { useState, useCallback } from "react";

export interface UseSmartClipboardOptions {
  limit?: number;
}

export function useSmartClipboard({
  limit = 20,
}: UseSmartClipboardOptions = {}) {
  const [history, setHistory] = useState<string[]>([]);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setHistory((prev: string[]) => {
          const updated = [text, ...prev.filter((item) => item !== text)];
          return updated.slice(0, limit);
        });
        return true;
      } catch {
        return false;
      }
    },
    [limit]
  );

  const paste = useCallback(() => history[0] ?? null, [history]);

  const clear = useCallback(() => setHistory([]), []);

  return { copy, paste, history, clear };
}
