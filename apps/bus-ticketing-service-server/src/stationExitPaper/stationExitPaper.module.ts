import { Module } from "@nestjs/common";
import { StationExitPaperModuleBase } from "./base/stationExitPaper.module.base";
import { StationExitPaperService } from "./stationExitPaper.service";
import { StationExitPaperController } from "./stationExitPaper.controller";
import { StationExitPaperResolver } from "./stationExitPaper.resolver";

@Module({
  imports: [StationExitPaperModuleBase],
  controllers: [StationExitPaperController],
  providers: [StationExitPaperService, StationExitPaperResolver],
  exports: [StationExitPaperService],
})
export class StationExitPaperModule {}
