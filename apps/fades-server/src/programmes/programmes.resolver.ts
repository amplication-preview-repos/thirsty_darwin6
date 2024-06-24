import * as graphql from "@nestjs/graphql";
import { ProgrammesResolverBase } from "./base/programmes.resolver.base";
import { Programmes } from "./base/Programmes";
import { ProgrammesService } from "./programmes.service";

@graphql.Resolver(() => Programmes)
export class ProgrammesResolver extends ProgrammesResolverBase {
  constructor(protected readonly service: ProgrammesService) {
    super(service);
  }
}
