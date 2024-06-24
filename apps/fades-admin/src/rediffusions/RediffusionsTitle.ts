import { Rediffusions as TRediffusions } from "../api/rediffusions/Rediffusions";

export const REDIFFUSIONS_TITLE_FIELD = "titre";

export const RediffusionsTitle = (record: TRediffusions): string => {
  return record.titre?.toString() || String(record.id);
};
