import { RediffusionsWhereInput } from "./RediffusionsWhereInput";
import { RediffusionsOrderByInput } from "./RediffusionsOrderByInput";

export type RediffusionsFindManyArgs = {
  where?: RediffusionsWhereInput;
  orderBy?: Array<RediffusionsOrderByInput>;
  skip?: number;
  take?: number;
};
