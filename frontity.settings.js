const settings = {
  name: "hello-frontity",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
    source: {
      url: "https://test.frontity.org",
      postTypes: [
        {
          type: "destinations",
          endpoint: "destinations",
          archive: "/destinations",
        },
      ],
    },
  },
  packages: [
    {
      name: "my-first-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://test.frontity.org",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
