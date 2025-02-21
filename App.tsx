import { SafeAreaView, StatusBar } from 'react-native';
import { useState } from 'react';
import stylesGlobal from './Styles Components/StylesGlobal';
import HomePage from './Components/HomePage';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView style={darkMode ? [stylesGlobal.safeAreaContainer, stylesGlobal.darkSafeAreaContainer] : stylesGlobal.safeAreaContainer}>
        <StatusBar barStyle={darkMode ? "light-content" : "dark-content"} />
        <HomePage darkMode={darkMode} setDarkMode={setDarkMode} />
    </SafeAreaView>
  );
}
