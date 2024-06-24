import { Rediffusions } from "../rediffusions/Rediffusions";

export type Pisodes = {
  createdAt: Date;
  dateDeDiffusion: Date | null;
  id: string;
  rediffusionsItems?: Array<Rediffusions>;
  rSum: string | null;
  titre: string | null;
  updatedAt: Date;
};
