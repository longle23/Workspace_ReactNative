import React from "react";
import { StyleSheet, Image, Text, TouchableOpacity, SafeAreaView, View, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import data from "../data/data.js";
import ProductItem from "../components/ProductItem.js";
import BanhNgot from "../img/ga_bo_toi.png";

const Lab4a = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="back" size={24} color="#fff" />

        <Text style={{ color: "#fff" }}>Chat</Text>

        <AntDesign name="shoppingcart" size={24} color="#fff" />
      </View>

      <View style={{ height: 60,backgroundColor:"grey", justifyContent:'center', paddingLeft:70 }}>
        <Text>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
      </View>

      <View style={styles.session}>

        <FlatList
          data={data}
          renderItem={ProductItem}
          keyExtractor={(item) => item.id}
        />

      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Image source={require('../img/menu.png')} style={{ width: 40, height: 30 }} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../img/home.png')} style={{ width: 40, height: 30 }} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../img/undo.png')} style={{ width: 40, height: 30 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Lab4a;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#1BA9FF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: '10%',
    width: '100%',
    paddingLeft: 110,
  },
  session: {
    flex: 1,
    paddingLeft: 70,
    paddingTop: 15
  },
  footer: {
    backgroundColor: "#1BA9FF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 80,
    height: 50,
  },
});
