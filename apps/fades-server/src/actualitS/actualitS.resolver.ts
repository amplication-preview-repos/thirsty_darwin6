import * as graphql from "@nestjs/graphql";
import { ActualitSResolverBase } from "./base/actualitS.resolver.base";
import { ActualitS } from "./base/ActualitS";
import { ActualitSService } from "./actualitS.service";

@graphql.Resolver(() => ActualitS)
export class ActualitSResolver extends ActualitSResolverBase {
  constructor(protected readonly service: ActualitSService) {
    super(service);
  }
}
