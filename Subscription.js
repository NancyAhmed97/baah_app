import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import Swiper from "react-native-swiper";

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const navigation = useNavigation()

  const handleSelectPlan = async (plan) => {
    setSelectedPlan(plan);
    try {
      const token = await AsyncStorage.getItem("login");
      const response = await axios.post(`https://marriage-application.onrender.com/upgrade/subscription?id=${JSON.parse(token).id}&subscription=${plan}`);
      if (response.status) {
        Alert.alert(response.data)
      }


    } catch (err) {
      Alert.alert(err)
    }
    // try {
    //   const token = await AsyncStorage.getItem("login");
    //   const response = await axios.post(`https://marriage-application.onrender.com/addtofav?id=${JSON.parse(token).id}&favIsubscriptiond=${plan}`);
    //   // Alert.alert(response.data)
    //   if(response.status){
    //     Alert.alert(response.data)

    //   }
    // } catch (err) {
    //   Alert.alert(err)
    // }
  };
  useEffect(() => {
    const getUserSub = async () => {
      const token = await AsyncStorage.getItem("login");
      setSelectedPlan(JSON.parse(token).subscription)

    }
    getUserSub()
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.circularButtonsContainer}>

        <TouchableOpacity
          style={styles.circularButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#9B9B9B" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.circularButton}
          onPress={() => {
            navigation.navigate('PaymentScreen',{
              selectedPlan:selectedPlan
            });
          }}
        >
          <Ionicons name="arrow-forward" size={24} color="#ECB7B7" />
        </TouchableOpacity>
      </View>

      <Swiper
        style={styles.wrapper}
        loop={true}
        autoplay={true}
        autoplayTimeout={3}
      >
        <View style={styles.slide}>
          <TouchableOpacity
            style={[
              styles.planButton,
              selectedPlan === "gold" && styles.selectedPlan,
            ]}
            onPress={() => handleSelectPlan("gold")}
          >
            <Text style={styles.planText}>الأشتراك الذهبي</Text>
            <Text style={styles.planDetails}>$19.99/month</Text>
            <View style={styles.featureItem2}>
              <Text style={styles.planFeatures}>- فلاتر متنوعة.</Text>
            </View>
            <View style={styles.featureItem3}>
              <Text style={styles.planFeatures}>- اتصالات مخفيه.</Text>
            </View>
            <View style={styles.featureItem3}>
              <Text style={styles.planFeatures}>
                - انظر لتقييمات من تهتم به.
              </Text>
            </View>
            <View style={styles.featureItem3}>
              <Text style={styles.planFeatures}>- تحقق من موقع مشتركينك.</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.slide}>
          <TouchableOpacity
            style={[
              styles.planButton,
              selectedPlan === "silver" && styles.selectedPlan,
            ]}
            onPress={() => handleSelectPlan("silver")}
          >
            <Text style={styles.planText}>الأشتراك الفضي</Text>
            <Text style={styles.planDetails}>$9.99/month</Text>
            <View style={styles.featureItem2}>
              <Text style={styles.planFeatures}>- فلاتر متنوعة.</Text>
            </View>
            <View style={styles.featureItem3}>
              <Text style={styles.planFeatures}>- اتصالات مخفيه.</Text>
            </View>
            <View style={styles.featureItem3}>
              <Text style={styles.planFeatures}>
                - انظر لتقييمات من تهتم به.
              </Text>
            </View>
            <View style={styles.featureItem3}>
              <Text style={styles.planFeatures}>- تحقق من موقع مشتركينك.</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.slide}>
          <TouchableOpacity
            style={[
              styles.planButton,
              selectedPlan === "platinum" && styles.selectedPlan,
            ]}
            onPress={() => handleSelectPlan("platinum")}
          >
            <Text style={styles.planText}>الأشتراك الرمادي</Text>
            <Text style={styles.planDetails}>$29.99/month</Text>
            <View style={styles.featureItem2}>
              <Text style={styles.planFeatures}>- فلاتر متنوعة.</Text>
            </View>
            <View style={styles.featureItem3}>
              <Text style={styles.planFeatures}>- اتصالات مخفيه.</Text>
            </View>
            <View style={styles.featureItem3}>
              <Text style={styles.planFeatures}>
                - انظر لتقييمات من تهتم به.
              </Text>
            </View>
            <View style={styles.featureItem3}>
              <Text style={styles.planFeatures}>- تحقق من موقع مشتركينك.</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Swiper>
      <View style={styles.featureItem}>
        <Text style={styles.planFeatures2}>
          اشتراكك مرتبط بحسابك على باءة ولا يمكن تحويله إلى حساب آخر. أذا كنت
          لاتمتلك أي عضوية فلك فقط مكالمتين مجانية.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  planFeaturesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
    marginTop: 30,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  featureItem: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 10,
    marginBottom: 10,
  },
  planFeatures: {
    fontSize: 16,
    color: "black",
    fontFamily: "Cairo",
  },
  planFeatures2: {
    fontSize: 16,
    marginTop: 10,
    color: "#666",
    fontFamily: "Cairo",
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  planButton: {
    width: "80%",
    height: 400, // Adjust the height as needed
    backgroundColor: "#ECB7B7",
    padding: 20,
    borderRadius: 10, // Rounded corners for rectangular boxes
    alignItems: "center",
    marginBottom: 30, // Spacing between boxes
  },
  planText: {
    fontSize: 30,
    marginTop: 10,
    fontWeight: "bold",
    fontFamily: "Cairo",
  },
  planDetails: {
    fontSize: 16,
    marginTop: 5,
    color: "#666",
    fontFamily: "Cairo",
  },
  selectedPlan: {
    backgroundColor: "#eeeeee",
  },
  featureItem2: {
    flexDirection: "row-reverse", // Changed to 'row-reverse' to position image to the left
    alignItems: "center",
    marginBottom: 10,
    marginTop: 70,
  },
  featureItem3: {
    flexDirection: "row-reverse", // Changed to 'row-reverse' to position image to the left
    alignItems: "center",
    marginBottom: 10,
    marginTop: -2,
  },
  circularButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",

    marginTop: 10,
    width: "100%"
  },

  circularButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    borderWidth: 2,
    borderColor: "#F2F2F2",
  },
});

export default Subscription;
