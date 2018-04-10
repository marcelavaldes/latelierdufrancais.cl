module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  siteTitle: "L'atelier du Français", // Site title.
  siteTitleAlt: "latelierdufrancais.cl", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://www.latelierdufrancais.cl", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Somos una comunidad en torno a la lengua y cultura francesa. Estamos en Talca y San Clemente.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "148214869193038", // FB Application ID for using app insights
  googleAnalyticsID: "UA-78034545-3", // GA tracking ID.
  //disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: "Aprende", // Default category for posts.
  userName: "L'atelier du Français", // Username to display in the author segment.
  userTwitter: "latelierdufrancais", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Talca, Chile", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Facebook",
      url: "https://facebook.com/latelierdufrancais",
      iconClassName: "fa fa-facebook"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/latelierdufrancais",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:bonjour@latelierdufrancais.cl",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. L'atelier du Français", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
