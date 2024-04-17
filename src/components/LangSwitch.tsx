"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../i18n-config";

interface LangSwitchProps {
  dictionary?: {
    localeSwitcherLabel: string;
  };
}

const defaultDictionary = {
  localeSwitcherLabel: 'Locale switcher:',
};

export default function LangSwitch({ dictionary = defaultDictionary }: LangSwitchProps) {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <p>{dictionary.localeSwitcherLabel}</p>
      <ul>
        {i18n.locales.map((locale) => (
          <li key={locale}>
            <Link href={redirectedPathName(locale)}>{locale}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}