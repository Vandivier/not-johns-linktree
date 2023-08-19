const prod = process.env.NODE_ENV === "production";

const env = {
  "process.env.BACKEND_URL": prod ? "/basic-nextjs-portfolio" : "",
};

module.exports = {
  presets: ["next/babel"],
  plugins: [["transform-define", env]],
};
