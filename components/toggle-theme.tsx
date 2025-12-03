"use client"
import { useTheme } from 'next-themes';

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const isAppearanceTransition =
    typeof document !== 'undefined' &&
    // @ts-expect-error: Transition API
    document.startViewTransition &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const toggle = () => {
    if (!isAppearanceTransition) {
      setTheme(isDark ? 'light' : 'dark');
      return;
    }

    document.startViewTransition(() => {
      setTheme(isDark ? 'light' : 'dark');
    });
  };

  return (
    <button
      title="Toggle Theme"
      className="text-muted-foreground hover:text-foreground duration-200 flex items-center justify-center"
      onClick={toggle}
    >
      <span className="icon-[lucide--moon] dark:hidden size-5" />
      <span className="icon-[lucide--sun] hidden dark:block size-5" />
    </button>
  );
};


