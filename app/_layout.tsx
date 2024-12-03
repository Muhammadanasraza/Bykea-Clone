import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ThemedText } from '@/components/ThemedText';
SplashScreen.preventAutoHideAsync();



const SCREEN_HIGHT = Dimensions.get("screen").height;



export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }




  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <View style={''}>
          <MaterialIcons name="menu" size={30} color="green" />
        </View>
        <Text style={styles.headertext}>
          BYKEA

        </Text>
        <View style={''}>
          <MaterialIcons name="add-call" size={30} color="green" />

        </View>
      </View>

      {/* main Img Sec */}
      <View style={styles.mainImg}>
        <Image
          style={styles.bannerImg}
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlehOF0EnLGJDTPc3TrBz93V25TIul_sNrQ&s" }}
        />





        <View style={styles.infoView}>

          <MaterialIcons name="messenger-outline" size={24} color="#1e872e" />

          <ThemedText style={styles.border}>|</ThemedText>
          <MaterialIcons name="attach-money" size={24} color="#1e872e" />


        </View>
      </View>

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header: {
    height: 50,
    fontWeight: "bold",
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16
  },
  headertext: {
    fontWeight: "900",
    fontFamily: "monospace",
    fontSize: 30,
    color: "#1e872e",
    letterSpacing: 2
  },
  // main img 
  mainImg: {
    height: SCREEN_HIGHT / 3.7,
    backgroundColor: "#ced5d1",
    paddingHorizontal: 20,
    paddingTop: 10
  },
  bannerImg: {
    height: "88%",
    borderRadius: 12,
  },
 
  infoView: {
    color: "#1e872e",
    height: 45,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#fff",
    marginTop: 10,

    marginHorizontal: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4


  },
  border: {
    fontSize: 30,
    fontWeight: "semibold",
    color: "grey",
    
  },
})
