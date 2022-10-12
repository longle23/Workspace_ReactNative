import React from "react";
import { Button, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ProductItem = ({ item }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 10,
                marginBottom: 20

            }}
        >
            <View style={{ flexDirection: "row" }}>
                <View>
                    <Image source={item.img} />

                </View>

                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 15 }}>{item.name}</Text>
                    <Text style={{ color: "red" }}>Shop: {item.shop}</Text>
                </View>

                <TouchableOpacity style={{ backgroundColor: 'red', marginLeft: 40, justifyContent: 'center', width: 90, height: 50 }}>
                    <Text style={{ textAlign: 'center' }}>Chat</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default ProductItem;