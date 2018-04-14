import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
    root:{
        flex:1,
        // height:600,
        justifyContent:'center',
        backgroundColor:'$darkBlueColor'
    },
    topContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red'
    },
    bottomContainer: {
        flex:0.8,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'blue'
        
    }
});

export default styles;