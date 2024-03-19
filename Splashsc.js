import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import AsyncStorage from '@react-native-async-storage/async-storage';


const Splashsc = () => {
	const [data, setData] = useState('')
	useEffect(() => {
		const checkLogin = async () => {
			try {
				console.log("login",await AsyncStorage.getItem("login"));

				const token = await AsyncStorage.getItem("login");
				if (token) {
					const timer = setTimeout(() => {
						navigation.replace('MainHome');
					}, 3000);
					return () => clearTimeout(timer);

				} else {
					const timer = setTimeout(() => {
						navigation.replace('SplashTwo');
					}, 3000);
					return () => clearTimeout(timer);

				}
			} catch (err) {
				Alert.alert(err)
			}
		};
		checkLogin();


	}, []);

	const navigation = useNavigation(); // Initialize useNavigation

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require('./image/baa.png')}
					resizeMode="contain"
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		width: 100,
		alignItems: 'center',
	},
	image: {
		width: 450,
		height: 450,
	},
});

export default Splashsc;