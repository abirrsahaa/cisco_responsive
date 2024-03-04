// next.config.js

module.exports = {
  webpack: (config, { isServer }) => {
    // Add a rule for video files
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192, // You can adjust this limit if needed
            fallback: "file-loader",
            publicPath: "/_next/static/", // Path where the files will be served from
            outputPath: `${isServer ? "../" : ""}static/`, // Output path
            name: "[name].[ext]",
          },
        },
      ],
    });

    return config;
  },
};
