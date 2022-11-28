import { messagesFr } from "./fr";
import { messagesEn } from "./en";
import { LOCALES } from "./locales";
import { nomenclaturesEn } from "modules/nomenclature/i18n/en";
import { nomenclaturesFr } from "modules/nomenclature/i18n/fr";

export const messages = {
  [LOCALES.ENGLISH]: {
    ...messagesEn,
    ...nomenclaturesEn,
  },
  [LOCALES.FRENCH]: {
    ...messagesFr,
    ...nomenclaturesFr,
  },
};
