export type DataBulletType = {
  date: string;
  value: any;
  source?: SourceType;
};

export type SourceType = {
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
