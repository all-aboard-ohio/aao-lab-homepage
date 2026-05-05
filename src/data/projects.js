export const projects = [
  {
    id: 1,
    title: "Economic Impact Calculator",
    description:
      "An interactive tool that models the economic benefits of passenger rail investment across Ohio — jobs created, GDP uplift, and long-term tax revenue.",
    status: "Development",
    url: "https://github.com/all-aboard-ohio",
    icon: "TrendingUp",
    tags: ["Data Viz", "Economics", "React"],
  },
  {
    id: 2,
    title: "Proposed Route Mapper",
    description:
      "A geospatial mapping application that visualizes proposed and existing rail corridors, station locations, and ridership catchment areas across the state.",
    status: "Planned",
    url: "https://github.com/all-aboard-ohio",
    icon: "Map",
    tags: ["GIS", "Mapping", "Node.js"],
  },
  {
    id: 3,
    title: "News Automation Bot",
    description:
      "An automated pipeline that aggregates rail-related news, legislative updates, and public commentary, delivering daily digests to advocates and policymakers.",
    status: "Development",
    url: "https://github.com/all-aboard-ohio",
    icon: "Newspaper",
    tags: ["Python", "NLP", "Automation"],
  },
  {
    id: 4,
    title: "Member Resource Dashboard",
    description:
      "A centralized portal for All Aboard Ohio members to access campaign materials, talking points, legislative contact info, and event calendars.",
    status: "Live",
    url: "https://allaboardohio.org",
    icon: "LayoutDashboard",
    tags: ["React", "Auth", "CMS"],
  },
];

export const statusColors = {
  Planned: "bg-gray-200 text-gray-700",
  Development: "bg-yellow-100 text-yellow-800 border border-yellow-300",
  Live: "bg-green-100 text-green-800 border border-green-300",
};
