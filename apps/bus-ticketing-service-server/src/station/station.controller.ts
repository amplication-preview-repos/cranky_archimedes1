import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StationService } from "./station.service";
import { StationControllerBase } from "./base/station.controller.base";

@swagger.ApiTags("stations")
@common.Controller("stations")
export class StationController extends StationControllerBase {
  constructor(protected readonly service: StationService) {
    super(service);
  }
}
