import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ActualitSServiceBase } from "./base/actualitS.service.base";

@Injectable()
export class ActualitSService extends ActualitSServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
