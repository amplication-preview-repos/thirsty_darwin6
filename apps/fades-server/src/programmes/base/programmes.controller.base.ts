/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProgrammesService } from "../programmes.service";
import { ProgrammesCreateInput } from "./ProgrammesCreateInput";
import { Programmes } from "./Programmes";
import { ProgrammesFindManyArgs } from "./ProgrammesFindManyArgs";
import { ProgrammesWhereUniqueInput } from "./ProgrammesWhereUniqueInput";
import { ProgrammesUpdateInput } from "./ProgrammesUpdateInput";

export class ProgrammesControllerBase {
  constructor(protected readonly service: ProgrammesService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Programmes })
  async createProgrammes(
    @common.Body() data: ProgrammesCreateInput
  ): Promise<Programmes> {
    return await this.service.createProgrammes({
      data: data,
      select: {
        createdAt: true,
        description: true,
        heureDeDBut: true,
        heureDeFin: true,
        id: true,
        titre: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Programmes] })
  @ApiNestedQuery(ProgrammesFindManyArgs)
  async programmesItems(@common.Req() request: Request): Promise<Programmes[]> {
    const args = plainToClass(ProgrammesFindManyArgs, request.query);
    return this.service.programmesItems({
      ...args,
      select: {
        createdAt: true,
        description: true,
        heureDeDBut: true,
        heureDeFin: true,
        id: true,
        titre: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Programmes })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async programmes(
    @common.Param() params: ProgrammesWhereUniqueInput
  ): Promise<Programmes | null> {
    const result = await this.service.programmes({
      where: params,
      select: {
        createdAt: true,
        description: true,
        heureDeDBut: true,
        heureDeFin: true,
        id: true,
        titre: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Programmes })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProgrammes(
    @common.Param() params: ProgrammesWhereUniqueInput,
    @common.Body() data: ProgrammesUpdateInput
  ): Promise<Programmes | null> {
    try {
      return await this.service.updateProgrammes({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          heureDeDBut: true,
          heureDeFin: true,
          id: true,
          titre: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Programmes })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProgrammes(
    @common.Param() params: ProgrammesWhereUniqueInput
  ): Promise<Programmes | null> {
    try {
      return await this.service.deleteProgrammes({
        where: params,
        select: {
          createdAt: true,
          description: true,
          heureDeDBut: true,
          heureDeFin: true,
          id: true,
          titre: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}