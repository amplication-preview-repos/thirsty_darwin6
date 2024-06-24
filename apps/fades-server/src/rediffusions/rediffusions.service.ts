import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RediffusionsServiceBase } from "./base/rediffusions.service.base";

@Injectable()
export class RediffusionsService extends RediffusionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
