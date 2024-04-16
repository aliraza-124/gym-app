// // /**
// //  * @format
// //  */

// // import {AppRegistry} from 'react-native';
// // import App from './app/App';
// // import {name as appName} from './app.json';

// // AppRegistry.registerComponent(appName, () => App);

// import * as React from 'react';
// import {AppRegistry} from 'react-native';
// import {PaperProvider} from 'react-native-paper';
// import {name as appName} from './app.json';
// import AppNavigation from './app/navigators/index.js';
// import App from './app/App.tsx';

// export default function Main() {
//   return (
//     <PaperProvider>
//       <App />
//     </PaperProvider>
//   );
// }

// AppRegistry.registerComponent(appName, () => Main);

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
