import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <View style={styles.splash}>
        <StatusBar barStyle="light-content" backgroundColor="#050505" />

        <View style={styles.logoCircle}>
          <Text style={styles.logoIcon}>◆</Text>
        </View>

        <Text style={styles.brand}>Almasa Security</Text>

        <View style={styles.goldLine} />

        <Text style={styles.slogan}>أمانك مسؤوليتنا</Text>

        <Text style={styles.subtitle}>
          حلول أمنية تحمي ما يهمك
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#050505" />

      <View style={styles.header}>
        <View style={styles.smallLogo}>
          <Text style={styles.smallLogoText}>◆</Text>
        </View>

        <Text style={styles.title}>Almasa Security</Text>

        <Text style={styles.headerSlogan}>
          أمانك مسؤوليتنا
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.welcome}>مرحباً بك</Text>

        <Text style={styles.choose}>
          اختر نوع الدخول للمتابعة
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonIcon}>👤</Text>

          <View>
            <Text style={styles.buttonTitle}>
              دخول العميل
            </Text>

            <Text style={styles.buttonSub}>
              الطلبات والصيانة والمتابعة
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonIcon}>🔐</Text>

          <View>
            <Text style={styles.buttonTitle}>
              دخول الإدارة
            </Text>

            <Text style={styles.buttonSub}>
              إدارة العملاء والطلبات والصيانة
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        Almasa Security © 2026
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#050505',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  logoCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: '#D4AF37',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },

  logoIcon: {
    color: '#D4AF37',
    fontSize: 42,
  },

  brand: {
    color: '#D4AF37',
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: 1,
  },

  goldLine: {
    width: 75,
    height: 2,
    backgroundColor: '#D4AF37',
    marginVertical: 18,
  },

  slogan: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '600',
    textAlign: 'center',
  },

  subtitle: {
    color: '#999999',
    fontSize: 15,
    marginTop: 12,
  },

  container: {
    flex: 1,
    backgroundColor: '#050505',
    padding: 24,
    justifyContent: 'space-between',
  },

  header: {
    alignItems: 'center',
    marginTop: 55,
  },

  smallLogo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1.5,
    borderColor: '#D4AF37',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },

  smallLogoText: {
    color: '#D4AF37',
    fontSize: 25,
  },

  title: {
    color: '#D4AF37',
    fontSize: 27,
    fontWeight: '700',
  },

  headerSlogan: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 6,
  },

  card: {
    backgroundColor: '#111111',
    borderWidth: 1,
    borderColor: '#292929',
    borderRadius: 22,
    padding: 22,
  },

  welcome: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
  },

  choose: {
    color: '#999999',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 7,
    marginBottom: 20,
  },

  button: {
    minHeight: 76,
    borderWidth: 1,
    borderColor: '#8D7420',
    borderRadius: 15,
    marginTop: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonIcon: {
    fontSize: 25,
    marginRight: 15,
  },

  buttonTitle: {
    color: '#D4AF37',
    fontSize: 18,
    fontWeight: '700',
  },

  buttonSub: {
    color: '#999999',
    fontSize: 12,
    marginTop: 3,
  },

  footer: {
    color: '#555555',
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 12,
  },
});
