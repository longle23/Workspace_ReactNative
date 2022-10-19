import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  ScrollView,
} from "react-native";

import InputView from "../components/InputView";
import ItemView from "../components/ItemView";

export default function AddItemScreen() {
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };

  const handleDeleTeTask = (index) => {
    let taskListTemp = [...taskList];
    taskListTemp.splice(index, 1);
    setTaskList(taskListTemp);
  };

  return (
    <View>
      <InputView onAddTask={handleAddTask} />

      <ScrollView>
        {taskList.map((item, index) => {
          return (
            <ItemView
              key={index}
              title={item}
              number={index + 1}
              onDeleteTask={() => handleDeleTeTask(index)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
});
