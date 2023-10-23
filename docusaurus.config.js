// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const math = require("remark-math");
const katex = require("rehype-katex");

const lightCodeTheme = require("prism-react-renderer/themes/shadesOfPurple");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "NeoHaskell",
  tagline: "A Haskell dialect to think less and do more",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://neohaskell.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "neohaskell", // Usually your GitHub org/user name.
  projectName: "neohaskell", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/neohaskell/neohaskell.github.io/tree/main/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          path: "blog/nhep/nhep",
          exclude: ["README.md"],
          sortPosts: "ascending",
          blogTitle: "NHEP",
          blogDescription: "NeoHaskell Evolution Proposals",
          blogSidebarTitle: "Proposals Index",
          blogSidebarCount: "ALL",
          editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
            `https://github.com/neohaskell/nhep/edit/main/nhep/${blogPath}`,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/neohaskell-social.png",
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "NeoHaskell",
        logo: {
          alt: "NeoHaskell Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            to: "blog",
            label: "Evolution Proposals",
            position: "left",
          },
          {
            href: "https://github.com/neohaskell/",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://discord.com/invite/wDj3UYzec8",
            label: "Discord",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Get Started",
                to: "/docs/docs-intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/wDj3UYzec8",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/neohaskell",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/neohaskell",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NeoHaskell contributors`,
      },
      prism: {
        theme: lightCodeTheme,
        additionalLanguages: ["haskell", "powershell"],
        defaultLanguage: "haskell",
      },
    }),
};

module.exports = config;
