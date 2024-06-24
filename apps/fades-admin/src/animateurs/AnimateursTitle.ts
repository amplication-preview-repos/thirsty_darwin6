import { Animateurs as TAnimateurs } from "../api/animateurs/Animateurs";

export const ANIMATEURS_TITLE_FIELD = "nom";

export const AnimateursTitle = (record: TAnimateurs): string => {
  return record.nom?.toString() || String(record.id);
};
