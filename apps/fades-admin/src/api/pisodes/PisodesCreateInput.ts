import { RediffusionsCreateNestedManyWithoutPisodesItemsInput } from "./RediffusionsCreateNestedManyWithoutPisodesItemsInput";

export type PisodesCreateInput = {
  dateDeDiffusion?: Date | null;
  rediffusionsItems?: RediffusionsCreateNestedManyWithoutPisodesItemsInput;
  rSum?: string | null;
  titre?: string | null;
};
