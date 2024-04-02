import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PrivacyPolicyScreen = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
            <View style={styles.circularButtonsContainer}>

          <TouchableOpacity
          style={styles.circularButton}
          onPress={()=>{
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#9B9B9B" />
        </TouchableOpacity>
        </View>
      <Text style={styles.title}>سياسة الخصوصية</Text>
      <Text style={styles.paragraph}>
      

تلتزم تطبيق باءه بحماية خصوصية مستخدميه. تشرح هذه السياسة كيفية جمعنا، واستخدامنا، وكشفنا، وحماية معلوماتك عند استخدام تطبيقنا على الهواتف المحمولة.

قد نجمع بعض المعلومات تلقائيًا عند استخدامك لتطبيقنا، مثل نوع جهازك، عنوان IP، نظام التشغيل، ومعلومات الاستخدام.

قد نستخدم المعلومات التي نجمعها لتقديم خدماتنا وتحسينها، وتخصيص تجربتك، والتواصل معك، وتحليل اتجاهات الاستخدام.

نحن لا نشارك معلوماتك الشخصية مع أطراف ثالثة إلا كما هو موضح في هذه السياسة أو بموافقتك.

باستخدام تطبيقنا، فإنك توافق على جمع واستخدام المعلومات كما هو موضح في هذه السياسة.

للمزيد من المعلومات حول ممارسات الخصوصية الخاصة بنا، أو إذا كان لديك أسئلة أو مخاوف، يرجى الاتصال بنا على [عنوان البريد الإلكتروني / رقم الهاتف].

تم تحديث سياسة الخصوصية هذه في آخر مرة في [تاريخ التحديث].

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

export default PrivacyPolicyScreen;
