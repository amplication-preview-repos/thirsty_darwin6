import { Programmes as TProgrammes } from "../api/programmes/Programmes";

export const PROGRAMMES_TITLE_FIELD = "titre";

export const ProgrammesTitle = (record: TProgrammes): string => {
  return record.titre?.toString() || String(record.id);
};
