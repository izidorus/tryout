import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ShipmentUpdateManyWithoutOrdersInput } from "./ShipmentUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  shipments?: ShipmentUpdateManyWithoutOrdersInput;
  status?: "Draft" | "Confirmed" | "Shipped" | "Delivered" | null;
  totalPrice?: number | null;
};
