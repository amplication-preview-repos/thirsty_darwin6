import * as graphql from "@nestjs/graphql";
import { PisodesResolverBase } from "./base/pisodes.resolver.base";
import { Pisodes } from "./base/Pisodes";
import { PisodesService } from "./pisodes.service";

@graphql.Resolver(() => Pisodes)
export class PisodesResolver extends PisodesResolverBase {
  constructor(protected readonly service: PisodesService) {
    super(service);
  }
}
