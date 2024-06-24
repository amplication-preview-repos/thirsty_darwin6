import { AnimateursWhereInput } from "./AnimateursWhereInput";
import { AnimateursOrderByInput } from "./AnimateursOrderByInput";

export type AnimateursFindManyArgs = {
  where?: AnimateursWhereInput;
  orderBy?: Array<AnimateursOrderByInput>;
  skip?: number;
  take?: number;
};
