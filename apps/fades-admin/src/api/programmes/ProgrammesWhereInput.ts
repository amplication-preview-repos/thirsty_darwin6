import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProgrammesWhereInput = {
  description?: StringNullableFilter;
  heureDeDBut?: DateTimeNullableFilter;
  heureDeFin?: DateTimeNullableFilter;
  id?: StringFilter;
  titre?: StringNullableFilter;
};
