import { Module } from "@nestjs/common";
import { PisodesModuleBase } from "./base/pisodes.module.base";
import { PisodesService } from "./pisodes.service";
import { PisodesController } from "./pisodes.controller";
import { PisodesResolver } from "./pisodes.resolver";

@Module({
  imports: [PisodesModuleBase],
  controllers: [PisodesController],
  providers: [PisodesService, PisodesResolver],
  exports: [PisodesService],
})
export class PisodesModule {}
