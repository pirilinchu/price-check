const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // Adjust these paths to match your GitHub repository name
  basePath: isProd ? "/price-check" : "",
  assetPrefix: isProd ? "/price-check/" : "",
  output: "export",
};

export default nextConfig;
