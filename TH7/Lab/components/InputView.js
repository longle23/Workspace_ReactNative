import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    FlatList,
} from "react-native";

const InputView = (props) => {
    const [input, setToDoInput] = useState("");

    const addTask = () => {
        if (!input) {
            alert("Please input a text field");
            return false;
        }
        props.onAddTask(input);
        setToDoInput("");
    };

    return (
        <View style={{ marginTop: 30 }}>
            <View style={{ width: "100%", justifyContent: "space-around", flexDirection: "row" }}>
                <TextInput style={{ borderWidth: 1, width: "70%", marginLeft: 10 }}
                    onChangeText={(newInput) => setToDoInput(newInput)}
                    value={input} />

                <Button title="Add" onPress={addTask}></Button>
            </View>
        </View>
    );
};

export default InputView;