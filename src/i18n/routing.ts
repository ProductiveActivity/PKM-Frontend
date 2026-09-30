import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Daftar semua bahasa yang didukung
  locales: ["id", "en"],

  // Bahasa default jika tidak ada prefix di URL
  defaultLocale: "id",

  // Strategi prefix: "as-needed" = bahasa default tidak diberi prefix
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
