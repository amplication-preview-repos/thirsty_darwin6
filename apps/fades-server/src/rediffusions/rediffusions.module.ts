import { Module } from "@nestjs/common";
import { RediffusionsModuleBase } from "./base/rediffusions.module.base";
import { RediffusionsService } from "./rediffusions.service";
import { RediffusionsController } from "./rediffusions.controller";
import { RediffusionsResolver } from "./rediffusions.resolver";

@Module({
  imports: [RediffusionsModuleBase],
  controllers: [RediffusionsController],
  providers: [RediffusionsService, RediffusionsResolver],
  exports: [RediffusionsService],
})
export class RediffusionsModule {}
