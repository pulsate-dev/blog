/** @jsx h */

import blog from "deno_blog";

blog({
  title: "Pulsate Blog",
  description: "The Pulsate Project Blog",
  avatar: "https://github.com/pulsate-dev.png",
  avatarClass: "rounded-full",
  author: "Pulsate Project Team",
  links: [
    { title: "GitHub", url: "https://github.com/pulsate-dev" },
    { title: "Email", url: "mailto:info@pulsate.dev" },
  ],
});
