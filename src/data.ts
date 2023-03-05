import { CvCardModel } from "./core/models/BadgeModel";
import { CvContentTypeEnum } from "./core/models/BaseModel";

const svuCard: any = {
  title: "SVU",
  titleDescription: "Syrian Virtual University",
  headerTitle: "Bachelor Information Technology",
  headerBadges: [
    {
      text: "01/2008 - 8/2012, Damascus Syria",
      k: 1,
      type: CvContentTypeEnum.Badge,
    },
  ],
  bodies: [
    {
      brief:
        "Completed 4 years of computer technology and science plus PM involved content",
      content: [
        {
          items: [
            {
              title: "Dynamic Studying System",
              content:
                "graduation project consist of two parts, a system which generate ASP MVC stack pages from database tables (including all the relations), using ASP MVC 3 and Oracle database, the other system is the school kind of system which is build using the first module to proof the development performance it provides.",
              k: 1,
              type: CvContentTypeEnum.CardBodyListItem,
            },
          ],
          type: CvContentTypeEnum.CardBodyList,
        },
      ],
      k: 1,
      type: CvContentTypeEnum.CardBody,
    },
  ],
  type: CvContentTypeEnum.Card,
};

const computeScienceCard: any = {
  title: "Computer Science",
  bodies: [
    {
      content: [
        {
          items: [
            {
              title: "Strategy Game",
              content:
                "developed on C++ Visual Studio .NET. Got 87% of the mark, the game depends on a gaming engines using DirectX and some other libraries to render the objects, textures, world and interact with sounds.",
              k: 1,
              type: CvContentTypeEnum.CardBodyListItem,
            },
          ],
          type: CvContentTypeEnum.CardBodyList,
        },
      ],
      k: 1,
      type: CvContentTypeEnum.CardBody,
    },
  ],
  type: CvContentTypeEnum.Card,
};

export const educations = [svuCard, computeScienceCard];

const moccae: any = {
  title: "MOCCAE",
  titleDescription: "Ministry Of Climate Change And Environment - Raqmiyat",
  headerTitle: "Senior Technical Consultant",
  headerBadges: [
    {
      text: "07/2021 - Present, Dubai, UAE",
      k: 1,
      type: CvContentTypeEnum.Badge,
    },
  ],
  bodies: [
    {
      brief:
        "I was employed to be in the decommissioning process for 130 running services, migrate the data to the new system in the new database structure, and provide required dependencies from the old system for the new one",
      content: [
        {
          items: [
            {
              title: "Digital Services",
              content:
                "I created this solution and was managed by myself independent of other developers, the purpose of this project is to migrate data from old legacy web application to the new system",
              badges: [
                {
                  text: "Angular 13",
                  outline: "50%",
                  k: 1,
                  type: CvContentTypeEnum.Badge,
                },
                {
                  text: ".Net Core 5",
                  outline: "50%",
                  k: 2,
                  type: CvContentTypeEnum.Badge,
                },
                {
                  text: "Entity Framework",
                  k: 3,
                  type: CvContentTypeEnum.Badge,
                },
                { text: "Clean Code", k: 4, type: CvContentTypeEnum.Badge },
                {
                  text: "Responsive Design",
                  k: 5,
                  type: CvContentTypeEnum.Badge,
                },
                {
                  text: "Government Indicators",
                  k: 6,
                  type: CvContentTypeEnum.Badge,
                },
              ],
              k: 1,
              type: CvContentTypeEnum.CardBodyListItem,
            },
            {
              title: "Data Migration",
              content:
                "is a modern web application has independent attachment, workflow, fees configuration and a solid basement to deliver ministry services with less development effort",
              badges: [
                {
                  text: "C#",
                  outline: "50%",
                  k: 1,
                  type: CvContentTypeEnum.Badge,
                },
                { text: "EDMX", k: 2, type: CvContentTypeEnum.Badge },
                {
                  text: "Api Controllers",
                  k: 3,
                  type: CvContentTypeEnum.Badge,
                },
              ],
              k: 2,
              type: CvContentTypeEnum.CardBodyListItem,
            },
            {
              title: "EServices",
              content:
                "the legacy web application, the ministry used it for 5+ years and the plan is to decommission",
              badges: [
                {
                  text: "ASP Forms",
                  outline: "50%",
                  k: 1,
                  type: CvContentTypeEnum.Badge,
                },
                {
                  text: "SQL Server",
                  outline: "50%",
                  k: 2,
                  type: CvContentTypeEnum.Badge,
                },
                { text: "WCF", k: 3, type: CvContentTypeEnum.Badge },
              ],
              k: 3,
              type: CvContentTypeEnum.CardBodyListItem,
            },
          ],
          type: CvContentTypeEnum.CardBodyList,
        },
      ],
      k: 1,
      type: CvContentTypeEnum.CardBody,
    },
  ],
  type: CvContentTypeEnum.Card,
};

export const experiences = [moccae];

export const skills = {
  title: "Coding",
  headerTitle: "Information Technology",
  headerBadges: [
    {
      text: "01/2005 - 12/2007, Damascus Syria",
      k: 1,
      type: CvContentTypeEnum.Badge,
    },
  ],
  bodies: [
    {
      content: [
        {
          title: "Strategy Game",
          value: "80",
          color: "success",
          k: 1,
          type: CvContentTypeEnum.Progress,
        },
      ],
      k: 1,
      type: CvContentTypeEnum.CardBody,
    },
  ],
  type: CvContentTypeEnum.Card,
};
