import { Key } from "react";
import { BaseModel } from "./BaseModel";

export class BadgeModel extends BaseModel {
  text: String;
  outline?: String;
  k: Key;
}

export class ListItemModel extends BaseModel {
  title: string;
  content: string;
  badges?: BadgeModel[];
  k: Key;
}

export class CvCardBodyModel extends BaseModel {
  brief: string;
  list: ListItemModel[];
  k: Key;
}

export class CvCardModel {
  title: string;
  titleDescription: string;
  headerTitle: string;
  headerBadges?: BadgeModel[];
  bodies: CvCardBodyModel[];
}
