/**
 * Ekspor ulang helper navigasi dari next-intl agar locale otomatis tersuntik.
 * Gunakan ini sebagai pengganti `next/link` dan `next/navigation`.
 *
 * Contoh penggunaan:
 *   import { Link, useRouter, usePathname, redirect } from "@/i18n/navigation";
 */
import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

export const { Link, useRouter, usePathname, redirect, getPathname } =
  createNavigation(routing);
