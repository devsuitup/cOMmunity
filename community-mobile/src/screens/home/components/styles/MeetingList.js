import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
    root:{
        flex:1,
    },
    titleContainer: {
        flex: 0.1,
        paddingHorizontal: '2.5%',
        paddingVertical: '2.5%',
    },
    title: {
        color:'$whiteColor',
        fontSize:25,
        fontFamily:'montserrat',
    },
    contentContainer:{
        flex:1,
    },
    meetingCard: {
        height:200,
        width:175,
        marginHorizontal:'0.5rem',
        backgroundColor:'$redColor'

    },
    meetingCardTopContainer: {
        flex:1,
        position:'relative',
    },
    meetingCardTitle: {
        position:'absolute',
        color:'$whiteColor',
        top:'2%',
        left:'2.5%',
        fontFamily:'montserratBold',
    },
    meetingCardBottomContainer: {
        flex: 0.4,
        backgroundColor: '$whiteColor',
        justifyContent:'center',
        paddingHorizontal:'2.5%'
    },
    meetingCardMetaGroupName: {
        fontSize:15,
        fontFamily:'montserrat',
    },
    meetingCardMetaDate: {
        fontSize: 13,
        fontFamily:'montserratLight',
    }
});

export default styles;