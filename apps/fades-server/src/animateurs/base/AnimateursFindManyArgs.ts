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
import { AnimateursWhereInput } from "./AnimateursWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AnimateursOrderByInput } from "./AnimateursOrderByInput";

@ArgsType()
class AnimateursFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AnimateursWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AnimateursWhereInput, { nullable: true })
  @Type(() => AnimateursWhereInput)
  where?: AnimateursWhereInput;

  @ApiProperty({
    required: false,
    type: [AnimateursOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AnimateursOrderByInput], { nullable: true })
  @Type(() => AnimateursOrderByInput)
  orderBy?: Array<AnimateursOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AnimateursFindManyArgs as AnimateursFindManyArgs };