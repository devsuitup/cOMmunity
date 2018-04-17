import EStyleSheet from "react-native-extended-stylesheet";
import Colors from '../../../constants/Colors';

const styles = EStyleSheet.create({
    root:{
        backgroundColor:Colors.$darkBlueColor,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default styles;