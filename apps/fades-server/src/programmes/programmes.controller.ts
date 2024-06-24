import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProgrammesService } from "./programmes.service";
import { ProgrammesControllerBase } from "./base/programmes.controller.base";

@swagger.ApiTags("programmes")
@common.Controller("programmes")
export class ProgrammesController extends ProgrammesControllerBase {
  constructor(protected readonly service: ProgrammesService) {
    super(service);
  }
}
