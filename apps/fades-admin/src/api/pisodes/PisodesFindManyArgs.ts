import { PisodesWhereInput } from "./PisodesWhereInput";
import { PisodesOrderByInput } from "./PisodesOrderByInput";

export type PisodesFindManyArgs = {
  where?: PisodesWhereInput;
  orderBy?: Array<PisodesOrderByInput>;
  skip?: number;
  take?: number;
};
