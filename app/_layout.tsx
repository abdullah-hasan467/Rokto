import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerShown: false,
    headerTitleAlign: 'center',
    headerLargeTitle: true,
    headerStyle: {
      backgroundColor: 'white', // Colorful header
    },
    headerTintColor: 'black', // Text/icon color
    headerTitleStyle: {
      fontWeight: 'normal', // Title font weight
    },
  }}>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
    
   
    </Stack>;
    }
