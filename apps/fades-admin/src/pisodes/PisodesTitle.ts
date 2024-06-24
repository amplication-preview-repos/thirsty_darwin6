import { Pisodes as TPisodes } from "../api/pisodes/Pisodes";

export const PISODES_TITLE_FIELD = "titre";

export const PisodesTitle = (record: TPisodes): string => {
  return record.titre?.toString() || String(record.id);
};
