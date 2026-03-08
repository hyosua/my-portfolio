import { common } from "./translations/common";
import { hero } from "./translations/hero";
import { skills } from "./translations/skills";
import { experience } from "./translations/experience";
import { education } from "./translations/education";
import { projects } from "./translations/projects";
import { veille } from "./translations/veille";
import { logos } from "./translations/logos";

export const languages = {
  fr: "Français",
  en: "English",
};

export const defaultLang = "fr";

export const ui = {
  fr: {
    ...common.fr,
    ...hero.fr,
    ...skills.fr,
    ...experience.fr,
    ...education.fr,
    ...projects.fr,
    ...veille.fr,
    ...logos.fr,
  },
  en: {
    ...common.en,
    ...hero.en,
    ...skills.en,
    ...experience.en,
    ...education.en,
    ...projects.en,
    ...veille.en,
    ...logos.en,
  },
} as const;
