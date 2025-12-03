import {
  Geist_Mono as FontMono,
  Geist as FontSans,
} from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});


export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
);
