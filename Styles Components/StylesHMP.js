import { cloneElement } from "react";
import { StyleSheet } from "react-native";

const stylesHMP = StyleSheet.create({
    //TOP AREA 
    
    darkModeToggler: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },

    darkDarkModeToggler: {
        shadowColor: 'rgb(219, 167, 36)',
    },

    darkModeIcon: {
        position: 'absolute', 
        left: 2, 
        zIndex: 1,
    },

    darkModeSwitch: {
        transform: [{ scaleX: 1.3 },{ scaleY: 1.3 }], 
    },  

    homePageContainer: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },

    topContainer: {
        width: '100%',
        flex: 1,
    }, 

    topArea: {
        height: 90,
        width: '100%',
        backgroundColor: 'transparent',
        padding: 10,        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute', 
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,  
    },

    darkTopArea: {
        backgroundColor: 'transparent',
        
    },

    topTextHeader: {
        color: 'rgb(20, 22, 58)',
        fontFamily: 'RubikMonoOne',
        fontSize: 16,
        marginLeft: 10,
        backgroundColor: 'rgb(253, 253, 253)',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },

    darkTopTextHeader: {
        color: 'rgb(31, 31, 33)',
        backgroundColor: 'rgb(219, 167, 36)',
        shadowColor: 'rgb(219, 167, 36)',
    },
    
    nameHeaderArea: {
        backgroundColor: 'transparent',
    }, 

    sampleText: {
        color: 'black',
    },

    //CONTENT AREA 

    scrollView: {
        flex: 1,
        backgroundColor: 'rgb(244, 239, 235)',
    },

    darkScrollView: {
        backgroundColor: 'rgb(37, 34, 32)',
    },

    imageContainer: {
        backgroundColor: 'rgb(244, 239, 235)',
        width: '100%',
        paddingVertical: 20,
        height: 750,
    },

    darkImageContainer: {
        backgroundColor: 'rgb(37, 34, 32)',
    },  

    imageFormat: {
        width: 250,
        height: 250,
        borderRadius: 220,
    },
     
    imageArea: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20,
        shadowColor: 'rgb(20, 22, 58)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },

    fullNameBA: {
        fontFamily: 'Rubik600SB',
        fontSize: 22,
        color: 'rgb(20, 22, 58)',
    },

    darkFullNameBA: {
        color: 'rgb(246, 183, 25)',
    },

    bioText1: {
        color: 'rgb(20, 22, 58)',
        fontFamily: 'Rubik400R',
        fontSize: 14,
    },

    darkBioText1: {
        color: 'rgb(233, 231, 231)',
    },

    bioText2: {
        color: 'rgb(20, 22, 58)',
        fontFamily: 'Rubik500M',
        fontSize: 14,
    },

    darkBioText2: {
        color: 'rgb(233, 231, 231)',
    },

    welcomeText: {
        color: 'rgb(49, 47, 47)',
        fontFamily: 'Rubik700B',
        fontSize: 17
    },

    darkWelcomeText: {
        color: 'rgb(233, 233, 231)',
    },

    bioArea: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30,
        gap: 0,
    },

    linksContainer: {
        backgroundColor: 'transparent',
        height: 300,
    },
      
    linksIcons: {
        flexDirection: 'row',
        marginLeft: 10,
        width: 110,
    }, 

    iconsArea: {
        gap: 30, 
        marginTop: 130,
        marginLeft: 20,
    },
      
    iconsDesign: {
        fontSize: 25,
    },
      
    darkIconDesign: {
        color: 'rgb(219, 167, 36)',
    },
      
    arrowDownArea: {
        position: 'absolute',
        bottom: -40,
        right: 20,
    },
      
    buttonSeeAboutMe: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    
    arrowDownIcon: {
        color: 'rgb(31, 31, 33)',
        fontSize: 40,
    },

    darkArrowDownIcon: {
        color: 'rgb(219, 167, 36)',
    },

    //ABOUT ME
    
    aboutMeContainer: {
        backgroundColor: 'transparent',
        height: 900,
        width: '100%',
        alignItems: 'center',
    },

    aboutMeHeaderText: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        fontFamily: 'Rubik500M',
        marginTop: 100,
        backgroundColor: 'rgb(20, 22, 58)',
        color: 'rgb(253, 253, 253)',
        paddingVertical: 3,
        width: 150,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },

    darkAboutMeHeaderText: {
        backgroundColor: 'rgb(219, 167, 36)',
        shadowColor: 'rgb(219, 167, 36)',
        color: 'rgb(31, 31, 33)',
    }, 
    
    aboutMeContent: {
        marginHorizontal: 30,
        marginTop: 30,
        flexDirection: 'column',
    },

    aboutMeContentBioArea: {
        backgroundColor: 'transparent',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        width: 390,
        marginHorizontal: 30,
        borderWidth: 2,
        borderColor: 'rgb(20, 22, 58)',
        alignSelf: 'center',
    },
    
    darkAboutMeContentBioArea: {
        backgroundColor: 'transparent',
        borderColor: 'rgb(219, 167, 36)',
    },

    aboutMeBio: {
        fontSize: 16,
        color: 'rgb(20, 22, 58)',
        fontFamily: 'Rubik500M',
        textAlign: 'justify',

    },

    darkAboutMeBio: {
        color: 'rgb(219, 167, 36)',
        backgroundColor: 'tranparent',
    },
    
    skillsContainer: {
        alignItems: 'center',
    },

    skillIcon: {
        color: 'rgb(20, 22, 58)',
        fontSize: 20,
    },

    darkSkillIcon: {
        color: 'rgb(219, 167, 36)',
    },  

    skillsList: {
        flexDirection: 'row',
        flexWrap: 'wrap',  
        justifyContent: 'space-between',
        marginVertical: 0,
        width: '80%', 
    },

    skillsHeaderText: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        fontFamily: 'Rubik500M',
        backgroundColor: 'rgb(20, 22, 58)',
        color: 'rgb(253, 253, 253)',
        paddingVertical: 3,
        width: 150,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        marginVertical: 30,
    },

    darkSkillsHeaderText: {
        backgroundColor: 'rgb(219, 167, 36)',
        color: 'rgb(31, 31, 33)',
        shadowColor: 'rgb(219, 167, 36)',
    },

    skillsContent: {
        backgroundColor: 'transparent',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        width: '48%', 
        alignItems: 'center',  
        justifyContent: 'center',  
        borderWidth: 2,
        borderColor: 'rgb(20, 22, 58)',
        marginBottom: 10,  
    },

    darkSkillsContent: {
        backgroundColor: 'transparent',
        borderColor: 'rgb(219, 167, 36)',
    },
    
    skillsText: {
        textAlign: 'center',
        color: 'rgb(20, 22, 58)',
        fontFamily: 'Rubik500M',

    },

    darkSkillsText: {
        color: 'rgb(219, 167, 36)',
    },
    
    linksIconsAboutMe: {
        marginLeft: 0,
        width: 100,
        alignItems: 'center',
    },

    iconsAreaAboutMe: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        alignSelf: 'center',
        gap: 0,
        marginTop: 20,
        marginLeft: 0,
    },

    arrowDownAreaAboutMe: {
        position: 'absolute',
        bottom: -120,
        right: 20,
    },
    
    //PROJECTS

    projectsContainer: {
        width: '100%',
        backgroundColor: 'transparent',
        paddingVertical: 20,
        paddingHorizontal: 10,
        height: 1300,
        alignItems: 'center',
        alignSelf: 'center',
    },  

    projectHeader: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        fontFamily: 'Rubik500M',
        backgroundColor: 'rgb(20, 22, 58)',
        color: 'rgb(253, 253, 253)',
        paddingVertical: 3,
        width: 190,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        marginVertical: 30,

    },

    darkProjectHeader: {
        backgroundColor: 'rgb(219, 167, 36)',
        color: 'rgb(31, 31, 33)',
        shadowColor: 'rgb(219, 167, 36)',
    },  

    projectFlatlist: {
        gap: 0,
    },

    projectItem: {
        backgroundColor: 'transparent',
        padding: 10,
        width: 300,
        alignItems: 'center',
        marginVertical: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 2,
        borderColor: 'rgb(20, 22, 58)',
        gap: 5,
    },

    darkProjectItem: {
        borderColor: 'rgb(219, 167, 36)',
        backgroundColor: 'transparent',
    },

    projectTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgb(20, 22, 58)',
    },

    darkProjectTitle: {
        color: 'rgb(219, 167, 36)',
    },

    projectDescription: {
        fontSize: 14,
        color: 'rgb(67, 67, 66)',
        textAlign: 'center',
    },

    darkProjectDescription: {
        color: 'rgb(209, 208, 205)',
    }, 

    projectImage: {
        width: 200,
        height: 100,
    },

    githubText: {
        color: 'rgb(20, 22, 58)',
        fontFamily: 'Rubik500M'
    },  

    darkGitHubText: { 
        color: 'rgb(208, 176, 33)',
    },

    arrowDownAreaProjects: {
        position: 'absolute',
        bottom: 10,
        right: 20,
    },
});

export default stylesHMP;
