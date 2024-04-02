import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProgressBar from "react-native-progress/Bar";

const GirlsQ = ({ navigation, route }) => {
  const initialStep = route.params?.currentStep || 9; // Default to 7 if not provided
  const totalSteps = route.params?.totalSteps || 21; // Default to 18 if not provided
  const userName = route.params?.userName
  const selectedGender = route.params?.selectedGender
  const userBirthday = route.params?.userBirthday
  const selectedCountry = route.params?.selectedCountry
  const selectedMathab = route.params?.selectedMathab
  const selectedFamily = route.params?.selectedFamily
  const selectedCity = route.params?.selectedCity
  const selectedCountryName = route.params?.selectedCountryName
  const phoneNumber = route.params?.phoneNumber

  console.log(
    phoneNumber,
    userName,
    selectedGender,
    userBirthday,
    selectedCountry,
    selectedCountryName,
    selectedCity,
    selectedMathab,
    selectedFamily
  );
  const [selectedMe, setSelectedMe] = useState(null);
  const [selectedEdu, setSelectedEdu] = useState(null);
  const [selectedSocity, setSelectedSocity] = useState(null);
  const [selectedCurrent, setSelectedCurrent] = useState(null);
  const [selectedMarr, setSelectedMarr] = useState(null);
  const [selectedKids, setSelectedKids] = useState(null);
  const [selectedHijab, setSelectedHijab] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedPrayer, setSelectedPrayer] = useState(null);
  const [selectedSmoke, setSelectedSmoke] = useState(null);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [currentStep, setCurrentStep] = useState(initialStep);
  const weightShakeAnimation = useRef(new Animated.Value(0)).current;
  const heightShakeAnimation = useRef(new Animated.Value(0)).current;
  const [weightError, setWeightError] = useState("");
  const [heightError, setHeightError] = useState("");

  const startShake = (animation) => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePreviousClick = () => {
    if (currentStep > 9) {
      setCurrentStep((prevStep) => prevStep - 1);
    } else {
      navigation.goBack(); // or navigation.navigate('MyName'); if you specifically want to navigate back to MyName
    }
  };

  const handleNextClick = () => {
    if (currentStep < 18) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      navigation.navigate("Daily", {
        phoneNumber:phoneNumber,
        userName:userName,
        selectedGender:selectedGender,
        userBirthday:userBirthday,
        selectedCountry:selectedCountry,
        selectedCountryName:selectedCountryName,
        selectedCity:selectedCity,
        selectedMathab:selectedMathab,
        selectedFamily:selectedFamily,
        selectedMe:selectedMe,
        selectedCurrent:selectedCurrent,
        selectedMarr:selectedMarr,
        selectedKids:selectedKids,
        selectedHijab:selectedHijab,
        selectedContact:selectedContact,
        selectedPrayer:selectedPrayer,
        selectedSmoke:selectedSmoke,
        selectedColor:selectedColor,
        weight:weight,
        height:height,
        selectedEdu:selectedEdu,
        selectedSocity:selectedSocity



      });
    }
  };

  const handleMeSelection = (Me) => {
    setSelectedMe(Me);
  };

  const handleColor = (Color) => {
    setSelectedColor(Color);
  };
  const handleEdu = (EduLevel) => {
    setSelectedEdu(EduLevel);
  };

  const handleSoc = (Socity) => {
    setSelectedSocity(Socity);
  };

  const handleCurrent = (Current) => {
    setSelectedCurrent(Current);
  };

  const handleMarr = (Marrige) => {
    setSelectedMarr(Marrige);
  };

  const handleKids = (Kids) => {
    setSelectedKids(Kids);
  };

  const handleHijab = (Hijab) => {
    setSelectedHijab(Hijab);
  };
  const handleContact = (Contact) => {
    setSelectedContact(Contact);
  };
  const handlePrayer = (Prayer) => {
    setSelectedPrayer(Prayer);
  };
  const handleSmoke = (Smoke) => {
    setSelectedSmoke(Smoke);
  };

  const getContactStyle = (Contact) => {
    const defaultBorderColor = "#F2F2F2";
    const selectedBorderColor = "#ECB7B7";

    return {
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 17,
      borderWidth: 2,
      borderColor:
        selectedContact === Contact ? selectedBorderColor : defaultBorderColor,
      marginVertical: 5,
      fontEdu: "Cairo",
    };
  };

  const getColorStyle = (Color) => {
    const defaultBorderColor = "#F2F2F2";
    const selectedBorderColor = "#ECB7B7";

    return {
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 17,
      borderWidth: 2,
      borderColor:
        selectedColor === Color ? selectedBorderColor : defaultBorderColor,
      marginVertical: 5,
      fontEdu: "Cairo",
    };
  };

  const getHijabStyle = (Hijab) => {
    const defaultBorderColor = "#F2F2F2";
    const selectedBorderColor = "#ECB7B7";

    return {
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 17,
      borderWidth: 2,
      borderColor:
        selectedHijab === Hijab ? selectedBorderColor : defaultBorderColor,
      marginVertical: 5,
      fontEdu: "Cairo",
    };
  };
  const getEduStyle = (EduLevel) => {
    const defaultBorderColor = "#F2F2F2";
    const selectedBorderColor = "#ECB7B7";

    return {
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 17,
      borderWidth: 2,
      borderColor:
        selectedEdu === EduLevel ? selectedBorderColor : defaultBorderColor,
      marginVertical: 5,
      fontEdu: "Cairo",
    };
  };

  const getMarrStyle = (Marrige) => {
    const defaultBorderColor = "#F2F2F2";
    const selectedBorderColor = "#ECB7B7";

    return {
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 17,
      borderWidth: 2,
      borderColor:
        selectedMarr === Marrige ? selectedBorderColor : defaultBorderColor,
      marginVertical: 5,
      fontEdu: "Cairo",
    };
  };

  const getMeStyle = (Me) => {
    const defaultBorderColor = "#F2F2F2";
    const selectedBorderColor = "#ECB7B7";

    return {
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 17,
      borderWidth: 2,
      borderColor: selectedMe === Me ? selectedBorderColor : defaultBorderColor,
      marginVertical: 5,
      fontEdu: "Cairo",
    };
  };

  const getSStyle = (Socity) => {
    const defaultBorderColor = "#F2F2F2";
    const selectedBorderColor = "#ECB7B7";

    return {
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 17,
      borderWidth: 2,
      borderColor:
        selectedSocity === Socity ? selectedBorderColor : defaultBorderColor,
      marginVertical: 5,
      fontEdu: "Cairo",
    };
  };

  const getCStyle = (Current) => {
    const defaultBorderColor = "#F2F2F2";
    const selectedBorderColor = "#ECB7B7";

    return {
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 17,
      borderWidth: 2,
      borderColor:
        selectedCurrent === Current ? selectedBorderColor : defaultBorderColor,
      marginVertical: 5,
      fontEdu: "Cairo",
    };
  };

  const getKidsStyle = (Kids) => {
    const defaultBorderColor = "#F2F2F2";
    const selectedBorderColor = "#ECB7B7";

    return {
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 17,
      borderWidth: 2,
      borderColor:
        selectedKids === Kids ? selectedBorderColor : defaultBorderColor,
      marginVertical: 5,
      fontEdu: "Cairo",
    };
  };

  const getPrayerStyle = (Prayer) => {
    const defaultBorderColor = "#F2F2F2";
    const selectedBorderColor = "#ECB7B7";

    return {
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 17,
      borderWidth: 2,
      borderColor:
        selectedPrayer === Prayer ? selectedBorderColor : defaultBorderColor,
      marginVertical: 5,
      fontEdu: "Cairo",
    };
  };

  const getSmokeStyle = (Smoke) => {
    const defaultBorderColor = "#F2F2F2";
    const selectedBorderColor = "#ECB7B7";

    return {
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 17,
      borderWidth: 2,
      borderColor:
        selectedSmoke === Smoke ? selectedBorderColor : defaultBorderColor,
      marginVertical: 5,
      fontEdu: "Cairo",
    };
  };

  const ShapeScreen = () => {
    const handleWeightChange = (text) => {
      const numericValue = parseInt(text, 10);
      if (!isNaN(numericValue) && numericValue >= 30) {
        setWeight(text);
        setWeightError("");
      } else {
        setWeightError("Please enter a real weight (min 30kg)");
        startShake(weightShakeAnimation);
      }
    };

    const handleHeightChange = (text) => {
      const numericValue = parseInt(text, 10);
      if (!isNaN(numericValue) && numericValue >= 120) {
        setHeight(text);
        setHeightError("");
      } else {
        setHeightError("Please enter a real height (min 120cm)");
        startShake(heightShakeAnimation);
      }
    };
    return (
      <View style={{ flex: 1, backgroundColor: "white", padding: 30 }}>
        <Text
          style={{
            textAlign: "right",
            color: "black",
            fontSize: 40,
            fontWeight: "bold",
            padding: 10,
          }}
        >
          وزنك وطولك
        </Text>

        {/* Weight Input */}
        <Animated.View
          style={{ transform: [{ translateX: weightShakeAnimation }] }}
        >
          <TextInput
            placeholder="الوزن بالكيلوغرام"
            value={weight}
            onChangeText={handleWeightChange}
            style={styles.inputField}
            keyboardType="numeric"
          />
          {weightError ? (
            <Text style={styles.errorText}>{weightError}</Text>
          ) : null}
        </Animated.View>

        <Animated.View
          style={{ transform: [{ translateX: heightShakeAnimation }] }}
        >
          <TextInput
            placeholder="الطول بالسنتيمتر"
            value={height}
            onChangeText={handleHeightChange}
            style={styles.inputField}
            keyboardType="numeric"
          />
          {heightError ? (
            <Text style={styles.errorText}>{heightError}</Text>
          ) : null}
        </Animated.View>
      </View>
    );
  };

  const ColorScreen = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "white", padding: 30 }}>
        <View style={styles.educationLevelButtons}>
          <TouchableOpacity
            onPress={() => handleColor("بيضاء")}
            style={getColorStyle("بيضاء")}
          >
            <Text style={styles.MeText}>بيضاء</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleColor("حنطية")}
            style={getColorStyle("حنطية")}
          >
            <Text style={styles.MeText}>حنطية</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleColor("سمراء")}
            style={getColorStyle("سمراء")}
          >
            <Text style={styles.MeText}>سمراء</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const ContactScreen = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "white", padding: 30 }}>
        <View style={styles.educationLevelButtons}>
          <TouchableOpacity
            onPress={() => handleContact("محادثة فقط")}
            style={getContactStyle("محادثة فقط")}
          >
            <Text style={styles.MeText}>محادثة فقط</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleContact("محادثة وصوت")}
            style={getContactStyle("محادثة وصوت")}
          >
            <Text style={styles.MeText}>محادثة وصوت</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleContact("محادثة وصوت وفيديو")}
            style={getContactStyle("محادثة وصوت وفيديو")}
          >
            <Text style={styles.MeText}>محادثة وصوت وفيديو</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const HijabScreen = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "white", padding: 30 }}>
        <View style={styles.educationLevelButtons}>
          <TouchableOpacity
            onPress={() => handleHijab("منقبة")}
            style={getHijabStyle("منقبة")}
          >
            <Text style={styles.MeText}>منقبة</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleHijab("محجبة")}
            style={getHijabStyle("محجبة")}
          >
            <Text style={styles.MeText}>محجبة</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleHijab("غير محجبة")}
            style={getHijabStyle("غير محجبة")}
          >
            <Text style={styles.MeText}>غير محجبة</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleHijab("طرحة")}
            style={getHijabStyle("طرحة")}
          >
            <Text style={styles.MeText}>طرحة</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleHijab("مرنة")}
            style={getHijabStyle("مرنة")}
          >
            <Text style={styles.MeText}>مرنة</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const MeScreen = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "white", padding: 30 }}>
        <View style={styles.educationLevelButtons}>
          <TouchableOpacity
            onPress={() => handleMeSelection("في صحة جيدة")}
            style={getMeStyle("في صحة جيدة")}
          >
            <Text style={styles.MeText}>في صحة جيدة</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMeSelection("أعاني من مرض مزمن")}
            style={getMeStyle("أعاني من مرض مزمن")}
          >
            <Text style={styles.MeText}>أعاني من مرض مزمن</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMeSelection("عقيمة")}
            style={getMeStyle("عقيمة")}
          >
            <Text style={styles.MeText}>عقيمة</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const EduScreen = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "white", padding: 30 }}>
        <View style={styles.educationLevelButtons}>
          <TouchableOpacity onPress={() => handleEdu("أقل من الثانوية")} style={getEduStyle("أقل من الثانوية")}>
            <Text style={styles.MeText}>أقل من الثانوية</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleEdu("المدرسة الثانوية")} style={getEduStyle("المدرسة الثانوية")}>
            <Text style={styles.MeText}>المدرسة الثانوية</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleEdu("بكالريوس")} style={getEduStyle("بكالريوس")}>
            <Text style={styles.MeText}>بكالريوس</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleEdu("ماجستير")} style={getEduStyle("ماجستير")}>
            <Text style={styles.MeText}>ماجستير</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleEdu("الدبلوم")} style={getEduStyle("الدبلوم")}>
            <Text style={styles.MeText}>الدبلوم</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleEdu("الدبلوم العالي")} style={getEduStyle("الدبلوم العالي")}>
            <Text style={styles.MeText}>الدبلوم العالي</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleEdu("الدكتوراة")} style={getEduStyle("الدكتوراة")}>
            <Text style={styles.MeText}>الدكتوراة </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const SocityScreen = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "white", padding: 30 }}>
        <View style={styles.educationLevelButtons}>
          <TouchableOpacity
            onPress={() => handleSoc("عازبة")}
            style={getSStyle("عازبة")}
          >
            <Text style={styles.MeText}>عازبة</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleSoc("مطلقة من غير أطفال")} style={getSStyle("مطلقة من غير أطفال")}>
            <Text style={styles.MeText}>مطلقة من غير أطفال</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleSoc("مطلقة مع أطفال")} style={getSStyle("مطلقة مع أطفال")}>
            <Text style={styles.MeText}>مطلقة مع أطفال</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleSoc("أرملة بدون أطفال")} style={getSStyle("أرملة بدون أطفال")}>
            <Text style={styles.MeText}>أرملة بدون أطفال</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleSoc("أرملة مع أطفال")} style={getSStyle("أرملة مع أطفال")}>
            <Text style={styles.MeText}>أرملة مع أطفال</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleSoc("متزوجة")} style={getSStyle("متزوجة")}>
            <Text style={styles.MeText}>متزوجة</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const CurrentScreen = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "white", padding: 30 }}>
        <View style={styles.educationLevelButtons}>
          <TouchableOpacity
            onPress={() => handleCurrent("طالبة")}
            style={getCStyle("طالبة")}
          >
            <Text style={styles.MeText}>طالبة</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleCurrent("عاملة")}
            style={getCStyle("عاملة")}
          >
            <Text style={styles.MeText}>عاملة</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleCurrent("عاطلة عن العمل")}
            style={getCStyle("عاطلة عن العمل")}
          >
            <Text style={styles.MeText}>عاطلة عن العمل</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleCurrent("افضل أن لا أجيب")}
            style={getCStyle("افضل أن لا أجيب")}
          >
            <Text style={styles.MeText}>افضل أن لا أجيب</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const MarrScreen = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "white", padding: 30 }}>
        <View style={styles.educationLevelButtons}>
          <TouchableOpacity
            onPress={() => handleMarr("بأسرع وقت ممكن")}
            style={getMarrStyle("بأسرع وقت ممكن")}
          >
            <Text style={styles.MeText}>بأسرع وقت ممكن</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMarr("خلال سنتين")}
            style={getMarrStyle("خلال سنتين")}
          >
            <Text style={styles.MeText}>خلال سنتين</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMarr("لست في عجلة")}
            style={getMarrStyle("لست في عجلة")}
          >
            <Text style={styles.MeText}>لست في عجلة</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const KidsScreen = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "white", padding: 30 }}>
        <View style={styles.educationLevelButtons}>
          <TouchableOpacity
            onPress={() => handleKids("بأسرع وقت ممكن")}
            style={getKidsStyle("بأسرع وقت ممكن")}
          >
            <Text style={styles.MeText}>بأسرع وقت ممكن</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleKids("مع مرور الوقت")}
            style={getKidsStyle("مع مرور الوقت")}
          >
            <Text style={styles.MeText}>مع مرور الوقت</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleKids("لا أريد أطفال أبدًا")}
            style={getKidsStyle("لا أريد أطفال أبدًا")}
          >
            <Text style={styles.MeText}>لا أريد أطفال أبدًا</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const PrayerScreen = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "white", padding: 30 }}>
        <View style={styles.educationLevelButtons}>
          <TouchableOpacity
            onPress={() => handlePrayer("ملتزمه")}
            style={getPrayerStyle("ملتزمه")}
          >
            <Text style={styles.MeText}>ملتزمه</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePrayer("مرنه")}
            style={getPrayerStyle("مرنه")}
          >
            <Text style={styles.MeText}>مرنه</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePrayer("لا أهتم")}
            style={getPrayerStyle("لا أهتم")}
          >
            <Text style={styles.MeText}>لا أهتم</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const SmokeScreen = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "white", padding: 30 }}>
        <View style={styles.educationLevelButtons}>
          <TouchableOpacity
            onPress={() => handleSmoke("لا")}
            style={getSmokeStyle("لا")}
          >
            <Text style={styles.MeText}>لا</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleSmoke("أدخن فقط")}
            style={getSmokeStyle("أدخن فقط")}
          >
            <Text style={styles.MeText}>أدخن فقط</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleSmoke("أشرب فقط")}
            style={getSmokeStyle("أشرب فقط")}
          >
            <Text style={styles.MeText}>أشرب فقط</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSmoke("نعم")}
            style={getSmokeStyle("نعم")}
          >
            <Text style={styles.MeText}>نعم</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const steps = [
    {
      question: "أنــا",
      inputPlaceholder: "اختر الإجابة...",
      value: selectedMe,
      handleChange: handleMeSelection,
    },
    {
      question: "مستواي التعليمي",
      inputPlaceholder: "اختر الإجابة...",
      value: selectedEdu,
      handleChange: handleEdu,
    },
    {
      question: "وضعي الحالي",
      inputPlaceholder: "اختر الإجابة...",
      value: setSelectedSocity,
      handleChange: handleCurrent,
    },
    {
      question: "وضعي الاجتماعي",
      inputPlaceholder: "اختر الإجابة...",
      value: setSelectedSocity,
      handleChange: handleSoc,
    },
    {
      question: "أرغب في الزواج",
      inputPlaceholder: "اختر الإجابة...",
      value: setSelectedMarr,
      handleChange: handleMarr,
    },
    {
      question: "أرغب في الأطفال",
      inputPlaceholder: "اختر الإجابة...",
      value: setSelectedKids,
      handleChange: handleKids,
    },
    {
      question: "هل أنتي",
      inputPlaceholder: "اختر الإجابة...",
      value: setSelectedHijab,
      handleChange: handleHijab,
    },
    {
      question: "ماهي طرق التواصل التي تفضلينها؟",
      inputPlaceholder: "اختر الإجابة...",
      value: setSelectedContact,
      handleChange: handleContact,
    },
    {
      question: "من الناحية الدينية",
      inputPlaceholder: "اختر الإجابة...",
      value: setSelectedPrayer,
      handleChange: handlePrayer,
    },
    {
      question: "هل تشربين؟ أو تدخنين؟",
      inputPlaceholder: "اختر الإجابة...",
      value: setSelectedSmoke,
      handleChange: handleSmoke,
    },
    {
      question: "بشرتي",
      inputPlaceholder: "اختر الإجابة...",
      value: setSelectedColor,
      handleChange: handleColor,
    },
  ];

  const currentStepData =
    currentStep >= 7 && currentStep <= totalSteps
      ? steps[currentStep - 7]
      : null;

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <ProgressBar
          progress={currentStep / totalSteps}
          width={null}
          height={10}
          color="#ECB7B7"
          unfilledColor="rgba(236, 183, 183, 0.43)"
          borderRadius={9}
        />
      </View>

      {/* Display Current Step / Total Steps */}
      <Text style={styles.stepText}>{`${currentStep}/19`}</Text>

      <View style={styles.circularButtonsContainer}>
        <TouchableOpacity
          style={styles.circularButton}
          onPress={handlePreviousClick}
        >
          <Ionicons name="arrow-back" size={24} color="#9B9B9B" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.circularButton}
          onPress={handleNextClick}
        >
          <Ionicons name="arrow-forward" size={24} color="#ECB7B7" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
      >
        {currentStepData && (
          <Text style={styles.questionText}>{currentStepData.question}</Text>
        )}

        {currentStep === 7 && <MeScreen />}

        {currentStep === 8 && <EduScreen />}

        {currentStep === 9 && <SocityScreen />}

        {currentStep === 10 && <CurrentScreen />}

        {currentStep === 11 && <MarrScreen />}

        {currentStep === 12 && <KidsScreen />}
        {currentStep === 13 && <HijabScreen />}
        {currentStep === 14 && <ContactScreen />}
        {currentStep === 15 && <PrayerScreen />}
        {currentStep === 16 && <SmokeScreen />}
        {currentStep === 18 && <ShapeScreen />}
        {currentStep === 17 && <ColorScreen />}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    flexGrow: 1,
    padding: 30,
    justifyContent: "center",
  },
  circularButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  stepText: {
    textAlign: "left",
    color: "#ECB7B7",
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 8, // Adjust the spacing as needed
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
  choicesContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  choice: {
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },
  progressBarContainer: {
    marginBottom: 20,
    paddingTop: 40, // Increase the top padding to push content below the status bar
  },
  inputField: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 17,
    borderWidth: 2,
    borderColor: "#F2F2F2",
    marginVertical: 20,
    fontFamily: "Cairo",
    textAlign: "center",
    fontSize: 18,
  },
  questionText: {
    textAlign: "right",
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    padding: 10,
  },
  MeText: {
    color: "black",
    fontSize: 20,
    fontEdu: "Cairo",
    fontWeight: "50",
    lineHeight: 33,
    wordWrap: "break-word",
  },
  educationLevelButtons: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: 20,
    padding: 20,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 5,
  },
});

export default GirlsQ;
