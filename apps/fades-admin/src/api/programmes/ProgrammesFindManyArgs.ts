import { ProgrammesWhereInput } from "./ProgrammesWhereInput";
import { ProgrammesOrderByInput } from "./ProgrammesOrderByInput";

export type ProgrammesFindManyArgs = {
  where?: ProgrammesWhereInput;
  orderBy?: Array<ProgrammesOrderByInput>;
  skip?: number;
  take?: number;
};
