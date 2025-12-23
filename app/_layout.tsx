// app/_layout.tsx

import { Stack } from 'expo-router';

// ... (আপনার ফাইলের অন্যান্য import statement এখানে থাকবে)

export default function RootLayout() {
  // ... (আপনার ফাইলেরডিফল্ট কোড এখানে থাকবে)

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack>
      {/* এই স্ক্রিনটি আপনার ট্যাবগুলোকে দেখাবে */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      {/* এখানে আমাদের নতুন Modal স্ক্রিনটি যোগ করুন */}
      <Stack.Screen 
        name="qr-scanner" 
        options={{ 
          presentation: 'modal', // এটাই মূল অংশ, যা এটাকে Modal বানাবে
          title: 'Scan QR Code'   // Modal এর উপরে টাইটেল দেখাবে
        }} 
      />
      
      {/* আপনার প্রজেক্টের modal.tsx ফাইলটিও এখানে থাকতে পারে */}
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  );
}