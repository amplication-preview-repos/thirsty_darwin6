import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ActualitSWhereInput = {
  contenu?: StringNullableFilter;
  dateDePublication?: DateTimeNullableFilter;
  id?: StringFilter;
  titre?: StringNullableFilter;
};
