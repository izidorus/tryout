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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { EnumShipmentPartner } from "./EnumShipmentPartner";
import { EnumShipmentStatus } from "./EnumShipmentStatus";

@InputType()
class ShipmentWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  order?: OrderWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumShipmentPartner,
  })
  @IsEnum(EnumShipmentPartner)
  @IsOptional()
  @Field(() => EnumShipmentPartner, {
    nullable: true,
  })
  partner?:
    | "BlueDart"
    | "Delhivery"
    | "Dtdc"
    | "FedEx"
    | "Dhl"
    | "IndiaPost"
    | "Shadowfax"
    | "Xpressbess";

  @ApiProperty({
    required: false,
    enum: EnumShipmentStatus,
  })
  @IsEnum(EnumShipmentStatus)
  @IsOptional()
  @Field(() => EnumShipmentStatus, {
    nullable: true,
  })
  status?:
    | "initiated"
    | "InProgress"
    | "Delivered"
    | "ReturnInProgress"
    | "Returned";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  trackingId?: StringFilter;
}

export { ShipmentWhereInput as ShipmentWhereInput };