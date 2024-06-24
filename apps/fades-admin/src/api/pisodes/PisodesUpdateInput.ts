import { RediffusionsUpdateManyWithoutPisodesItemsInput } from "./RediffusionsUpdateManyWithoutPisodesItemsInput";

export type PisodesUpdateInput = {
  dateDeDiffusion?: Date | null;
  rediffusionsItems?: RediffusionsUpdateManyWithoutPisodesItemsInput;
  rSum?: string | null;
  titre?: string | null;
};
