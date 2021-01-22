// module.exports = {
//   transformer: {
//     assetPlugins: ['expo-asset/tools/hashAssetFiles'],
//   },
// };
module.exports = {
  resolver: {
    sourceExts: ['jsx','js', 'ts', 'tsx'] // add here
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        assetPlugins: ['expo-asset/tools/hashAssetFiles'],
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};