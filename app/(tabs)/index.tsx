// app/(tabs)/index.tsx

import { Link } from 'expo-router'; // Link ইম্পোর্ট করুন
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.subtitle}>Press the button below to scan a QR code.</Text>

      {/* QR স্ক্যানার খোলার জন্য বাটন */}
      <Link href="/qr-scanner" asChild>
        <Button title="Open QR Scanner" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20, // এলিমেন্টগুলোর মধ্যে স্পেস
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
});