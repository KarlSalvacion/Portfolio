import React, { useState, useRef } from 'react';
import { Text, View, ActivityIndicator, Image, Pressable, ScrollView, FlatList, Switch, StyleSheet } from 'react-native';
import { useFonts, RubikMonoOne_400Regular } from '@expo-google-fonts/rubik-mono-one';
import { AntDesign, Feather } from '@expo/vector-icons';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import stylesHMP from '../Styles Components/StylesHMP';

const projectsData = [
    { id: '1', title: 'Project 1', description: 'A cool React Native app.' },
    { id: '2', title: 'Project 2', description: 'A revolutionary AI chatbot.' },
    { id: '3', title: 'Project 3', description: 'A personal finance tracker.' },
    { id: '4', title: 'Project 4', description: 'A weather prediction model.' },
    { id: '5', title: 'Project 5', description: 'A social networking app.' },
];

const HomePage = ({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const [fontsLoaded] = useFonts({
        RubikMonoOne: RubikMonoOne_400Regular,
    });

    const thumbPosition = useSharedValue(0);

    const handleToggle = () => {
        setDarkMode(!darkMode);
        thumbPosition.value = withSpring(darkMode ? 0 : 1); 
    };

    const animatedIconStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: withSpring(darkMode ? 27 : 0, { damping: 10, stiffness: 100 }) }, 
            { rotate: withSpring(darkMode ? '0deg' : '270deg') } 
        ],
        opacity: withSpring(1), 
        scale: withSpring(1.1),
   }));
    
    const iconColor = darkMode ? 'rgb(231, 183, 23)' : 'rgb(43, 41, 43)';

    const scrollViewRef = useRef<ScrollView | null>(null);


    if (!fontsLoaded) {
        return <ActivityIndicator size="large" />;
    }

    const handleScrollToProjects = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: 800, animated: true });
        }
    };

    return (
        <View style={stylesHMP.topContainer}>
            {/* TOP AREA */}
            <View style={darkMode ? [stylesHMP.topArea, stylesHMP.darkTopArea] : stylesHMP.topArea}>
            
                <View style={stylesHMP.nameHeaderArea}>
                    <Text style={darkMode ? [stylesHMP.topTextHeader, stylesHMP.darkTopTextHeader] : stylesHMP.topTextHeader}>Karl Salvacion</Text>
                </View>
                <View style={stylesHMP.darkModeToggler}>
                    <View style={stylesHMP.darkModeIcon}>
                        <Animated.View style={animatedIconStyle}>
                            <Feather name={darkMode ? 'moon' : 'sun'} size={20} color={iconColor} />
                        </Animated.View>
                    </View>

                    <Switch
                        value={darkMode}
                        onValueChange={handleToggle}
                        thumbColor={darkMode ? "rgb(40, 40, 40)" : "rgb(255, 255, 255)"} // Thumb color (circle)
                        trackColor={{
                            false: "rgb(208, 208, 208)",
                            true: "rgb(60, 56, 56)", 
                        }}
                        style={[
                            stylesHMP.darkModeSwitch, 
                        ]}
                    />
                </View>
            </View>
    
            {/* SCROLLABLE CONTENT */}
            <ScrollView ref={scrollViewRef} style={darkMode ? [stylesHMP.scrollView, stylesHMP.darkScrollView] : stylesHMP.scrollView} contentContainerStyle={{ flexGrow: 1, paddingTop: 90 }}>
                <View style={stylesHMP.homePageContainer}>
                    {/* IMAGE AND BIO */}
                    <View style={darkMode ? [stylesHMP.imageContainer, stylesHMP.darkImageContainer] : stylesHMP.imageContainer}>
                        <View style={stylesHMP.imageArea}>
                            <Image
                                source={require('../Assets/mefr.webp')}
                                style={stylesHMP.imageFormat}
                            />
                        </View>
                        <View style={stylesHMP.bioArea}>
                            <Text style={stylesHMP.sampleText}>I'm a 3rd year Computer Science student with a passion for tech!</Text>
                            <Pressable onPress={handleScrollToProjects} style={stylesHMP.buttonSeeProjects}>
                                <Text style={stylesHMP.sampleText}>SEE PROJECTS!</Text>
                                <AntDesign name="down" size={20} />
                            </Pressable>
                        </View>
                    </View>
    
                    {/* PROJECTS SECTION */}
                    <View style={stylesHMP.projectsContainer}>
                        <Text style={stylesHMP.projectHeader}>My Projects</Text>
                        <FlatList
                            data={projectsData}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={stylesHMP.projectItem}>
                                    <Text style={stylesHMP.projectTitle}>{item.title}</Text>
                                    <Text style={stylesHMP.projectDescription}>{item.description}</Text>
                                </View>
                            )}
                            scrollEnabled={false}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default HomePage;
