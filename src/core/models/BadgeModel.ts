import { Key } from "react";
import { BaseModel } from "./BaseModel";

export class BadgeModel extends BaseModel {
  text: String;
  outline?: String;

  k: Key;
}

export class CvCardBodyListItemModel extends BaseModel {
  title: string;
  content: string;
  badges?: BadgeModel[];

  k: Key;
}

export class CvCardBodyListModel {}

export class CvCardBodyModel extends BaseModel {
  title?: string;
  brief: string;
  list: CvCardBodyListItemModel[];
  separator?: CvCardBodySeparatorEnum;

  content?: any;
  k: Key;
}

export class CvCardModel {
  title: string;
  titleDescription?: string;
  headerTitle: string;
  headerBadges?: BadgeModel[];
  bodies: CvCardBodyModel[];
}

export enum CvCardBodySeparatorEnum {
  None = "None",
  Normal = "Normal",
}
