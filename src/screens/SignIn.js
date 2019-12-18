// import React from "react";
// import { View } from "react-native";
// import { Card, Button, FormLabel, FormInput } from "react-native-elements";
// import { onSignIn } from "../../Auth";

// export default ({ navigation }) => (
//   <View style={{ paddingVertical: 20 }}>
//     <Card>
//       <FormLabel>Username</FormLabel>
//       <FormInput placeholder="username..." />
//       <FormLabel>Password</FormLabel>
//       <FormInput secureTextEntry placeholder="password..." />

//       <Button
//         buttonStyle={{ marginTop: 20 }}
//         backgroundColor="#03A9F4"
//         title="SIGN IN"
//         onPress={() => {
//           onSignIn().then(() => navigation.navigate("SignedIn"));
//         }}
//       />
//     </Card>
//   </View>
// );