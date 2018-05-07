import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
    
    container: {
        flex:1,
        width:"90%"
    },
    item: {
        marginVertical:"1rem",
    },
    buttonCreate: {
        position: "absolute",
        left:0,
        right:0,
        bottom:"10%"
    }
});

export default styles;