// app/(tabs)/index.tsx

import { FontAwesome } from '@expo/vector-icons'; // আইকন ব্যবহারের জন্য
import { LinearGradient } from 'expo-linear-gradient'; // গ্রেডিয়েন্ট ব্যাকগ্রাউন্ডের জন্য
import { Link } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    // গ্রেডিয়েন্ট ব্যাকগ্রাউন্ড
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <View style={styles.header}>
        {/* অ্যাপের লোগো */}
        <Image 
          source={require('../../assets/images/logo.png')} 
          style={styles.logo} 
        />
        <Text style={styles.title}>QR SwiftScan</Text>
        <Text style={styles.subtitle}>The quickest and simplest QR scanner</Text>
      </View>

      {/* QR স্ক্যানার খোলার জন্য বাটন */}
      <Link href="/qr-scanner" asChild>
        <TouchableOpacity style={styles.scanButton}>
          <FontAwesome name="qrcode" size={24} color="white" />
          <Text style={styles.scanButtonText}>Scan QR Code</Text>
        </TouchableOpacity>
      </Link>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Made with ❤️ in React Native</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between', // এলিমেন্টগুলোকে সমানভাবে ছড়িয়ে দেবে
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 80, // উপরের দিকে কিছুটা স্পেস
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e0e0',
    textAlign: 'center',
  },
  scanButton: {
    flexDirection: 'row', // আইকন এবং টেক্সটকে পাশাপাশি রাখতে
    alignItems: 'center',
    backgroundColor: '#ff6347', // একটি আকর্ষণীয় রঙ
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30, // গোলাকার বাটন
    // হালকা শ্যাডো
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8, // Android-এর জন্য শ্যাডো
  },
  scanButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10, // আইকন থেকে টেক্সটের দূরত্ব
  },
  footer: {
    marginBottom: 20, // নিচের দিকে কিছুটা স্পেস
  },
  footerText: {
    fontSize: 14,
    color: '#a0a0a0',
  },
});