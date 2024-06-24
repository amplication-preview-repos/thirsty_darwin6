import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RediffusionsService } from "./rediffusions.service";
import { RediffusionsControllerBase } from "./base/rediffusions.controller.base";

@swagger.ApiTags("rediffusions")
@common.Controller("rediffusions")
export class RediffusionsController extends RediffusionsControllerBase {
  constructor(protected readonly service: RediffusionsService) {
    super(service);
  }
}
