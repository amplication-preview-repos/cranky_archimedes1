import * as graphql from "@nestjs/graphql";
import { StationResolverBase } from "./base/station.resolver.base";
import { Station } from "./base/Station";
import { StationService } from "./station.service";

@graphql.Resolver(() => Station)
export class StationResolver extends StationResolverBase {
  constructor(protected readonly service: StationService) {
    super(service);
  }
}
