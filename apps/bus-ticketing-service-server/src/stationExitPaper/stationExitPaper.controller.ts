import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StationExitPaperService } from "./stationExitPaper.service";
import { StationExitPaperControllerBase } from "./base/stationExitPaper.controller.base";

@swagger.ApiTags("stationExitPapers")
@common.Controller("stationExitPapers")
export class StationExitPaperController extends StationExitPaperControllerBase {
  constructor(protected readonly service: StationExitPaperService) {
    super(service);
  }
}
