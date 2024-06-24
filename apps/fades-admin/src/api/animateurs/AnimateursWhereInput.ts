import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AnimateursWhereInput = {
  biographie?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  nom?: StringNullableFilter;
};
