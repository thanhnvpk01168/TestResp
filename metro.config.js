const {getDefaultConfig} = require('metro-config');
const {execSync} = require('child_process');

 module.exports = (async () => {
   const {
     resolver: {sourceExts, assetExts},
   } = await getDefaultConfig();
     // # Print Logo
    await execSync(`
    echo ""
    echo "      ██████╗ ███████╗██████╗ ██╗      ██████╗ ██╗   ██╗"
    echo "      ██╔══██╗██╔════╝██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝"
    echo "      ██║  ██║█████╗  ██████╔╝██║     ██║   ██║ ╚████╔╝ "
    echo "      ██║  ██║██╔══╝  ██╔═══╝ ██║     ██║   ██║  ╚██╔╝  "
    echo "      ██████╔╝███████╗██║     ███████╗╚██████╔╝   ██║   "
    echo "      ╚═════╝ ╚══════╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝   "
    echo ""
    `, {stdio: 'inherit'});
   return {
     transformer: {
       babelTransformerPath: require.resolve('react-native-svg-transformer'),
       getTransformOptions: async () => ({
         transform: {
           experimentalImportSupport: false,
           inlineRequires: true,
         },
       }),
     },
     resolver: {
       assetExts: assetExts.filter(ext => ext !== 'svg'),
       sourceExts: [...sourceExts, 'svg'],
     },
   };
 })();
