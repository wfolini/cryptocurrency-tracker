import { useEffect, useRef, useState } from "react";

export function useDebounce(value: string, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, delay]);

  return debouncedValue;
}
