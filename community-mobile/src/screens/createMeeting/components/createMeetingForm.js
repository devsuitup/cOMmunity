import React from "react";
import { View } from "react-native";
import { Field, reduxForm } from "redux-form";
import { Button } from "react-native-elements";

import { TextInputWithValidations } from "../../../commons";
import { createMeetingValidation } from "../validations";
import Colors from "../../../../constants/Colors";
import styles from "./styles/createMeetingForm";

const CreateMeetingForm = ({
    createMeeting,
    showDateTimePicker,
    handleSubmit,
    selectDateTitle,
    invalid,
    submitting
}) => (
    <View style={styles.container}>
        <Field 
            component={TextInputWithValidations}
            name="title"
            label="Title"
            selectionColor={Colors.$redColor}
            containerStyle={styles.item}
            underlineColorAndroid={Colors.$grayColor}
        />
        <Field 
            component={TextInputWithValidations}
            name="description"
            label="Description"
            underlineColorAndroid={Colors.$grayColor}
            multiline
            selectionColor={Colors.$redColor}
            containerStyle={styles.item}
        />
        <View style={styles.item}>
            <Button
                title={selectDateTitle}
                raised
                fontFamily="montserrat"
                onPress={showDateTimePicker}
            />
        </View>
        <View style={styles.buttonCreate}>
            <Button
                title="It's a date !"
                raised
                backgroundColor={Colors.$darkBlueColor}
                fontFamily="montserrat"
                disabled={invalid || submitting}
                onPress={handleSubmit(createMeeting)}
            />
        </View>
    </View>
);

export default reduxForm({
    form:"createMeeting",
    validate:createMeetingValidation
})(CreateMeetingForm);