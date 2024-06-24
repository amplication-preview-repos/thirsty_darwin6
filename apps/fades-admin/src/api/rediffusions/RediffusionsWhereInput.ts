import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PisodesWhereUniqueInput } from "../pisodes/PisodesWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RediffusionsWhereInput = {
  dateDeRediffusion?: DateTimeNullableFilter;
  id?: StringFilter;
  pisode?: PisodesWhereUniqueInput;
  titre?: StringNullableFilter;
};
