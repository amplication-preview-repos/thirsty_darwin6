import * as graphql from "@nestjs/graphql";
import { AnimateursResolverBase } from "./base/animateurs.resolver.base";
import { Animateurs } from "./base/Animateurs";
import { AnimateursService } from "./animateurs.service";

@graphql.Resolver(() => Animateurs)
export class AnimateursResolver extends AnimateursResolverBase {
  constructor(protected readonly service: AnimateursService) {
    super(service);
  }
}
