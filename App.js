
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import Home from "./component/Home";
import GamePlay from "./component/GamePlay";
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [loaded, error] = useFonts({
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home"
                        component={Home}
                        options={{ title: 'Home' }}
          />
            <Stack.Screen name="GamePlay"
                          component={GamePlay}
                          options={{ title: 'GamePlay' }}
            />
        </Stack.Navigator>
      </NavigationContainer>

  );
}

