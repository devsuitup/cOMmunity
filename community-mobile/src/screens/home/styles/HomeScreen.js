import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
    root:{
        flex:1,
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
        flex:0.9,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'blue'
        
    },
    iconAdd: {
        // paddingRight:'3%',
        marginRight:'1rem',
    }
});

export default styles;