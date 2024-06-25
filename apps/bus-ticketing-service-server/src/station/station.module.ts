import { Module } from "@nestjs/common";
import { StationModuleBase } from "./base/station.module.base";
import { StationService } from "./station.service";
import { StationController } from "./station.controller";
import { StationResolver } from "./station.resolver";

@Module({
  imports: [StationModuleBase],
  controllers: [StationController],
  providers: [StationService, StationResolver],
  exports: [StationService],
})
export class StationModule {}
