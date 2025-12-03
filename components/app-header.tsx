import Image from 'next/image';
import ToggleTheme from './toggle-theme';
import Link from 'next/link';

const links = [
  {
    to: "https://github.com/taymakz",
    icon: "icon-[lucide--github]",
    alt: "GitHub"
  },
  {
    to: "https://instagram.com/taymakz",
    icon: "icon-[lucide--instagram]",
    alt: "Instagram"
  },
  {
    to: "https://x.com/taymakz",
    icon: "icon-[hugeicons--new-twitter]",
    alt: "Twitter"
  }
];

export default function AppHeader() {
  return (
    <header className="px-8 py-6 flex items-center justify-between" aria-label="Site Header">

      <Link href="/" aria-label="Taymakz.ir">
        <svg xmlns="http://www.w3.org/2000/svg" fill="var(--foreground)" width={38} height={38} viewBox="0 0 484.38 431.87"><path d="M451.92,69.76l-205.1,359.59c-.89,1.56-2.55,2.52-4.34,2.52h-.58c-1.79,0-3.45-.96-4.34-2.52L32.46,69.76c-.76-1.33.21-2.99,1.74-2.99h52.94c3.58,0,6.89,1.92,8.67,5.03l144.64,252.52c.77,1.34,2.7,1.34,3.47,0l144.64-252.52c1.78-3.11,5.09-5.03,8.67-5.03h52.94c1.53,0,2.5,1.66,1.74,2.99Z" /><path d="M483.05,14.95l-21.35,37.46c-.36.63-1.02,1.01-1.73,1.01l-187.49.66v164.46c0,.88-.23,1.74-.67,2.5l-28.75,49.67c-.39.66-1.35.66-1.74,0l-28.75-49.67c-.44-.76-.67-1.62-.67-2.5V54.08l-187.49-.66c-.71,0-1.37-.38-1.73-1.01L1.33,14.95C-2.47,8.29,2.34,0,10.01,0h464.36c7.67,0,12.48,8.29,8.68,14.95Z" /></svg>
      </Link>

      <nav aria-label="Social media links" className="flex items-center gap-4.5">
        <ul className="flex gap-4.5">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                href={link.to}
                target="_blank"
                rel="noopener"
                aria-label={link.alt}
                className="text-muted-foreground hover:text-foreground duration-200 flex items-center justify-center"
              >
                <span className={`${link.icon} size-5`} role="img" aria-label={link.alt} />
              </Link>
            </li>
          ))}
        </ul>
        <ToggleTheme />
      </nav>
    </header>
  );
};
