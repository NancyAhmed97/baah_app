import React, { useState } from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Modal,
  TextInput,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { Alert } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { userMethod } from "./Redux/user";
import { useDispatch } from "react-redux";

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [profilePicture, setProfilePicture] = useState(); // Use initialProfilePicture as the default value
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [data, setGetData] = useState({});
  const [profileImage, setProfileImage] = useState(null);
  const [editeprofileImage, setEditeProfileImage] = useState(null);
  const [editeprofileName, setEditeProfileName] = useState(null);
  const [editeBio, setEditeBio] = useState(null);
  const [imageBytes, setImageBytes] = useState(null);
  const [images, setImages] = useState([]);
  const [images1, setImages1] = useState([]);

  const [subscription, setSubscription] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const [profile, setProfile] = useState({
    name: "محمد غالي",
    location: "الرياض، المملكة العربية السعودية",
    bio: "ابحث عن امرأة صادقة وتخاف الله، تحب الوناسة والعمل ومتفهمة ومرحة.",
  });
  const userinfo = useSelector((state) => state);

  useEffect(() => {
    // getsubscription
    const checkLogin = async () => {

      try {
        const token = await AsyncStorage.getItem("login");
        setGetData(JSON.parse(token))
        const response = await axios.post(`https://marriage-application.onrender.com/getsubscription?id=${JSON.parse(token).id}`);
        if (response.status) {
          setSubscription(response.data)
        }

      } catch (err) {
        Alert.alert(err)
      }
    };
    checkLogin();
    (async () => {
      const { status } =
        await ExpoImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        console.log("تم رفض الإذن!");
      }
    })();

    (async () => {
      // Request permission to access the image library
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, [])
  const handleProfileChange = (key, value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [key]: value,
    }));
  };
  const openImagePickerAsync = async () => {
    const img = []
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      // setImages1(images1=>[...images1, result.assets[0].uri])
      console.log(userinfo.user.userArray.id, result.assets[0].uri);
      try {

        const response = await axios.post(`https://marriage-application.onrender.com/setimages`, {
          "image": result.assets[0].uri,
          "id": userinfo.user.userArray.id,
        });
        if (response.status) {
          dispatch(userMethod(response.data));
        }

      } catch (err) {
        Alert.alert(err)
      }

    }
  };
  const handleEditProfile = () => {
    setIsEditMode(true);
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.post(`https://marriage-application.onrender.com/updateuser`, {
        "id": userinfo.user.userArray.id,
        "name": editeprofileName,
        "pio": editeBio
      });
      if (response.status === 200) {
        setIsEditMode(false);
        dispatch(userMethod(response.data));
      }
    } catch (error) {
      console.error('Error fetching data: ', error.data);
    }

  };
  console.log("images1", images1[0]);

  const handleChooseImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
      allowsEditing: true, // Enable image editing (cropping)
      aspect: [1, 1], // Set aspect ratio to 1:1 (square)
      // Set maximum dimensions based on device screen size
      // Adjust these values as needed to fit your design
      maxWidth: Constants.windowWidth,
      maxHeight: Constants.windowWidth,
    });

    if (!pickerResult.canceled) {
      if (
        pickerResult.assets &&
        pickerResult.assets.length > 0 &&
        pickerResult.assets[0].uri
      ) {
        setProfilePicture(pickerResult.assets[0].uri);
        try {
          const response = await axios.post(`https://marriage-application.onrender.com/updateuser`, {
            "id": userinfo.user.userArray.id,
            "image": pickerResult.assets[0].uri,
          });
          if (response.status === 200) {
            Alert.alert(response.data)

          }
        } catch (error) {
          console.error('Error fetching data: ', error.data);
        }



      } else {
        console.log("No URI provided for the selected image");
      }
    } else {
      console.log("Image selection cancelled");
    }
  };
  console.log(userinfo.user.userArray.image_array);
  const goToSubscription = () => {
    useNavigation.navigate("Subscription");
  };

  const openImage = (image, index) => {
    // Accept index parameter
    setSelectedImage(image);
    setSelectedImageIndex(index); // Store the index of the selected image
    setModalVisible(true);
  };

  const removeImage =async (selectedImage) => {
    console.log("selectedImage",selectedImage);  try {

      const response = await axios.post(`https://marriage-application.onrender.com/deleteimage`, {
        "image": selectedImage,
        "id": userinfo.user.userArray.id,
      });
      if (response.status) {
        console.log(response.data);
        dispatch(userMethod(response.data));
        setModalVisible(false);

      }

    } catch (err) {
      Alert.alert(err)
    }
  };

  const openProfileImageOptions = () => {
    Alert.alert(
      "Profile Image Options",
      "Choose an option for the profile image",
      [
        {
          text: "Change Image",
          onPress: () => handleChooseImage(),
        },
        {
          text: "Remove Image",
          onPress: async () => {
            try {
              const response = await axios.post(`https://marriage-application.onrender.com/updateuser`, {
                "id": userinfo.user.userArray.id,
                "image": '',
              });
              if (response.status === 200) {
                Alert.alert('image removed')
                setProfilePicture(require("./assets/bblank.jpg"))

              }
            } catch (error) {
              console.error('Error fetching data: ', error.data);
            }

          },
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };

  // const [images, setImages] = useState([
  //   require("./assets/1.png"),
  //   require("./assets/2.png"),
  //   require("./assets/3.png"),
  //   require("./assets/4.png"),
  // ]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <TouchableOpacity onPress={openProfileImageOptions}>
              <Image
                source={{ uri: profilePicture ? profilePicture : userinfo.user.userArray.image }}
                style={styles.profileImageLarge}
              />
            </TouchableOpacity>
            <View style={styles.profileInfoContainer}>
              {isEditMode ? (
                <TextInput
                  style={styles.editableProfileInput}
                  value={editeprofileName ? editeprofileName : userinfo.user.userArray.name}
                  onChangeText={(text) => setEditeProfileName(text)}
                />
              ) : (
                <Text style={styles.profileInfo}>{userinfo.user.userArray.name}</Text>
              )}
              <Text style={styles.profileDetails}>{userinfo.user.userArray.city},{userinfo.user.userArray.country}</Text>
              <Text style={styles.profileDetails}>اخر تواجد قبل {userinfo.user.userArray.active_status && userinfo.user.userArray.active_status.substring(12)} دقائق</Text>
            </View>
          </View>
          <View style={styles.bioContainer}>
            <View style={styles.bioDivider} />
            {isEditMode ? (
              <TextInput
                style={styles.editableProfileInput}
                multiline
                value={editeBio ? editeBio : userinfo.user.userArray.pio}
                onChangeText={(text) => setEditeBio(text)}
              />
            ) : (
              <Text style={styles.profileDetails}>{userinfo.user.userArray.pio}</Text>
            )}
            {isEditMode && (
              <TouchableOpacity
                style={{ marginTop: 10 }}
                onPress={handleSaveChanges}
              >
                <Text style={styles.editButton}>حفظ التغييرات</Text>
              </TouchableOpacity>
            )}
            {!isEditMode && (
              <TouchableOpacity
                style={{ marginTop: 10 }}
                onPress={handleEditProfile}
              >
                <Text style={styles.editButton}>تعديل على ملفك</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.subscriptionContainer}>
          <Text style={styles.subscriptionText}>الباقة الحالية</Text>
        </View>

        <View style={styles.subscriptionOptionsContainer}>
          {subscription ?
            <TouchableOpacity
              onPress={goToSubscription}
              style={styles.subscriptionOption}
            >
              <Text style={styles.subscriptionOptionText}>{subscription.subscription}</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Subscription')
              }}
            >
              <Text>برجاء اختيار باقة مناسبة</Text>

            </TouchableOpacity>
          }
        </View>

        <View style={styles.impContainer}>
          <Text style={styles.additionalTitleText}>أساسيات</Text>
          <View style={styles.groupParent}>
            <TouchableOpacity style={styles.button}>
              <View style={styles.rectangle} />
              <Text style={styles.buttonText}>❤️ {userinfo.user.userArray.marital_status_woman_man}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View style={styles.rectangle} />
              <Text style={styles.buttonText}>🌙 {userinfo.user.userArray.religious_denomination}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View style={styles.rectangle} />
              <Text style={styles.buttonText}>{userinfo.user.userArray.skin_woman_man}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View style={styles.rectangle} />
              <Text style={styles.buttonText}>{userinfo.user.userArray.height_woman}cm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View style={styles.rectangle} />
              <Text style={styles.buttonText}>{userinfo.user.userArray.weight_woman}kg</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View style={styles.rectangle} />
              <Text style={styles.buttonText}>🚬 {userinfo.user.userArray.smoking_drinking_woman_man}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View style={styles.rectangle} />
              <Text style={styles.buttonText}> {userinfo.user.userArray.work_status_woman_man}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View style={styles.rectangle} />
              <Text style={[styles.buttonText, { fontSize: 10 }]}> {userinfo.user.userArray.need_kids_woman_man}👧</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View style={styles.rectangle} />
              <Text style={styles.buttonText}>{userinfo.user.userArray.educational_level_woman_man}</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.habitsContainer}>
          <Text style={styles.habitsText}>عاداتي</Text>
        </View>
        <View style={styles.groupParent}>
          {userinfo.user.userArray.daily_habits_woman && userinfo.user.userArray.daily_habits_woman.map((item, key) => {
            return (
              <TouchableOpacity style={styles.button} key={key}>
                <Text style={styles.buttonText}> {item} </Text>
              </TouchableOpacity>
            )
          })}
        </View>


        <View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              margin: 24,
            }}
          >
            <TouchableOpacity
              onPress={openImagePickerAsync}
            >
              <Text style={styles.galleryTitle}>اضافة صور</Text>
            </TouchableOpacity>
            <Text style={styles.galleryTitleText}>صوري</Text>

          </View>

          {/* {userinfo.user.userArray.image_array ? userinfo.user.userArray.image_array.map((image, index) => ( */}
<View style={styles.galleryImagesContainer}>
          {userinfo.user.userArray.image_array ?
            userinfo.user.userArray.image_array.map((image, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => openImage(image, index)}
                  style={styles.galleryImageContainer}
                >


                  <Image source={{ uri: image }} style={styles.galleryImage} />
                </TouchableOpacity>

              )
            })
            :
            <Text>لا توجد صور</Text>
          }
        </View>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {selectedImage && (
                <Image source={{uri:selectedImage}} style={styles.fullSizeImage} />
              )}
              {/* Add the remove button */}
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeImage(selectedImage)}
              >
                <Text style={styles.textStyle}>حذف الصورة</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>إغلاق</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileContainer: {
    flexDirection: "row-reverse", // Align children from right to left
    justifyContent: "flex-end", // Align children to the end of the container
    alignItems: "center", // Vertically center the items
    marginBottom: 10, // Add some margin bottom for spacing
  },
  profileImageLarge: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginStart: 20,
  },
  profileInfoContainer: {
    justifyContent: "center",
  },
  profileInfo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "right",
  },
  profileDetails: {
    fontSize: 12,
    color: "#666666",
    textAlign: "right",
  },
  bioContainer: {
    marginBottom: 20,
  },
  bioDivider: {
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    marginBottom: 10,
  },
  editableProfileInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: "#485868",
    padding: 10,
    borderRadius: 20,
    color: "white",
    textAlign: "center",
  },
  subscriptionContainer: {
    marginTop: 20,
    marginRight: 20,
  },
  subscriptionText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "right", // Aligns subscription text to the right
  },
  subscriptionOptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 10,
  },
  subscriptionOption: {
    width: "45%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#333333",
    padding: 5,
    alignItems: "center",
  },
  subscriptionOptionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  impContainer: {
    marginRight: 20,
    marginTop: 20,
    alignItems: "flex-end", // Ensures "اساسيات" aligns to the right
  },
  additionalTitleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333", // Added color specification
    textAlign: "right", // Aligns text to the right
  },
  groupParent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  button: {
    width: 110,
    height: 34,
    borderWidth: 1,
    borderColor: "#485868",
    borderRadius: 13,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 14,
    color: "pink",
  },
  galleryTitleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333", // Added color specification
    textAlign: "right", // Aligns text to the right
    paddingBottom: 10,
  },
  habitsContainer: {
    marginRight: 20,
    marginTop: 20,
    alignItems: "flex-end", // Ensures "عاداتي" aligns to the right
  },
  habitsText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333", // Added color specification
    textAlign: "right", // Aligns text to the right
  },
  galleryImagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 5, // Add padding to create spacing between images
  },
  galleryImageContainer: {
    width: "30%",
    aspectRatio: 1, // Keep the image square
    marginBottom: 12, // Add margin bottom for spacing
    borderRadius: 10, // Apply border radius for a softer look
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff", // Optional: Add a background color for a better shadow effect
    marginHorizontal:3
  },
  galleryImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10, // Apply border radius for a softer look
  },
  addPhotosText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ff4d4d", // Added color specification
    textAlign: "right", // Aligns "اضافة صور" text to the right
  },
  galleryImagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start", // Aligns images to start from the right
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  removeButton: {
    marginTop: 10,
    backgroundColor: "#ff4d4d",
    padding: 10,
    borderRadius: 20,
  },

  modalView: {
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%", // Adjust as needed
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
  },
  fullSizeImage: {
    width: 250, // Adjust to keep the image square
    height: 250, // Match width for square aspect ratio
    resizeMode: "contain",
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Profile;