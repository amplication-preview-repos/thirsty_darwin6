import * as graphql from "@nestjs/graphql";
import { RediffusionsResolverBase } from "./base/rediffusions.resolver.base";
import { Rediffusions } from "./base/Rediffusions";
import { RediffusionsService } from "./rediffusions.service";

@graphql.Resolver(() => Rediffusions)
export class RediffusionsResolver extends RediffusionsResolverBase {
  constructor(protected readonly service: RediffusionsService) {
    super(service);
  }
}
