// app/(tabs)/_layout.tsx

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#4c669f',
        headerShown: false,
      }}
    >
      {/* শুধুমাত্র হোম স্ক্রিনের ট্যাবটি থাকবে */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      
      {/* নিশ্চিত করুন যে এখানে explore ট্যাবের জন্য কোনো কোড নেই */}
      
    </Tabs>
  );
}