module.exports = {
  guidesSidebar: [
    {
      type: "category",
      label: "Documentation",
      collapsible: false,
      items: [
        "intro",
        {
          type: "link",
          label: "API Reference",
          href: "/reference",
        },
        {
          type: "link",
          label: "Product Updates",
          href: "https://updates.courier.com",
        },
        {
          type: "link",
          label: "Service Status",
          href: "https://status.courier.com",
        },
      ],
    },
    {
      type: "autogenerated",
      dirName: "guides",
    },
    {
      type: "category",
      label: "Help Center",
      collapsible: false,
      items: [
        {
          type: "link",
          label: "Home",
          href: "https://help.courier.com",
        },
        {
          type: "link",
          label: "Setting up Courier",
          href: "https://help.courier.com/en/collections/2430695-setting-up-courier",
        },
        {
          type: "link",
          label: "Notification Designer",
          href: "https://help.courier.com/en/collections/2413649-notification-designer",
        },
        {
          type: "link",
          label: "Automations",
          href: "https://help.courier.com/en/collections/2899240-automations",
        },
        {
          type: "link",
          label: "In App",
          href: "https://help.courier.com/en/collections/3064188-courier-in-app",
        },
        {
          type: "link",
          label: "Channels & Integrations",
          href: "https://help.courier.com/en/collections/2413657-channels-integrations",
        },
        {
          type: "link",
          label: "Rest API, SDKs and Profile Data",
          href: "https://help.courier.com/en/collections/2413880-rest-api-sdks-and-profile-data",
        },
        {
          type: "link",
          label: "Notification Logs & Metrics",
          href: "https://help.courier.com/en/collections/2413650-notification-logs-metrics",
        },
      ],
    },
    {
      type: "category",
      label: "Client Libraries",
      collapsible: false,
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
  ],
  referenceSidebar: [
    {
      type: "category",
      label: "Courier API Reference",
      collapsible: false,
      items: [{ type: "autogenerated", dirName: "reference" }],
    },
  ],
};
