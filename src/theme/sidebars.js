module.exports = {
  sidebar: [
    {
      type: "doc",
      id: "intro",
      className: "sidebar-home",
    },
    {
      type: "category",
      label: "API Reference",
      className: "sidebar-api-reference",
      items: [{ type: "autogenerated", dirName: "reference" }],
    },
    // {
    //   type: "category",
    //   label: "Overview",
    //   className: "sidebar-overview",
    //   items: [{ type: "autogenerated", dirName: "guides/getting-started" }],
    // },
    {
      type: "category",
      label: "Quick Starts",
      className: "sidebar-quick-starts",
      items: [{ type: "autogenerated", dirName: "guides/getting-started" }],
    },
    {
      type: "category",
      label: "Tutorials",
      className: "sidebar-tutorials",
      items: [{ type: "autogenerated", dirName: "guides/tutorials" }],
    },
    {
      type: "category",
      label: "Providers",
      className: "sidebar-providers",
      items: [{ type: "autogenerated", dirName: "guides/providers" }],
    },
    {
      type: "category",
      label: "Client Libraries",
      className: "sidebar-client-libraries",
      items: [
        {
          type: "link",
          label: "Go",
          href: "https://github.com/trycourier/courier-go",
        },
        {
          type: "link",
          label: "Java",
          href: "https://github.com/trycourier/courier-java",
        },
        {
          type: "link",
          label: "Node.js",
          href: "https://github.com/trycourier/courier-node",
        },
        {
          type: "link",
          label: "PHP",
          href: "https://github.com/trycourier/courier-php",
        },
        {
          type: "link",
          label: "Python",
          href: "https://github.com/trycourier/courier-python",
        },
        {
          type: "link",
          label: "Ruby",
          href: "https://github.com/trycourier/courier-ruby",
        },
      ],
    },
    {
      type: "category",
      label: "Courier Enterprise",
      className: "sidebar-enterprise",
      items: [{ type: "autogenerated", dirName: "guides/enterprise" }],
    },
  ],
};
