import React, { useState, useRef } from 'react';
import { Text, View, ActivityIndicator, Image, Pressable, ScrollView, FlatList, Switch, Linking, TouchableOpacity } from 'react-native';
import { useFonts, RubikMonoOne_400Regular } from '@expo-google-fonts/rubik-mono-one';
import { Rubik_300Light, Rubik_400Regular, Rubik_500Medium, Rubik_600SemiBold, Rubik_700Bold, Rubik_800ExtraBold } from '@expo-google-fonts/rubik';
import { AntDesign, Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import stylesHMP from '../Styles Components/StylesHMP';

const projectsData = [
    { 
        id: '1', 
        title: 'Website Portfolio', 
        description: 'A cool react native app.', 
        image: require('../Assets/webPortfolio.png'),
        github: 'https://github.com/KarlSalvacion/react-portfolio',
    },
    { 
        id: '2', 
        title: 'ToDo App', 
        description: 'A simple todo application', 
        image: require('../Assets/todo.png'),
        github: 'https://github.com/KarlSalvacion/todo-app',
    },
    { 
        id: '3', 
        title: 'Inventory Management System', 
        description: 'An inventory management system with complete CRUD applications', 
        image: require('../Assets/inventorySystem.png'),
        github: 'https://github.com/KarlSalvacion/midterm-project-react',
    },
    { 
        id: '4', 
        title: 'Airline Reservation System', 
        description: 'A luxurious airline reservation system.', 
        image: require('../Assets/solaris.png'),
        github: 'https://github.com/KarlSalvacion/final-project-group3-webdev',
    },
    { 
        id: '5', 
        title: 'PILLPAL', 
        description: 'A medicine and water tracking and alarm application.', 
        image: require('../Assets/pillpal.png'),
        github: 'https://github.com/KarlSalvacion/PILLPAL-Project',
    },
];


const HomePage = ({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const [fontsLoaded] = useFonts({
        RubikMonoOne: RubikMonoOne_400Regular,
        Rubik800B: Rubik_800ExtraBold,
        Rubik400R: Rubik_400Regular,
        Rubik600SB: Rubik_600SemiBold,
        Rubik300L: Rubik_300Light,
        Rubik500M: Rubik_500Medium,
        Rubik700B: Rubik_700Bold,
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

    const handleScrollToAboutMe = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: 850, animated: true });
        }
    };

    const handleScrollToProjects = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({y: 1700, animated: true});
        }
    };
    
    const handleScrollToTop = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({y: 0, animated: true});
        }
    };
    
    const openLink = (url: string) => {
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    };
    
    const skillIcons = {
        'C++': 'code',
        'JavaScript': 'js-square',
        'Python': 'python',
        'React': 'react',
        'React Native': 'mobile-alt',
        'MongoDB': 'database',
        'Figma': 'paint-brush',
        'UIPATH': 'robot',
    };

    return (
        <View style={stylesHMP.topContainer}>
            {/* TOP AREA */}
            <View style={darkMode ? [stylesHMP.topArea, stylesHMP.darkTopArea] : stylesHMP.topArea}>
            
                <View style={stylesHMP.nameHeaderArea}>
                    <Text style={darkMode ? [stylesHMP.topTextHeader, stylesHMP.darkTopTextHeader] : stylesHMP.topTextHeader}>
                        Karl's Portfolio
                    </Text>
                </View>
                <View style={darkMode ? [stylesHMP.darkModeToggler, stylesHMP.darkDarkModeToggler] : stylesHMP.darkModeToggler}>
                    <View style={stylesHMP.darkModeIcon}>
                        <Animated.View style={animatedIconStyle}>
                            <Feather name={darkMode ? 'moon' : 'sun'} size={20} color={iconColor} />
                        </Animated.View>
                    </View>

                    <Switch
                        value={darkMode}
                        onValueChange={handleToggle}
                        thumbColor={darkMode ? 'rgb(40, 40, 40)' : 'rgb(255, 255, 255)'}
                        trackColor={{
                            false: 'rgba(211, 211, 211, 0)',  
                            true: 'rgb(60, 56, 56)',
                        }}
                        ios_backgroundColor="rgb(20, 22, 58)"  
                        style={stylesHMP.darkModeSwitch}
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
                                source={require('../Assets/karl2x2.jpg')}
                                style={stylesHMP.imageFormat}
                            />
                        </View>
                        <View style={stylesHMP.bioArea}>
                            <Text style={darkMode ? [stylesHMP.welcomeText, stylesHMP.darkWelcomeText] : stylesHMP.welcomeText}>
                                WELCOME TO MY PORTFOLIO
                            </Text>
                            <Text style={darkMode ? [stylesHMP.fullNameBA, stylesHMP.darkFullNameBA] : stylesHMP.fullNameBA}>
                                Karl Vincent V. Salvacion
                            </Text>
                            <Text style={darkMode ? [stylesHMP.bioText1, stylesHMP.darkBioText1] : stylesHMP.bioText1}>
                                Third Year Computer Science Student
                            </Text>
                            <Text style={darkMode ? [stylesHMP.bioText2, stylesHMP.darkBioText2] : stylesHMP.bioText2}>
                                De La Salle Lipa
                            </Text>
                            
                        </View>
                        <View style={stylesHMP.linksContainer}>
                            <View style={stylesHMP.iconsArea}>
                                <TouchableOpacity onPress={() => openLink('https://github.com/KarlSalvacion')} style={stylesHMP.linksIcons}>
                                    <FontAwesome name="github" style={darkMode ? [stylesHMP.iconsDesign, stylesHMP.darkIconDesign] : stylesHMP.iconsDesign } />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => openLink('https://www.facebook.com/karlvincent.salvacion?mibextid=wwXIfr&rdid=SaEvHruQckl28U0O&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19GTc4xqYC%2F%3Fmibextid%3DwwXIfr')} style={stylesHMP.linksIcons}>
                                    <FontAwesome name="facebook"style={darkMode ? [stylesHMP.iconsDesign, stylesHMP.darkIconDesign] : stylesHMP.iconsDesign } />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => openLink('https://www.instagram.com/karl__salvacion/')} style={stylesHMP.linksIcons}>
                                    <FontAwesome name="instagram" style={darkMode ? [stylesHMP.iconsDesign, stylesHMP.darkIconDesign] : stylesHMP.iconsDesign } />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => openLink('mailto:karl_vincent_salvacion@dlsl.edu.ph')} style={stylesHMP.linksIcons}>
                                    <FontAwesome name="envelope" style={darkMode ? [stylesHMP.iconsDesign, stylesHMP.darkIconDesign] : stylesHMP.iconsDesign } />
                                </TouchableOpacity>
                            </View>
                            <View style={stylesHMP.arrowDownArea}>
                                <Pressable onPress={handleScrollToAboutMe} style={stylesHMP.buttonSeeAboutMe}>
                                    <AntDesign name="down" style={darkMode ? [stylesHMP.arrowDownIcon, stylesHMP.darkArrowDownIcon] : stylesHMP.arrowDownIcon} />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    
                    {/* ABOUT ME */}
                    <View style={stylesHMP.aboutMeContainer}>
                        <Text style={darkMode ? [stylesHMP.aboutMeHeaderText, stylesHMP.darkAboutMeHeaderText] : stylesHMP.aboutMeHeaderText}>
                            About Me
                        </Text>
                        <View style={stylesHMP.aboutMeContent}>
                            <View style={darkMode ? [stylesHMP.aboutMeContentBioArea, stylesHMP.darkAboutMeContentBioArea] : stylesHMP.aboutMeContentBioArea}>
                                <Text style={darkMode? [stylesHMP.aboutMeBio, stylesHMP.darkAboutMeBio] : stylesHMP.aboutMeBio }>
                                    My Name is Karl Vincent V. Salvacion, 
                                    I am a third year computer science student 
                                    studying in De La Salle Lipa. I have a creative
                                    passion for coding and a keen eye on attention to detail.
                                </Text>
                            </View>
                            <View style={stylesHMP.skillsContainer}>
                                <Text style={darkMode ? [stylesHMP.skillsHeaderText,stylesHMP.darkSkillsHeaderText] : stylesHMP.skillsHeaderText}>
                                    My Skills
                                </Text>
                            <View style={stylesHMP.skillsList}>
                                {['C++', 'JavaScript', 'Python', 'React', 'React Native', 'MongoDB', 'Figma', 'UIPATH'].map((skill, index) => (
                                    <View 
                                        key={index} 
                                        style={darkMode ? [stylesHMP.skillsContent, stylesHMP.darkSkillsContent] : stylesHMP.skillsContent}
                                    >
                                        <FontAwesome5 
                                            name={skillIcons[skill as keyof typeof skillIcons]} 
                                            style={darkMode ? [stylesHMP.skillIcon, stylesHMP.darkSkillIcon] : stylesHMP.skillIcon} 
                            
                                        />

                                        <Text style={darkMode ? [stylesHMP.skillsText, stylesHMP.darkSkillsText] : stylesHMP.skillsText}>
                                            {skill}
                                        </Text>
                                    </View>
                                ))}
                            </View>

                            <View>
                                <View style={stylesHMP.iconsAreaAboutMe}>
                                    <TouchableOpacity onPress={() => openLink('https://github.com/KarlSalvacion')} style={stylesHMP.linksIconsAboutMe}>
                                        <FontAwesome name="github" style={darkMode ? [stylesHMP.iconsDesign, stylesHMP.darkIconDesign] : stylesHMP.iconsDesign } />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => openLink('https://www.facebook.com/karlvincent.salvacion?mibextid=wwXIfr&rdid=SaEvHruQckl28U0O&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19GTc4xqYC%2F%3Fmibextid%3DwwXIfr')} style={stylesHMP.linksIconsAboutMe}>
                                        <FontAwesome name="facebook"style={darkMode ? [stylesHMP.iconsDesign, stylesHMP.darkIconDesign] : stylesHMP.iconsDesign } />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => openLink('https://www.instagram.com/karl__salvacion/')} style={stylesHMP.linksIconsAboutMe}>
                                        <FontAwesome name="instagram" style={darkMode ? [stylesHMP.iconsDesign, stylesHMP.darkIconDesign] : stylesHMP.iconsDesign } />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => openLink('mailto:karl_vincent_salvacion@dlsl.edu.ph')} style={stylesHMP.linksIconsAboutMe}>
                                        <FontAwesome name="envelope" style={darkMode ? [stylesHMP.iconsDesign, stylesHMP.darkIconDesign] : stylesHMP.iconsDesign } />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={stylesHMP.arrowDownAreaAboutMe}>
                                <Pressable onPress={handleScrollToProjects} style={stylesHMP.buttonSeeAboutMe}>
                                    <AntDesign name="down" style={darkMode ? [stylesHMP.arrowDownIcon, stylesHMP.darkArrowDownIcon] : stylesHMP.arrowDownIcon} />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    </View>

                    {/* PROJECTS SECTION */}
                    <View style={stylesHMP.projectsContainer}>
                        <Text style={darkMode ? [stylesHMP.projectHeader, stylesHMP.darkProjectHeader] : stylesHMP.projectHeader}>My Projects</Text>
                        <FlatList
                            style={stylesHMP.projectFlatlist}
                            data={projectsData}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity 
                                    onPress={() => item.github && openLink(item.github)} 
                                    style={darkMode ? [stylesHMP.projectItem, stylesHMP.darkProjectItem] : stylesHMP.projectItem}
                                    activeOpacity={0.7}
                                >
                                    <Image source={item.image} style={stylesHMP.projectImage} />
                                    <Text style={darkMode ? [stylesHMP.projectTitle, stylesHMP.darkProjectTitle] : stylesHMP.projectTitle}>
                                        {item.title}
                                    </Text>
                                    <Text style={darkMode ? [stylesHMP.projectDescription, stylesHMP.darkProjectDescription] : stylesHMP.projectDescription}>{item.description}</Text>

            
                                    {item.github && (
                                        <TouchableOpacity 
                                            onPress={() => openLink(item.github)} 
                                            style={stylesHMP.linksIcons}
                                        >
                                            <Text style={darkMode ? [stylesHMP.githubText, stylesHMP.darkGitHubText] : stylesHMP.githubText }>View on GitHub</Text>
                                        </TouchableOpacity>
                                    )}
                                </TouchableOpacity>
                            )}
                            scrollEnabled={false}
                        />
                        <View style={stylesHMP.arrowDownAreaProjects}>
                                <Pressable onPress={handleScrollToTop} style={stylesHMP.buttonSeeAboutMe}>
                                    <AntDesign name="up" style={darkMode ? [stylesHMP.arrowDownIcon, stylesHMP.darkArrowDownIcon] : stylesHMP.arrowDownIcon} />
                                </Pressable>
                            </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default HomePage;
