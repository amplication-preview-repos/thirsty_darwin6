import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AnimateursService } from "./animateurs.service";
import { AnimateursControllerBase } from "./base/animateurs.controller.base";

@swagger.ApiTags("animateurs")
@common.Controller("animateurs")
export class AnimateursController extends AnimateursControllerBase {
  constructor(protected readonly service: AnimateursService) {
    super(service);
  }
}
