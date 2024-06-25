import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StationExitPaperServiceBase } from "./base/stationExitPaper.service.base";

@Injectable()
export class StationExitPaperService extends StationExitPaperServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
