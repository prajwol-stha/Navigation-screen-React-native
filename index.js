/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './AppX';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';


messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

messaging().getInitialNotification(
    async remoteMessage => {
        console.log('Message received in kill state!', remoteMessage);
      }
)
AppRegistry.registerComponent(appName, () => App);
