const debug = process.env.NODE_ENV !== "production";

module.exports = {
  assetPrefix: !debug ? "/basic-nextjs-portfolio/" : "",
  // images: { loader: "imgix" },
  // reactStrictMode: true,
};
