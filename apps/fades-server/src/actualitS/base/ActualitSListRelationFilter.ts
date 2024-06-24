/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ActualitSWhereInput } from "./ActualitSWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ActualitSListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ActualitSWhereInput,
  })
  @ValidateNested()
  @Type(() => ActualitSWhereInput)
  @IsOptional()
  @Field(() => ActualitSWhereInput, {
    nullable: true,
  })
  every?: ActualitSWhereInput;

  @ApiProperty({
    required: false,
    type: () => ActualitSWhereInput,
  })
  @ValidateNested()
  @Type(() => ActualitSWhereInput)
  @IsOptional()
  @Field(() => ActualitSWhereInput, {
    nullable: true,
  })
  some?: ActualitSWhereInput;

  @ApiProperty({
    required: false,
    type: () => ActualitSWhereInput,
  })
  @ValidateNested()
  @Type(() => ActualitSWhereInput)
  @IsOptional()
  @Field(() => ActualitSWhereInput, {
    nullable: true,
  })
  none?: ActualitSWhereInput;
}
export { ActualitSListRelationFilter as ActualitSListRelationFilter };