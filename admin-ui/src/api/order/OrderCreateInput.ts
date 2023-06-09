import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ShipmentCreateNestedManyWithoutOrdersInput } from "./ShipmentCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  shipments?: ShipmentCreateNestedManyWithoutOrdersInput;
  status?: "Draft" | "Confirmed" | "Shipped" | "Delivered" | null;
  totalPrice?: number | null;
};
