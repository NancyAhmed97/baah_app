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
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";
import countries from "./countries.json";

const GeneralQ = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userName, setUserName] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [userBirthday, setUserBirthday] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedMathab, setSelectedMathab] = useState(null);
  const [selectedFamily, setSelectedFamily] = useState(null);
  const [minDate, setMinDate] = useState(() => {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 19);
    return currentDate;
  });

  const totalSteps = 12;

  const handleNameChange = (name) => {
    setUserName(name);
  };

  const handleGenderSelection = (value) => {
    setSelectedGender(value);
  };

  const showDatePicker = () => {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 19);
    setMinDate(currentDate);

    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    setUserBirthday(date);
    hideDatePicker();
  };

  const handleBirthdayChange = (birthday) => {
    setUserBirthday(birthday);
  };

  const handlePreviousClick = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleMathabSelection = (mathab) => {
    setSelectedMathab(mathab);
  };

  const handleFamily = (familyLevel) => {
    setSelectedFamily(familyLevel);
  };

  const handleSelectCountry = (value) => {
    const selected = countries.find((country) => country.name === value);
    if (selected) {
      setSelectedCountry(selected); // Set the entire selected country object
    }
  };

  const handleNextClick = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      if (selectedGender === "Male") {
        navigation.navigate("BoysQ");
      } else if (selectedGender === "Female") {
        navigation.navigate("GirlsQ");
      }
    }
  };

  const getFamilyStyle = (familyLevel) => {
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
        selectedFamily === familyLevel
          ? selectedBorderColor
          : defaultBorderColor,
      marginVertical: 5,
      fontFamily: "Cairo",
    };
  };

  const getMathabStyle = (Mathab) => {
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
        selectedMathab === Mathab ? selectedBorderColor : defaultBorderColor,
      marginVertical: 5,
      fontFamily: "Cairo",
    };
  };

  const MathabScreen = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "white", padding: 30 }}>
        <View style={styles.educationLevelButtons}>
          <TouchableOpacity
            onPress={() => handleMathabSelection(1)}
            style={getMathabStyle(1)}
          >
            <Text style={styles.mathabText}>سنـــي</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMathabSelection(2)}
            style={getMathabStyle(2)}
          >
            <Text style={styles.mathabText}>شيــــعــي</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMathabSelection(3)}
            style={getMathabStyle(3)}
          >
            <Text style={styles.mathabText}>اسمــاعيلي</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleMathabSelection(4)}
            style={getMathabStyle(4)}
          >
            <Text style={styles.mathabText}>جعــفـري</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const FamilyScreen = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "white", padding: 30 }}>
        <View style={styles.educationLevelButtons}>
          <TouchableOpacity
            onPress={() => handleFamily(1)}
            style={getFamilyStyle(1)}
          >
            <Text style={styles.mathabText}>أنتمي لعائلة قبيلية</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleFamily(2)}
            style={getFamilyStyle(2)}
          >
            <Text style={styles.mathabText}>أنتمي لعائلة غير قبيلية</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleFamily(3)}
            style={getFamilyStyle(3)}
          >
            <Text style={styles.mathabText}>أفضل أن لا أجيب</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const steps = [
    {
      question: " * اسمــي",
      inputPlaceholder: "اضغط لكتابة الاسم",
      value: userName,
      handleChange: handleNameChange,
    },
    {
      question: " * أنـــا",
      choices: [
        {
          label: "انثى",
          value: "Female",
          image: require("./assets/female.png"),
          borderColor: "rgb(245,180,181)",
        },
        {
          label: "ذكر",
          value: "Male",
          image: require("./assets/male.png"),
          borderColor: "rgb(72,88,104)",
        },
      ],
      selectedChoice: selectedGender,
      handleChoiceSelect: handleGenderSelection,
    },
    {
      question: " * تاريخ ميلادي",
      inputPlaceholder: "---",
      value: userBirthday
        ? userBirthday.toLocaleDateString("ar-EG", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "",
      handleChange: showDatePicker,
    },
    {
      question: "* جنسيـتـي",
      inputPlaceholder: "اختر الدولة...",
      value: selectedCountry,
      handleChange: handleSelectCountry,
    },
    {
      question: "مذهبـــي *",
      inputPlaceholder: "اختر الإجابة...",
      value: selectedMathab,
      handleChange: handleMathabSelection,
    },
    {
      question: "من الناحية القبلية", // Sixth question
      inputPlaceholder: "اختر الإجابة...",
      value: selectedFamily,
      handleChange: handleFamily,
    },
  ];

  const currentStepData =
    currentStep <= totalSteps ? steps[currentStep - 1] : null;

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
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

          {currentStep === 1 && currentStepData && (
            <TextInput
              placeholder={currentStepData.inputPlaceholder}
              value={currentStepData.value}
              onChangeText={currentStepData.handleChange}
              style={styles.inputField}
            />
          )}

          {currentStep === 2 && currentStepData && (
            <View style={styles.choicesContainer}>
              {currentStepData.choices.map((choice, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    currentStepData.handleChoiceSelect(choice.value)
                  }
                  style={[
                    styles.choice,
                    currentStepData.selectedChoice === choice.value && {
                      borderColor: "#ECB7B7",
                    },
                    index > 0 && { marginLeft: 30 },
                  ]}
                >
                  <Image source={choice.image} style={styles.genderImage} />
                  <Text>{choice.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {currentStep === 3 && currentStepData && (
            <View>
              <TextInput
                placeholder={currentStepData.inputPlaceholder}
                value={currentStepData.value}
                onChangeText={handleBirthdayChange}
                editable={false}
                style={{
                  ...styles.inputField,
                  textAlign: "center", // Add this line
                }}
              />
              <TouchableOpacity onPress={showDatePicker}>
                <Text style={styles.datePickerText}>
                  اضغط هنا لاختيار تاريخ الميلاد
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {currentStep === 4 && currentStepData && (
            <View>
              <RNPickerSelect
                onValueChange={(value) => handleSelectCountry(value)}
                items={countries.map((country) => ({
                  label: country.name,
                  value: country.name,
                }))}
                value={selectedCountry ? selectedCountry.name : null}
                placeholder={{
                  label: "اختر الدولة...",
                  value: null,
                }}
                placeholderTextColor="#9B9B9B" // Set the color for the placeholder text
                style={{
                  inputIOS: {
                    textAlign: "center",
                    color: "black", // Set the color for the selected item text
                  },
                  inputAndroid: {
                    textAlign: "center",
                    color: "black", // Set the color for the selected item text
                  },
                }}
              />
            </View>
          )}

          {currentStep === 5 && <MathabScreen />}

          {currentStep === 6 && <FamilyScreen />}

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmDate}
            onCancel={hideDatePicker}
            locale="ar"
            minimumDate={new Date("1900-01-01")} // Set a reasonable past date
            maximumDate={new Date()} // Set the maximum date to the current date
            style={{ zIndex: 1000 }} // Set a higher zIndex
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  stepText: {
    textAlign: "left",
    color: "#ECB7B7",
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 8, // Adjust the spacing as needed
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
  genderImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  progressBarContainer: {
    marginBottom: 20,
    paddingTop: 30, // Increase the top padding to push content below the status bar
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
    marginVertical: 100,
    textAlign: "right",
    fontSize: "20",
    fontWeight: "bold",
  },
  questionText: {
    textAlign: "right",
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    padding: 10,
  },
  datePickerText: {
    textAlign: "center",
    color: "#ECB7B7",
    marginTop: -90,
  },
  mathabText: {
    color: "black",
    fontSize: 20,
    fontFamily: "Cairo",
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
});

export default GeneralQ;
