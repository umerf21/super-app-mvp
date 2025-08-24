import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";


export type RootStackParamList = {
  Login:undefined;
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  Notification: undefined;
  MiniApp:{id:string};
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootPageUrlType = Record<
  keyof RootStackParamList,
  keyof RootStackParamList
>;

export const ROOT_PAGE_URL: RootPageUrlType = {
  Login:'Login',
  Home: 'Home',
  Profile:'Profile',
  Settings:'Settings',
  MiniApp:'MiniApp',
  Notification:'Notification',
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
