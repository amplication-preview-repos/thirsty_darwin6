import { Module } from "@nestjs/common";
import { AnimateursModuleBase } from "./base/animateurs.module.base";
import { AnimateursService } from "./animateurs.service";
import { AnimateursController } from "./animateurs.controller";
import { AnimateursResolver } from "./animateurs.resolver";

@Module({
  imports: [AnimateursModuleBase],
  controllers: [AnimateursController],
  providers: [AnimateursService, AnimateursResolver],
  exports: [AnimateursService],
})
export class AnimateursModule {}
