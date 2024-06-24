import { Module } from "@nestjs/common";
import { ActualitSModuleBase } from "./base/actualitS.module.base";
import { ActualitSService } from "./actualitS.service";
import { ActualitSController } from "./actualitS.controller";
import { ActualitSResolver } from "./actualitS.resolver";

@Module({
  imports: [ActualitSModuleBase],
  controllers: [ActualitSController],
  providers: [ActualitSService, ActualitSResolver],
  exports: [ActualitSService],
})
export class ActualitSModule {}
