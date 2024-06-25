/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Bus as PrismaBus,
  Route as PrismaRoute,
  Station as PrismaStation,
} from "@prisma/client";

export class BusServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BusCountArgs, "select">): Promise<number> {
    return this.prisma.bus.count(args);
  }

  async buses(args: Prisma.BusFindManyArgs): Promise<PrismaBus[]> {
    return this.prisma.bus.findMany(args);
  }
  async bus(args: Prisma.BusFindUniqueArgs): Promise<PrismaBus | null> {
    return this.prisma.bus.findUnique(args);
  }
  async createBus(args: Prisma.BusCreateArgs): Promise<PrismaBus> {
    return this.prisma.bus.create(args);
  }
  async updateBus(args: Prisma.BusUpdateArgs): Promise<PrismaBus> {
    return this.prisma.bus.update(args);
  }
  async deleteBus(args: Prisma.BusDeleteArgs): Promise<PrismaBus> {
    return this.prisma.bus.delete(args);
  }

  async getRoute(parentId: string): Promise<PrismaRoute | null> {
    return this.prisma.bus
      .findUnique({
        where: { id: parentId },
      })
      .route();
  }

  async getStation(parentId: string): Promise<PrismaStation | null> {
    return this.prisma.bus
      .findUnique({
        where: { id: parentId },
      })
      .station();
  }
}
