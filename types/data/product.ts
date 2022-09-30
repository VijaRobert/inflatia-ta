//The Type of the product used inside the Database.
export type TypeProduct = {
  //Identification Data
  name: string;
  type: string; //Alcohol
  category: string; //Beverage
  brand: string; //Tuborg
  measurement?: {
    unit: "L" | "KG" | "M";
    value: number;
  };

  //Prices Data
  prices: TypeProductPrice[];
};

export type TypeProductPrice = {
  date: string; //Always in format of YY-MM-DD
  value: number;
  source?: TypeProductPriceSource;
};

export type TypeProductPriceSource = {
  value: string;
  description?: string;
  label: string;
} & (
  | {
      type: "image";
    }
  | {
      type: "link";
    }
);
