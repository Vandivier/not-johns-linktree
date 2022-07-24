const debug = process.env.NODE_ENV !== "production";

module.exports = {
  assetPrefix: !debug ? "/not-johns-linktree/" : "",
  // images: { loader: "imgix" },
  // reactStrictMode: true,
};
