/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Rediffusions as PrismaRediffusions,
  Pisodes as PrismaPisodes,
} from "@prisma/client";

export class RediffusionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RediffusionsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.rediffusions.count(args);
  }

  async rediffusionsItems(
    args: Prisma.RediffusionsFindManyArgs
  ): Promise<PrismaRediffusions[]> {
    return this.prisma.rediffusions.findMany(args);
  }
  async rediffusions(
    args: Prisma.RediffusionsFindUniqueArgs
  ): Promise<PrismaRediffusions | null> {
    return this.prisma.rediffusions.findUnique(args);
  }
  async createRediffusions(
    args: Prisma.RediffusionsCreateArgs
  ): Promise<PrismaRediffusions> {
    return this.prisma.rediffusions.create(args);
  }
  async updateRediffusions(
    args: Prisma.RediffusionsUpdateArgs
  ): Promise<PrismaRediffusions> {
    return this.prisma.rediffusions.update(args);
  }
  async deleteRediffusions(
    args: Prisma.RediffusionsDeleteArgs
  ): Promise<PrismaRediffusions> {
    return this.prisma.rediffusions.delete(args);
  }

  async getPisode(parentId: string): Promise<PrismaPisodes | null> {
    return this.prisma.rediffusions
      .findUnique({
        where: { id: parentId },
      })
      .pisode();
  }
}