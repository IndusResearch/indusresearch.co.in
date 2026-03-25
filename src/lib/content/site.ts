import { resolve } from "$app/paths";

export const navLinks = [
  { href: resolve("/#about"), label: "About" },
  { href: resolve("/people"), label: "People" },
  { href: resolve("/dashboard"), label: "Dashboard" },
  { href: resolve("/blogs"), label: "Blogs" },
  { href: resolve("/docs"), label: "Docs" },
];

export const communityLinks = [
  // TOOD: Update with the correct links
  // { href: 'https://discord.com', label: 'Discord' },
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  // { href: 'https://x.com', label: 'X' },
  { href: "https://github.com/IndusResearch", label: "GitHub" },
];

const subject = encodeURIComponent(
  "Meeting request: Indus Research consultation",
);
const body = encodeURIComponent(
  [
    "Hello Indus Research team,",
    "",
    "I would like to schedule a short meeting to discuss AI performance and cost optimization.",
    "",
    "Company:",
    "Current AI stack:",
    "Primary cost challenge:",
    "Timeline:",
    "",
    "Thanks.",
  ].join("\n"),
);

// TODO: Update mail id
export const meetingMailto = `mailto:hello@indusresearch.co.in?subject=${subject}&body=${body}`;
