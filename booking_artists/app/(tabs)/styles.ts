import { StyleSheet } from "react-native";

const loginBaseButton = {
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 15,
    alignItems: "center" as const,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
};

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    //Styles For Login/SignUp Page
    loginTextInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        width: 300, 
        height: 50,
        marginVertical: 8,
        backgroundColor: '#fff', 
        paddingHorizontal: 15
    },
    defaultFormButton: {
        ...loginBaseButton,
        backgroundColor: "#FF4081",
    },
    //Styles For HomePage
    headerContainer: {
        //Need to check this again as it works on Phone but on laptop screen its not 100% width
        flexDirection: "row", //horizontal layout
        justifyContent: "space-between", //left and right edges
        alignContent: "center", //vertically center items
        paddingHorizontal: 20,
        paddingVertical: 15,
        paddingTop: 20,
        width: "100%", //ensures this styling stretches to full screen
    },
    logoSection: {
        flexDirection: "row",
        alignContent: "center",
    },
    logoPlaceholder: {
        width: 32,
        height: 32,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignContent: "center",
        // borderRadius: 8,
        // marginRight: 5,
        //Shadow for icon which arent required for now
        // shadowColor: "#000", 
        // shadowOffset: {width: 0, height: 1},
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        // elevation: 2,
    },
    logoText: {
        fontSize: 24,
    },
    appName: {
        fontSize: 24,
        fontWeight: 600,
        color: "#FF4081",
        letterSpacing: 0.5,
    },
    helpButton: {
        width: 32,
        height: 32,
        backgroundColor: "#fff",
        justifyContent: "center",
        // borderRadius: 20,
        // shadowColor: "#000",
        // shadowOffset: {width: 0, height: 1},
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        // elevation: 2,
    },
});