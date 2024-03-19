import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const SplashScreens = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const splashData = [
    {
      title: "مرحبا بك في باءة",
      subtitle: "توحيد القلوب، تكريم الإيمان: شريكك في رحلات الحب الحلال",
    },
    {
      title: "التوافق على أساس المبادئ الإسلامية",
      subtitle: "قم بمطابقة المستخدمين على أساس القيم الدينية وأسلوب الحياة.",
    },
    {
      title: "الخصوصية هي مشغلنا الرئيسي",
      subtitle: "اكشف عن صورك لتتوافق مع شريك حياتك",
    },
    {
      title: "ابحث عن شريك حياتك المسلم",
      subtitle: "ستطابقك خوارزميتنا الذكية مع شريكك المسلم",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % splashData.length;
        scrollViewRef.current.scrollTo({
          x: width * nextIndex,
          animated: true,
        });
        return nextIndex;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const onPressSkip = () => {
    // Navigate to the login screen when "ابدأ الآن" button is pressed
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ECB7B7" barStyle="light-content" />
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const newIndex = Math.floor(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(newIndex);
        }}
        ref={scrollViewRef}
      >
        {splashData.map((item, index) => (
          <View style={[styles.slide, { width }]} key={index}>
            <View style={styles.whiteBackground}>
              <Text style={styles.welcomeText}>{item.title}</Text>
              <Text style={styles.subtitleText}>{item.subtitle}</Text>
              {currentIndex === splashData.length - 1 && (
                <TouchableOpacity
                  style={styles.startButton}
                  onPress={onPressSkip}
                >
                  <Text style={styles.startButtonText}>ابدأ الآن</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.skipButton} onPress={onPressSkip}>
        <Text style={styles.skipButtonText}>تخطي</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECB7B7",
  },
  whiteBackground: {
    position: "absolute",
    width: "100%",
    height: "60%",
    bottom: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  startButton: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "#ECB7B7",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  startButtonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Cairo",
    fontWeight: "bold",
  },
  skipButton: {
    position: "absolute",
    top: 30,
    right: 20,
    backgroundColor: "transparent",
  },
  skipButtonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Cairo",
  },
  welcomeText: {
    color: "#4B5867",
    fontSize: 28,
    fontFamily: "Cairo",
    fontWeight: "700",
    lineHeight: 34,
    marginTop: 20,
    textAlign: "center",
  },
  subtitleText: {
    color: "#AAAAAA",
    fontSize: 16,
    fontFamily: "Cairo",
    fontWeight: "500",
    lineHeight: 20,
    marginTop: 20,
    textAlign: "center",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreens;
