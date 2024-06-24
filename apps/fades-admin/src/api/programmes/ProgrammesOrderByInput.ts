import { SortOrder } from "../../util/SortOrder";

export type ProgrammesOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  heureDeDBut?: SortOrder;
  heureDeFin?: SortOrder;
  id?: SortOrder;
  titre?: SortOrder;
  updatedAt?: SortOrder;
};
