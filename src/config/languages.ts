export const SUPPORTED_LANGUAGES = {
  'en-US': 'English (United States)',
  'pt-BR': 'Portuguese (Brazil)'
} as const;

export type SupportedLanguage = keyof typeof SUPPORTED_LANGUAGES;

export function isValidLanguage(lang: string): lang is SupportedLanguage {
  return lang in SUPPORTED_LANGUAGES;
} 