import * as graphql from "@nestjs/graphql";
import { StationExitPaperResolverBase } from "./base/stationExitPaper.resolver.base";
import { StationExitPaper } from "./base/StationExitPaper";
import { StationExitPaperService } from "./stationExitPaper.service";

@graphql.Resolver(() => StationExitPaper)
export class StationExitPaperResolver extends StationExitPaperResolverBase {
  constructor(protected readonly service: StationExitPaperService) {
    super(service);
  }
}
