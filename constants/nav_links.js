export const navRoutes = {
  JOBS: "/",
  CLAIMS: "/Claims",
  EMPLOYERS: "/Employers",
  NEWS_ROOM: "/News-Room",
  HELP_CENTER: "/Help-Center",
  CONTACT: "/Contact",
};
const { JOBS, CLAIMS, EMPLOYERS, NEWS_ROOM, HELP_CENTER, CONTACT } = navRoutes;

export const navLinks = [
  {
    text: "Jobs",
    path: JOBS,
    enabled: false,
  },
  {
    text: "Claims",
    path: CLAIMS,
    enabled: false,
  },
  {
    text: "Employers",
    path: EMPLOYERS,
    enabled: false,
  },
  {
    text: "News Room",
    path: NEWS_ROOM,
    enabled: false,
  },
  {
    text: "Help Center",
    path: HELP_CENTER,
    enabled: true,
  },
  {
    text: "Contact",
    path: CONTACT,
    enabled: false,
  },
];
