import { PisodesWhereUniqueInput } from "../pisodes/PisodesWhereUniqueInput";

export type RediffusionsUpdateInput = {
  dateDeRediffusion?: Date | null;
  pisode?: PisodesWhereUniqueInput | null;
  titre?: string | null;
};
