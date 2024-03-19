import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Bar from "react-native-progress/Bar";

const DailyHabitsQuestion = ({ navigation, route }) => {
  const initialStep = route.params?.currentStep || 19; // Default to 7 if not provided
  const totalSteps = route.params?.totalSteps || 1; // Default to 18 if not provided
  const [habits, setHabits] = useState([
    { id: 1, text: "أحب القراءة", selected: false },
    { id: 2, text: "أمارس التمارين الرياضية بانتظام", selected: false },
    { id: 3, text: "أحب السفر", selected: false },
    { id: 4, text: "أحب الطبخ", selected: false },
    { id: 5, text: "أحب مشاهدة الأفلام", selected: false },
    { id: 6, text: "أحب الرسم", selected: false },
    { id: 7, text: "أحب السباحة", selected: false },
    { id: 8, text: "أمارس العزف على الآلات الموسيقية", selected: false },
  ]);
  const [currentStep, setCurrentStep] = useState(initialStep);

  const toggleHabitSelection = (id) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, selected: !habit.selected } : habit
      )
    );
  };

  const handlePreviousClick = () => {
    if (currentStep > 19) {
      setCurrentStep((prevStep) => prevStep - 1);
    } else {
      navigation.goBack(); // or navigation.navigate('MyName'); if you specifically want to navigate back to MyName
    }
  };

  const handleNextClick = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      navigation.navigate("SignInPage");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.BarContainer}>
        <Bar
          progress={currentStep / totalSteps}
          width={null}
          height={10}
          color="#ECB7B7"
          unfilledColor="rgba(236, 183, 183, 0.43)"
          borderRadius={9}
        />
      </View>
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

      <Text style={styles.titleText}>العادات اليومية</Text>

      <View style={styles.habitsContainer}>
        {habits.map((habit) => (
          <TouchableOpacity
            key={habit.id}
            style={[
              styles.habitButton,
              { borderColor: habit.selected ? "#ECB7B7" : "#ECB7B7" },
            ]}
            onPress={() => toggleHabitSelection(habit.id)}
          >
            <Text
              style={[
                styles.habitText,
                { color: habit.selected ? "#4B5867" : "#ECB7B7" },
              ]}
            >
              {habit.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "right",
    marginBottom: 90,
  },
  habitsContainer: {
    flexDirection: "row-reverse", // Start from the right
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  stepText: {
    textAlign: "left",
    color: "#ECB7B7",
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 8, // Adjust the spacing as needed
  },
  habitButton: {
    padding: 10,
    margin: 5,
    borderRadius: 15,
    borderWidth: 1.7,
  },
  habitText: {
    fontSize: 14,
    textAlign: "right",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  BarContainer: {
    marginBottom: 20,
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
});

export default DailyHabitsQuestion;
