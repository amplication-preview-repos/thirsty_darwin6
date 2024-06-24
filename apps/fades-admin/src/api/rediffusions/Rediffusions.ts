import { Pisodes } from "../pisodes/Pisodes";

export type Rediffusions = {
  createdAt: Date;
  dateDeRediffusion: Date | null;
  id: string;
  pisode?: Pisodes | null;
  titre: string | null;
  updatedAt: Date;
};
