import { ActualitS as TActualitS } from "../api/actualitS/ActualitS";

export const ACTUALITS_TITLE_FIELD = "titre";

export const ActualitSTitle = (record: TActualitS): string => {
  return record.titre?.toString() || String(record.id);
};
