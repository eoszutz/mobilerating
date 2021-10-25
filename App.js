import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AuthNav from "./components/screens/login/AuthNav";
import HomeNav from "./components/screens/home/HomeNav";
import AuthContext from "./components/shared/Auth";
import EnvContext from "./components/shared/Env";
import setting from "./components/shared/Settings";

export default function App() {
  const [user, setUser] = useState("test");
  const [token, setToken] = useState({})


  return (

      <EnvContext.Provider value={setting.apiURL}>
        <AuthContext.Provider value={{ user, setUser, token, setToken }}>
          <NavigationContainer>
            {user ? <HomeNav /> : <AuthNav />}
          </NavigationContainer>
        </AuthContext.Provider>
      </EnvContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
