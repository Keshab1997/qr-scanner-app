import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// এটি ঐচ্ছিক কিন্তু ভালো প্র্যাকটিস, ফন্ট লোডিং হ্যান্ডেল করার জন্য
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

// অ্যাপ লোড হওয়ার সময় স্প্ল্যাশ স্ক্রিন দেখানো বন্ধ করে
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // ফন্ট লোড হওয়ার পর স্প্ল্যাশ স্ক্রিন লুকানো
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null; // ফন্ট লোড না হওয়া পর্যন্ত কিছু দেখাবে না
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack>
      {/* প্রধান ট্যাব গ্রুপ। এর জন্য কোনো হেডার দেখাবে না। */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* QR স্ক্যানার স্ক্রিন, যা একটি মোডাল হিসেবে খুলবে। */}
      <Stack.Screen 
        name="qr-scanner" 
        options={{ 
          presentation: 'modal', // এটিকে মোডাল হিসেবে সেট করে
          title: 'Scan QR Code',  // মোডালের উপরে প্রদর্শিত টাইটেল
          headerStyle: {
            backgroundColor: '#192f6a', // হেডারের ব্যাকগ্রাউন্ড কালার
          },
          headerTitleStyle: {
            color: '#fff', // হেডারের টাইটেলের কালার
          },
          headerTintColor: '#fff', // পেছনের বাটনের (back button) কালার
        }} 
      />
    </Stack>
  );
}