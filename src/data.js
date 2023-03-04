const svuCard = {
  title: "SVU",
  titleDescription: "Syrian Virtual University",
  headerTitle: "Bachelor Information Technology",
  headerBadges: [
    {
      content: "01/2008 - 8/2012, Damascus Syria",
    },
  ],
  body: {
    brief:
      "Completed 4 years of computer technology and science plus PM involved content",
    list: [
      {
        title: "Dynamic Studying System",
        content:
          "graduation project consist of two parts, a system which generate ASP MVC stack pages from database tables (including all the relations), using ASP MVC 3 and Oracle database, the other system is the school kind of system which is build using the first module to proof the development performance it provides.",
      },
    ],
  },
};

const computeScienceCard = {
  title: "Computer Science",
  titleDescription: "Palestine Institute",
  headerTitle: "Information Technology",
  headerBadges: [
    {
      content: "01/2005 - 12/2007, Damascus Syria",
    },
  ],
  body: {
    brief: "Completed 2 years of computer science",
    list: [
      {
        title: "Strategy Game",
        content:
          "developed on C++ Visual Studio .NET. Got 87% of the mark, the game depends on a gaming engines using DirectX and some other libraries to render the objects, textures, world and interact with sounds.",
      },
    ],
  },
};

export const educations = [svuCard, computeScienceCard];

const moccaeCard = {
  title: "MOCCAE",
  titleDescription: "Ministry Of Climate Change And Environment - Raqmiyat",
  headerTitle: "Senior Technical Consultant",
  headerBadges: [
    {
      content: "07/2021 - Present, Dubai, UAE",
    },
  ],
  body: {
    brief:
      "I was employed to be in the decommissioning process for 130 running services, migrate the data to the new system in the new database structure, and provide required dependencies from the old system for the new one",
    list: [
      {
        title: "Digital Services",
        content:
          "I created this solution and was managed by myself independent of other developers, the purpose of this project is to migrate data from old legacy web application to the new system",
        badges: [
          { text: "Angular 13", outline: "50%" },
          { text: ".Net Core 5", outline: "50%" },
          { text: "Entity Framework" },
          { text: "Clean Code" },
          { text: "Responsive Design" },
          { text: "Government Indicators" },
        ],
      },
      {
        title: "Data Migration",
        content:
          "is a modern web application has independent attachment, workflow, fees configuration and a solid basement to deliver ministry services with less development effort",
        badges: [
          { text: "C#", outline: "50%" },
          { text: "EDMX" },
          { text: "Api Controllers" },
        ],
      },
      {
        title: "EServices",
        content:
          "the legacy web application, the ministry used it for 5+ years and the plan is to decommission",
        badges: [
          { text: "ASP Forms", outline: "50%" },
          { text: "SQL Server", outline: "50%" },
          { text: "WCF" },
        ],
      },
    ],
  },
};

export const experiences = [moccaeCard];
