import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ActualitSService } from "./actualitS.service";
import { ActualitSControllerBase } from "./base/actualitS.controller.base";

@swagger.ApiTags("actualitS")
@common.Controller("actualitS")
export class ActualitSController extends ActualitSControllerBase {
  constructor(protected readonly service: ActualitSService) {
    super(service);
  }
}
