export interface ICvContent {
  type: CvContentTypeEnum;
}

export abstract class BaseModel implements ICvContent {
  abstract type: CvContentTypeEnum;
}

export enum CvContentTypeEnum {
  ListItem = "ListItem",
  Progress = "Progress",
  Badge = "Badge",
  CardBody = "CardBody",
  CardBodyListItem = "CardBodyListItem",
  CardBodyList = "CardBodyList",
  Card = "Card",
}
