import {
  JOBS,
  CLAIMS,
  EMPLOYERS,
  NEWS_ROOM,
  HELP_CENTER,
  CONTACT,
} from "./page_links";

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
    enabled: false,
  },
  {
    text: "Contact",
    path: CONTACT,
    enabled: true,
  },
];
