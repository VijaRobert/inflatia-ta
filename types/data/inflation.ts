import { TypeProductPrice } from "./product";

export type TypeInflation = TypeProductPrice & { change: number };

// export interface TypeInflation extends TypeProductPrice {
//   monthlyIncrease: number;
// }
