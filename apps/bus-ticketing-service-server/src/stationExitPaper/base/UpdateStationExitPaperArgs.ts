/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StationExitPaperWhereUniqueInput } from "./StationExitPaperWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { StationExitPaperUpdateInput } from "./StationExitPaperUpdateInput";

@ArgsType()
class UpdateStationExitPaperArgs {
  @ApiProperty({
    required: true,
    type: () => StationExitPaperWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StationExitPaperWhereUniqueInput)
  @Field(() => StationExitPaperWhereUniqueInput, { nullable: false })
  where!: StationExitPaperWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => StationExitPaperUpdateInput,
  })
  @ValidateNested()
  @Type(() => StationExitPaperUpdateInput)
  @Field(() => StationExitPaperUpdateInput, { nullable: false })
  data!: StationExitPaperUpdateInput;
}

export { UpdateStationExitPaperArgs as UpdateStationExitPaperArgs };
