import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, Text, TouchableOpacity, View, StatusBar } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from "./styles";

function Header(){
    function helpButton(){
        console.log("Need to implement Help part here. This just shows a message in log for now.");
    };
    return (
//         <View
//   style={{
//     flexDirection: "row",           // horizontal layout
//     justifyContent: "space-between",// left and right edges
//     alignItems: "center",           // vertically center items
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     width: "100%",                  // ensure it stretches full screen
//   }}
// >
//   {/* Left: App icon + name */}
//   <View style={{ flexDirection: "row", alignItems: "center" }}>
//     <MaterialIcons name="music-note" size={28} color="#4B7BE5" />
//     <Text style={{ fontSize: 20, fontWeight: "700", marginLeft: 8 }}>
//       MyAppName
//     </Text>
//   </View>

//   {/* Right: Help icon */}
//   <TouchableOpacity onPress={() => console.log("Help clicked")}>
//     <MaterialIcons name="help-outline" size={28} color="#4B7BE5" />
//   </TouchableOpacity>
// </View>
        <View style={styles.headerContainer}>
            {/* Top left - Logo and App name */}
            <View style={styles.logoSection}>
                <View style={styles.logoPlaceholder}>
                    <Text style={styles.logoText}>✨</Text>
                </View>
                <Text style={styles.appName}>Mavibe</Text>
            </View>
            {/* Top Right - Help button */}
            <TouchableOpacity style={styles.helpButton} onPress={helpButton}>
                <MaterialIcons 
                    name="help-outline"
                    size={28}
                    color="#374151"
                />
            </TouchableOpacity>
        </View>
    );
}

function SearchAndFilter(){
    return (
        <View></View>
    );
}

function ArtistFlatList(){
    return (
        <View></View>
    );
}

export default function HomeScreen(){
    return (
        <LinearGradient
            colors={["#FCE4EC", "#FDEEE4", "#FCE4EC"]}
            style={{flex: 1, justifyContent: "center", alignItems: "center"}}
        >
        <SafeAreaView style={styles.container}>
            {/* This section displays the app name, logo and help icon on top */}
            <Header/>
            {/* This section displays the search or filter options */}
            <SearchAndFilter/>
            {/* This section displays the list of artists */}
            <ArtistFlatList/>
        </SafeAreaView>
        </LinearGradient>
    );
}