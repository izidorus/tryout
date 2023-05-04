import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ShipmentCreateInput = {
  order: OrderWhereUniqueInput;
  partner:
    | "BlueDart"
    | "Delhivery"
    | "Dtdc"
    | "FedEx"
    | "Dhl"
    | "IndiaPost"
    | "Shadowfax"
    | "Xpressbess";
  status:
    | "initiated"
    | "InProgress"
    | "Delivered"
    | "ReturnInProgress"
    | "Returned";
  trackingId: string;
};
