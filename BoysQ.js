import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProgressBar from "react-native-progress/Bar";

const BoysQ = ({ navigation, route }) => {
  const initialStep = route.params?.currentStep || 7; // Default to 7 if not provided
  const totalSteps = route.params?.totalSteps || 19; // Default to 18 if not provided

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
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);

  const handlePreviousClick = () => {
    if (currentStep > 7) {
      setCurrentStep((prevStep) => prevStep - 1);
    } else {
      navigation.goBack(); // or navigation.navigate('MyName'); if you specifically want to navigate back to MyName
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

  const handleNextClick = () => {
    if (currentStep < 18) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      navigation.navigate("Daily");
    }
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
        <TextInput
          placeholder="الوزن بالكيلوغرام"
          value={weight}
          onChangeText={setWeight}
          style={styles.inputField}
          keyboardType="numeric"
        />

        {/* Height Input */}
        <TextInput
          placeholder="الطول بالسنتيمتر"
          value={height}
          onChangeText={setHeight}
          style={styles.inputField}
          keyboardType="numeric"
        />
      </View>
    );
  };

  const ColorScreen = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "white", padding: 30 }}>
        <View style={styles.educationLevelButtons}>
          <TouchableOpacity
            onPress={() => handleColor(1)}
            style={getColorStyle(1)}
          >
            <Text style={styles.MeText}>بيضاء</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleColor(2)}
            style={getColorStyle(2)}
          >
            <Text style={styles.MeText}>حنطية</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleColor(3)}
            style={getColorStyle(3)}
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
            onPress={() => handleContact(1)}
            style={getContactStyle(1)}
          >
            <Text style={styles.MeText}>محادثة فقط</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleContact(2)}
            style={getContactStyle(2)}
          >
            <Text style={styles.MeText}>محادثة وصوت</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleContact(3)}
            style={getContactStyle(3)}
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
            onPress={() => handleHijab(1)}
            style={getHijabStyle(1)}
          >
            <Text style={styles.MeText}>منقبة</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleHijab(2)}
            style={getHijabStyle(2)}
          >
            <Text style={styles.MeText}>محجبة</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleHijab(3)}
            style={getHijabStyle(3)}
          >
            <Text style={styles.MeText}>غير محجبة</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleHijab(4)}
            style={getHijabStyle(4)}
          >
            <Text style={styles.MeText}>طرحة</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleHijab(5)}
            style={getHijabStyle(5)}
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
            onPress={() => handleMeSelection(1)}
            style={getMeStyle(1)}
          >
            <Text style={styles.MeText}>في صحة جيدة</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMeSelection(2)}
            style={getMeStyle(2)}
          >
            <Text style={styles.MeText}>أعاني من مرض مزمن</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMeSelection(3)}
            style={getMeStyle(3)}
          >
            <Text style={styles.MeText}>عقيم</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const EduScreen = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "white", padding: 30 }}>
        <View style={styles.educationLevelButtons}>
          <TouchableOpacity onPress={() => handleEdu(1)} style={getEduStyle(1)}>
            <Text style={styles.MeText}>أقل من الثانوية</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleEdu(2)} style={getEduStyle(2)}>
            <Text style={styles.MeText}>المدرسة الثانوية</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleEdu(3)} style={getEduStyle(3)}>
            <Text style={styles.MeText}>بكالريوس</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleEdu(4)} style={getEduStyle(4)}>
            <Text style={styles.MeText}>ماجستير</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleEdu(5)} style={getEduStyle(5)}>
            <Text style={styles.MeText}>الدبلوم</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleEdu(6)} style={getEduStyle(6)}>
            <Text style={styles.MeText}>الدبلوم العالي</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleEdu(7)} style={getEduStyle(7)}>
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
            onPress={() => handleKids(1)}
            style={getKidsStyle(1)}
          >
            <Text style={styles.MeText}>عازب</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleSoc(2)} style={getSStyle(2)}>
            <Text style={styles.MeText}>مطلق من غير أطفال</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleSoc(3)} style={getSStyle(3)}>
            <Text style={styles.MeText}>مطلق مع أطفال</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleSoc(4)} style={getSStyle(4)}>
            <Text style={styles.MeText}>أرمل بدون أطفال</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleSoc(5)} style={getSStyle(5)}>
            <Text style={styles.MeText}>أرمل مع أطفال</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleSoc(6)} style={getSStyle(6)}>
            <Text style={styles.MeText}>متزوج</Text>
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
            onPress={() => handleCurrent(1)}
            style={getCStyle(1)}
          >
            <Text style={styles.MeText}>طالب</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleCurrent(2)}
            style={getCStyle(2)}
          >
            <Text style={styles.MeText}>عامل</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleCurrent(3)}
            style={getCStyle(3)}
          >
            <Text style={styles.MeText}>عاطل عن العمل</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleCurrent(4)}
            style={getCStyle(4)}
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
            onPress={() => handleMarr(1)}
            style={getMarrStyle(1)}
          >
            <Text style={styles.MeText}>بأسرع وقت ممكن</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMarr(2)}
            style={getMarrStyle(2)}
          >
            <Text style={styles.MeText}>خلال سنتين</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMarr(3)}
            style={getMarrStyle(3)}
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
            onPress={() => handleKids(1)}
            style={getKidsStyle(1)}
          >
            <Text style={styles.MeText}>بأسرع وقت ممكن</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleKids(2)}
            style={getKidsStyle(2)}
          >
            <Text style={styles.MeText}>مع مرور الوقت</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleKids(3)}
            style={getKidsStyle(3)}
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
            onPress={() => handlePrayer(1)}
            style={getPrayerStyle(1)}
          >
            <Text style={styles.MeText}>ملتزم</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePrayer(2)}
            style={getPrayerStyle(2)}
          >
            <Text style={styles.MeText}>مرن</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePrayer(3)}
            style={getPrayerStyle(3)}
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
            onPress={() => handleSmoke(1)}
            style={getSmokeStyle(1)}
          >
            <Text style={styles.MeText}>لا</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleSmoke(2)}
            style={getSmokeStyle(2)}
          >
            <Text style={styles.MeText}>أدخن فقط</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleSmoke(3)}
            style={getSmokeStyle(3)}
          >
            <Text style={styles.MeText}>أشرب فقط</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSmoke(3)}
            style={getSmokeStyle(3)}
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
      question: "مستـــواي التعليمي",
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
      question: "من ناحية الحجاب هل تفضلها",
      inputPlaceholder: "اختر الإجابة...",
      value: setSelectedHijab,
      handleChange: handleHijab,
    },
    {
      question: "ماهي طرق التواصل التي تفضلها؟",
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
      question: "هل تشرب؟ أو تدخن؟",
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

export default BoysQ;
