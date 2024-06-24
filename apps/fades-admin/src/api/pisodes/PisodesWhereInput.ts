import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RediffusionsListRelationFilter } from "../rediffusions/RediffusionsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PisodesWhereInput = {
  dateDeDiffusion?: DateTimeNullableFilter;
  id?: StringFilter;
  rediffusionsItems?: RediffusionsListRelationFilter;
  rSum?: StringNullableFilter;
  titre?: StringNullableFilter;
};
