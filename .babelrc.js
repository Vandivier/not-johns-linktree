const prod = process.env.NODE_ENV === "production";

const env = {
  "process.env.NEXT_PUBLIC_ASSET_PREFIX": prod ? "/not-johns-linktree" : "",
};

module.exports = {
  presets: ["next/babel"],
  plugins: [["transform-define", env]],
};
