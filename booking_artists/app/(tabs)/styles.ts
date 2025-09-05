import { StyleSheet } from "react-native";

const loginBaseButton = {
    // width: "80%",
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
        backgroundColor: "#4B7BE5",
    }
});