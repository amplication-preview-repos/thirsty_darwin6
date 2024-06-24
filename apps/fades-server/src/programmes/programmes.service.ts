import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProgrammesServiceBase } from "./base/programmes.service.base";

@Injectable()
export class ProgrammesService extends ProgrammesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
