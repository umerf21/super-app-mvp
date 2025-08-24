// src/navigation/MiniAppLoader.tsx
import React, { Suspense } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { MINI_APPS } from "../miniapp";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header/Header";

export default function MiniAppLoader() {
  const route = useRoute<RouteProp<{ params: { id: string } }, "params">>();
  const { id } = route.params;
  const navigation  = useNavigation()

  const app = MINI_APPS.find((a) => a.id === id);
  if (!app) return <></>;

  const Component = React.lazy(app.load);
  return (
    <Suspense
      fallback={
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator />
          <Text>Loading {app.title}...</Text>
        </View>
      }
    >
       <SafeAreaView style={{flex:1, marginTop:20}} edges={['top', 'left', 'right']}>
        <Header
                title={app.title}
                showBack={true}
                onBack={() => navigation.goBack()}
                insideNestedStack={true}
              />
      <Component />
      </SafeAreaView> 
    </Suspense>
  );
}
