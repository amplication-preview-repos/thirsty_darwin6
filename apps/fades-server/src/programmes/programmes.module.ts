import { Module } from "@nestjs/common";
import { ProgrammesModuleBase } from "./base/programmes.module.base";
import { ProgrammesService } from "./programmes.service";
import { ProgrammesController } from "./programmes.controller";
import { ProgrammesResolver } from "./programmes.resolver";

@Module({
  imports: [ProgrammesModuleBase],
  controllers: [ProgrammesController],
  providers: [ProgrammesService, ProgrammesResolver],
  exports: [ProgrammesService],
})
export class ProgrammesModule {}
