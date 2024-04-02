import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AboutUsScreen = () => {
  const navigation=useNavigation()

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
      </View>
      <Text style={styles.title}>حول تطبيق باءه</Text>
      <Text style={styles.paragraph}>


        تطبيق باءه هو تطبيق زواج إسلامي مصمم لمساعدة المستخدمين الجادين في العثور على نصفهم الآخر وفقًا للمبادئ الإسلامية.

        مهمتنا هي توفير منصة حيث يمكن للأفراد الاتصال بأشخاص يشاركونهم الرؤية والالتزام بالزواج بطريقة حلال ومحترمة.

        تشمل ميزات تطبيقنا [قائمة بالميزات الرئيسية مثل إنشاء الملف الشخصي، ومرشحات البحث، والرسائل، إلخ].

        نحن ندرك أهمية الخصوصية والتحفظ في مسائل الزواج، ونحن ملتزمون بتوفير بيئة آمنة ومأمونة لمستخدمينا للتفاعل.

        للاستفسارات، الدعم، أو التغذية الراجعة، يرجى الاتصال بنا على [عنوان البريد الإلكتروني / رقم الهاتف].

        شكرًا لاختيارك تطبيق باءه لمساعدتك في رحلتك للعثور على شريك حياتك.

        تطبيق باءه - ربط القلوب بالتوافق الحلال

      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'right',
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

export default AboutUsScreen;
