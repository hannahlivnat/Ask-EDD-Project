import {
  ONLINE_SERVICES,
  LABOR_MARKET_INFORMATION,
  FORMS_PUBLICATIONS,
  INFORMATION_GENERAL,
  REGISTER_VOTE,
  CA_CENSUS,
  EARNED_INCOME_TAX_CREDIT,
  COVID_UPDATES,
  GOVERNOR,
  LWDA_SECRETARY,
  ABOUT_EDD,
  USAGE_CONDITIONS,
  ACCESSIBILITY,
  PRIVACY_POLICY,
  HELP_CENTER,
  CONTACT,
} from "./page_links";

export const footerLinks = {
  socialLinks: [
    {
      iconPath: "/assets/icons/twitter-icon.svg",
      url: "",
    },
    {
      iconPath: "/assets/icons/facebook-icon.svg",
      url: "",
    },
    {
      iconPath: "/assets/icons/linkedin-icon.svg",
      url: "",
    },
  ],
  resources: [
    {
      label: "Online Services",
      url: ONLINE_SERVICES,
    },
    {
      label: "Labor Market Information",
      url: LABOR_MARKET_INFORMATION,
    },
    {
      label: "Forms & Publications",
      url: FORMS_PUBLICATIONS,
    },
    {
      label: "Información General en Español",
      url: INFORMATION_GENERAL,
    },
  ],
  statePrograms: [
    {
      label: "Register to Vote",
      url: REGISTER_VOTE,
    },
    {
      label: "CA Census 2020",
      url: CA_CENSUS,
    },
    {
      label: "Earned Income Tax Credit",
      url: EARNED_INCOME_TAX_CREDIT,
    },
    {
      label: "Covid-19 Public Health Updates",
      url: COVID_UPDATES,
    },
  ],
  leadership: [
    {
      label: "Governor",
      url: GOVERNOR,
    },
    {
      label: "LWDA Secretary",
      url: LWDA_SECRETARY,
    },
  ],
  copyrightLinks: [
    {
      label: "About EDD",
      url: ABOUT_EDD,
    },
    {
      label: "Help Center",
      url: HELP_CENTER,
    },
    {
      label: "Contact",
      url: CONTACT,
    },
    {
      label: "Conditions of Use",
      url: USAGE_CONDITIONS,
    },
    {
      label: "Privacy Policy",
      url: PRIVACY_POLICY,
    },
    {
      label: "Accessibility",
      url: ACCESSIBILITY,
    },
  ],
};
