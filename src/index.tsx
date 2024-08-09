import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-sdk-ekyc-lib' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type SdkEkycLibProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'SdkEkycLibView';

export const SdkEkycLibView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<SdkEkycLibProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
