import { StyleSheet } from "react-native";

const stylesHMP = StyleSheet.create({
    //TOP AREA CONTAINER
    
    darkModeToggler: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
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
        backgroundColor: 'rgb(244, 239, 235)',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        padding: 10,        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute', 
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,  
    },

    darkTopArea: {
        backgroundColor: 'rgb(37, 34, 32)',
        
    },

    topTextHeader: {
        color: 'rgb(20, 22, 58)',
        fontFamily: 'RubikMonoOne',
        fontSize: 16,
        marginLeft: 10,
    },

    darkTopTextHeader: {
        color: 'rgb(219, 167, 36)',
    },
    
    nameHeaderArea: {
        backgroundColor: 'transparent',
    }, 

    sampleText: {
        color: 'black',
    },

    //CONTENT AREA CONTAINER

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
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        height: 750,
    },

    darkImageContainer: {
        backgroundColor: 'rgb(37, 34, 32)',
    },  

    imageFormat: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
     
    imageArea: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },

    bioArea: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonSeeProjects: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
    },

    projectsContainer: {
        width: '100%',
        backgroundColor: 'rgb(231,223,3)',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },  

    projectHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },

    projectItem: {
        backgroundColor: 'white',
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },

    projectTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    projectDescription: {
        fontSize: 14,
        color: 'gray',
    },
});

export default stylesHMP;
