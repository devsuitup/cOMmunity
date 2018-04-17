import EStyleSheet from "react-native-extended-stylesheet";
import Colors from '../../../constants/Colors';

const styles = EStyleSheet.create({
    root:{
        height: 80,
        // marginTop: 20, /* only for IOS to give StatusBar Space */
        // backgroundColor: Colors.$redColor,
        alignSelf: 'center',
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
    },
    title: {
        fontSize:30,
        fontFamily:'montserratLight',
    },
    titleOM: {
        color:Colors.$whiteColor
    },
    titleUnity:{
        color:Colors.$lightPurpleColor
    }
});

export default styles;