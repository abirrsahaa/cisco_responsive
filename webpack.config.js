module.exports = {
  // ... other webpack configurations ...

  module: {
    rules: [
      // ... other rules ...

      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "videos/",
            },
          },
        ],
      },
    ],
  },
};
