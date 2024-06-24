import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PisodesService } from "./pisodes.service";
import { PisodesControllerBase } from "./base/pisodes.controller.base";

@swagger.ApiTags("pisodes")
@common.Controller("pisodes")
export class PisodesController extends PisodesControllerBase {
  constructor(protected readonly service: PisodesService) {
    super(service);
  }
}
