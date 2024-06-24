import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PisodesServiceBase } from "./base/pisodes.service.base";

@Injectable()
export class PisodesService extends PisodesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
