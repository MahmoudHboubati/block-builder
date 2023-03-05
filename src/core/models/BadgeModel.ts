import { Key } from "react";
import { BaseModel, CvContentTypeEnum, ICvContent } from "./BaseModel";

export class BadgeModel extends BaseModel {
  type: CvContentTypeEnum.Badge;
  text: String;
  outline?: String;

  k: Key;
}

export class CvCardBodyListItemModel extends BaseModel {
  title: string;
  content: string;
  badges?: BadgeModel[];
  type: CvContentTypeEnum.CardBodyListItem;

  k: Key;
}

export class CvCardBodyListModel extends BaseModel {
  items: CvCardBodyListItemModel[];

  type: CvContentTypeEnum.CardBodyList;
}

export class CvCardBodyModel extends BaseModel {
  type: CvContentTypeEnum.CardBody;
  title?: string;
  brief: string;

  separator?: CvCardBodySeparatorEnum;

  content?: BaseModel[];
  k: Key;
}

export class CvCardModel extends BaseModel {
  type: CvContentTypeEnum.Card;
  title: string;
  titleDescription?: string;
  headerTitle?: string;
  headerBadges?: BadgeModel[];
  bodies: CvCardBodyModel[];
}

export class CvProgressModel extends BaseModel {
  title: string;
  value: number;
  color: string;
  type: CvContentTypeEnum.Progress;

  k: Key;
}

export enum CvCardBodySeparatorEnum {
  None = "None",
  Normal = "Normal",
}
