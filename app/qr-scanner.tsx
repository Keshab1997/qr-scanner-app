// app/qr-scanner.tsx

import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router'; // useRouter ব্যবহার করে পেছনে যাওয়ার জন্য
import React, { useState } from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function QRScannerModal() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState<boolean>(false);
  const router = useRouter(); // পেছনে যাওয়ার জন্য router hook

  // ক্যামেরা পারমিশন না থাকলে এই ফাংশনটি কল হবে
  const handleRequestPermission = async () => {
    const status = await requestPermission();
    if (!status.granted) {
        alert('ক্যামেরা ব্যবহারের অনুমতি প্রয়োজন।');
    }
  };

  // প্রথমবার রেন্ডার হওয়ার সময় পারমিশন চেক করা
  if (!permission) {
    requestPermission();
    return <View />;
  }

  // যদি পারমিশন না দেওয়া থাকে
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', marginBottom: 10 }}>
          QR কোড স্ক্যান করার জন্য ক্যামেরা প্রয়োজন।
        </Text>
        <Button onPress={handleRequestPermission} title="অনুমতি দিন" />
        <View style={{marginTop: 20}}>
            <Button title="Go Back" onPress={() => router.back()} color="gray" />
        </View>
      </View>
    );
  }

  // QR কোড স্ক্যান হলে
  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    alert(`স্ক্যান করা হয়েছে: ${data}`);
    // যদি লিঙ্ক হয়, তাহলে খোলার অপশন দেখানো যেতে পারে
    if (data.startsWith('http')) {
      Linking.openURL(data);
    }
    // স্ক্যান হওয়ার পর স্বয়ংক্রিয়ভাবে মডাল বন্ধ হয়ে যাবে
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan a QR Code</Text>
      <View style={styles.cameraContainer}>
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ['qr'],
          }}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
      <Button title="Cancel" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cameraContainer: {
    width: 300,
    height: 300,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 40,
  },
});