import {
  BadgeModel,
  CvCardBodyListItemModel,
  CvCardBodyListModel,
  CvCardBodyModel,
  CvCardModel,
  CvProgressModel,
} from "../core/models/BadgeModel";
import {
  BaseModel,
  CvContentTypeEnum,
  ICvContent,
} from "../core/models/BaseModel";
import { educations, experiences } from "../data";

export class CvCardMapper {
  public mapEducations(): CvCardModel[] {
    const cards: CvCardModel[] = educations.map((e) => {
      const result: CvCardModel = {
        bodies: this.mapCvCardBodies(e.bodies),
        headerTitle: e.headerTitle,
        title: e.title,
        headerBadges: this.mapBadges(e.headerBadges),
        titleDescription: e.titleDescription,
        type: CvContentTypeEnum.Card,
      };

      return result;
    });

    return cards;
  }

  public mapExperiences(): CvCardModel[] {
    const cards: CvCardModel[] = experiences.map((e) => {
      const result: CvCardModel = {
        bodies: this.mapCvCardBodies(e.bodies),
        headerTitle: e.headerTitle,
        title: e.title,
        headerBadges: this.mapBadges(e.headerBadges),
        titleDescription: e.titleDescription,
        type: CvContentTypeEnum.Card,
      };

      return result;
    });

    return cards;
  }

  private mapBadges(badges: BadgeModel[]): BadgeModel[] {
    if (badges) {
      return badges.map((h) => {
        const result: BadgeModel = {
          k: h.k,
          text: h.text,
          outline: h.outline,
          type: CvContentTypeEnum.Badge,
        };

        return result;
      });
    }

    return null;
  }

  private mapCvCardBodies(bodies: CvCardBodyModel[]): CvCardBodyModel[] {
    if (bodies) {
      return bodies.map((b) => {
        const result: CvCardBodyModel = {
          brief: b.brief,
          k: b.k,
          content: this.mapContent(b.content),
          separator: b.separator,
          title: b.title,
          type: CvContentTypeEnum.CardBody,
        };

        return result;
      });
    }

    return null;
  }

  private mapContent(content: ICvContent[]): BaseModel[] {
    if (content) {
      return content.map((c) => {
        if (c.type == CvContentTypeEnum.CardBodyListItem) {
          return this.mapCardBodyListItem(c as CvCardBodyListItemModel);
        } else if (c.type == CvContentTypeEnum.Progress) {
          return this.mapProgress(c as CvProgressModel);
        } else if (c.type == CvContentTypeEnum.CardBodyList) {
          return this.mapCardBodyList(c as CvCardBodyListModel);
        }
      });
    }

    return null;
  }
  private mapCardBodyList(list: CvCardBodyListModel): CvCardBodyListModel {
    if (list) {
      const result = new CvCardBodyListModel();

      result.type = CvContentTypeEnum.CardBodyList;

      if (list.items) {
        result.items = list.items.map((i) => this.mapCardBodyListItem(i));
      }

      return result;
    }

    return null;
  }

  private mapProgress(c: CvProgressModel) {
    const result = new CvProgressModel();

    result.color = c.color;
    result.title = c.title;
    result.type = c.type;
    result.value = c.value;

    return result;
  }

  private mapCardBodyListItem(c: CvCardBodyListItemModel) {
    const result = new CvCardBodyListItemModel();

    result.content = c.content;
    result.k = c.k;
    result.title = c.title;
    result.badges = this.mapBadges(c.badges);

    return result;
  }
}
