import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    Text,
    View,
    StyleSheet,
} from "react-native";
import ItemView from "../components/ItemView";

export default CallMockAPI = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        getImages();
    }, []);

    const getImages = () => {
        fetch(
            "https://63477bf70484786c6e8147db.mockapi.io/api/product/Product"
        )
            .then((response) => {response.json()
                setLoading(false);})
            .then((json) => console.log(json))
    };

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? (<ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>
                            {item.id}, {item.name},{item.price}
                        </Text>
                    )}
                />

                // <View>
                //     <Text>{data.id}, {data.name},{data.price}</Text>
                // </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});