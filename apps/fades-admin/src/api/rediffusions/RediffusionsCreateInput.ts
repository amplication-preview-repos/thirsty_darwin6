import { PisodesWhereUniqueInput } from "../pisodes/PisodesWhereUniqueInput";

export type RediffusionsCreateInput = {
  dateDeRediffusion?: Date | null;
  pisode?: PisodesWhereUniqueInput | null;
  titre?: string | null;
};
