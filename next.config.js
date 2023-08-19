/**
 * note: this file complains `Parsing error: Cannot find module 'next/babel'`
 * but we can safely ignore it
 */

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  assetPrefix: debug ? "": "/not-johns-linktree/",
  images: {
    unoptimized: true,
  },
};
