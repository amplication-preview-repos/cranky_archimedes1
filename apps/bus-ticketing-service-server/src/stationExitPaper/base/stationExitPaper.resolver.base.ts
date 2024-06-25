/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { StationExitPaper } from "./StationExitPaper";
import { StationExitPaperCountArgs } from "./StationExitPaperCountArgs";
import { StationExitPaperFindManyArgs } from "./StationExitPaperFindManyArgs";
import { StationExitPaperFindUniqueArgs } from "./StationExitPaperFindUniqueArgs";
import { CreateStationExitPaperArgs } from "./CreateStationExitPaperArgs";
import { UpdateStationExitPaperArgs } from "./UpdateStationExitPaperArgs";
import { DeleteStationExitPaperArgs } from "./DeleteStationExitPaperArgs";
import { Station } from "../../station/base/Station";
import { StationExitPaperService } from "../stationExitPaper.service";
@graphql.Resolver(() => StationExitPaper)
export class StationExitPaperResolverBase {
  constructor(protected readonly service: StationExitPaperService) {}

  async _stationExitPapersMeta(
    @graphql.Args() args: StationExitPaperCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [StationExitPaper])
  async stationExitPapers(
    @graphql.Args() args: StationExitPaperFindManyArgs
  ): Promise<StationExitPaper[]> {
    return this.service.stationExitPapers(args);
  }

  @graphql.Query(() => StationExitPaper, { nullable: true })
  async stationExitPaper(
    @graphql.Args() args: StationExitPaperFindUniqueArgs
  ): Promise<StationExitPaper | null> {
    const result = await this.service.stationExitPaper(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => StationExitPaper)
  async createStationExitPaper(
    @graphql.Args() args: CreateStationExitPaperArgs
  ): Promise<StationExitPaper> {
    return await this.service.createStationExitPaper({
      ...args,
      data: {
        ...args.data,

        station: args.data.station
          ? {
              connect: args.data.station,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => StationExitPaper)
  async updateStationExitPaper(
    @graphql.Args() args: UpdateStationExitPaperArgs
  ): Promise<StationExitPaper | null> {
    try {
      return await this.service.updateStationExitPaper({
        ...args,
        data: {
          ...args.data,

          station: args.data.station
            ? {
                connect: args.data.station,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => StationExitPaper)
  async deleteStationExitPaper(
    @graphql.Args() args: DeleteStationExitPaperArgs
  ): Promise<StationExitPaper | null> {
    try {
      return await this.service.deleteStationExitPaper(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Station, {
    nullable: true,
    name: "station",
  })
  async getStation(
    @graphql.Parent() parent: StationExitPaper
  ): Promise<Station | null> {
    const result = await this.service.getStation(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
