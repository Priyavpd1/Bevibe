import { Dispatch, SetStateAction, use, useState } from "react";
import { Dimensions, View, Text, TextInput, TouchableOpacity } from "react-native";
import { supabase } from "../lib/supabase";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

interface LoginFormProps
{
  email : string,
  setEmail : Dispatch<SetStateAction<string>>;
  password : string;
  setPassword : Dispatch<SetStateAction<string>>;
  loading : boolean;
  setLoading : Dispatch<SetStateAction<boolean>>; //boolean lowercase is primitive type, Boolean uppercase is wrapper object type which is almost never used.
  message : string;
  setMessage : Dispatch<SetStateAction<string>>
  error : string;
  setError : Dispatch<SetStateAction<string>>;
}

interface SignupFormProps extends LoginFormProps
{
  name : string;
  setName : Dispatch<SetStateAction<string>>;
}

function SignupForm({name, setName, email, setEmail, password, setPassword,
        loading, setLoading, message, setMessage, error, setError} : SignupFormProps)
{
  async function  signUpWithEmail()
  {
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signUp({
      email, password
    });
    if (error)
      setError(error.message);
    setLoading(false);
  }
  return (
    <View>
      <TextInput
      placeholder="Name"
      value={name}
      onChangeText={setName} 
      style={styles.loginTextInput}
      />
      <TextInput
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
      style={styles.loginTextInput}
      />
      <TextInput
      placeholder="Password"
      value={password}
      onChangeText={setPassword}
      style={styles.loginTextInput}
      secureTextEntry
      />
      <TouchableOpacity
        style={styles.defaultFormButton}
        onPress={signUpWithEmail}
        disabled={loading}
      >
        <Text style={{ color: "#fff",
                        fontSize: 18, 
                        textAlign: "center", 
                        fontWeight: "600" }}>
              {loading ? "Loading..." : "Create a New Account"}
        </Text>
      </TouchableOpacity>
      {message ? <Text>{message}</Text> : null}
      {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
    </View>
  );
}

function LoginForm({ email, setEmail, password, setPassword,
        loading, setLoading, message, setMessage, error, setError} : LoginFormProps)
{
  async function  signInWithEmail()
  {
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({
      email, password
    });
    if (error)
      setError(error.message);
    setLoading(false);
  }
  return (
    <View>
      <TextInput 
      placeholder="Email" 
      value={email} 
      onChangeText={setEmail} 
      style={styles.loginTextInput}
      />
      <TextInput
      placeholder="Password"
      value={password}
      onChangeText={setPassword}
      style={styles.loginTextInput}
      secureTextEntry/>
      <TouchableOpacity
        style={styles.defaultFormButton}
        onPress={signInWithEmail}
        disabled={loading}
      >
        <Text style={{ color: "#fff", 
                        fontSize: 18, 
                        textAlign: "center", 
                        fontWeight: "600" }}>
              {loading ? "Loading..." : "Login"}
        </Text>
      </TouchableOpacity>
      {message ? <Text>{message}</Text> : null}
      {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
    </View>
  );
}

export default function AuthScreen()
{
  const [isSignup, setIsSignup] = useState(false); //Toggle between SignUp and Login
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [name, setName]         = useState(""); //Only for SignUp
  const [loading, setLoading]   = useState(false);
  const [message, setMessage]   = useState("");
  const [error, setError]       = useState("");

  return (
    <LinearGradient
    colors={["#FCE4EC", "#FDEEE4", "#FCE4EC"]}
    style={{flex: 1, justifyContent: "center", alignItems: "center"}}
    >
    <Text style={{position: "absolute", fontSize: 30, top: 100, left: 50}}>✨</Text>
    <Text style={{position: "absolute", fontSize: 50, top: 150, left: 300}}>✨</Text>
    <Text style={styles.appName}>
      Mavibe
    </Text>
    <View>
      {
        isSignup ? (
          <SignupForm
            email       = {email}
            setEmail    = {setEmail}
            password    = {password}
            setPassword = {setPassword}
            name        = {name}
            setName     = {setName}
            loading     = {loading}
            setLoading  = {setLoading}
            message     = {message}
            setMessage  = {setMessage}
            error       = {error}
            setError    = {setError}
          />
        ) : (
          <LoginForm
            email       ={email}
            setEmail    = {setEmail}
            password    = {password}
            setPassword = {setPassword}
            loading     = {loading}
            setLoading  = {setLoading}
            message     = {message}
            setMessage  = {setMessage}
            error       = {error}
            setError    = {setError}
          />
        )
      }
      <TouchableOpacity
        style={[styles.defaultFormButton,{
          backgroundColor: isSignup ? "#F8BBD0" : "#F8BBD0",
        }]}
        onPress={() => setIsSignup(!isSignup)}
      >
        <Text
          style={{
            color: isSignup ? "#fff" : "#fff",
            fontSize: 16,
            textAlign: "center",
            fontWeight: 600
          }}
        >
          {isSignup ? "Login" : "Create a New Account"}
        </Text>
      </TouchableOpacity>
    </View>
    <Text style={{position: "absolute", fontSize: 50, top: 600, left: 50}}>✨</Text>
    <Text style={{position: "absolute", fontSize: 30, top: 700, left: 300}}>✨</Text>
    </LinearGradient>
  );
}

// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Hello and Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12',
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           {`Tap the Explore tab to learn more about what's included in this starter app.`}
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           {`When you're ready, run `}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
