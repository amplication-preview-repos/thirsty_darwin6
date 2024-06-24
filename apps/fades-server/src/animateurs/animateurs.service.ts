import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnimateursServiceBase } from "./base/animateurs.service.base";

@Injectable()
export class AnimateursService extends AnimateursServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
