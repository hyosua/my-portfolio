import { ui, languages } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return 'fr';
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui['fr']) {
    return ui[lang][key] || ui['fr'][key];
  };
}