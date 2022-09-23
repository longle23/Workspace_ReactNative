import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={{ height: 150, width: 150 }} source={require('./img/sachgiaokhoa.jpg')}></Image>

                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Nguyên hàm tích phân và ứng dụng</Text>

                    <Text style={styles.headerText}>Cung cấp bởi Tiki Trading</Text>

                    <Text style={[styles.headerText, { color: 'red' }]}>141.800 đ</Text>

                    <View>
                        <Text style={[styles.headerText, { textDecorationLine: 'line-through', color: '#808080' }]}>141.800 đ</Text>
                    </View>

                    <View style={[styles.headerText, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={{ width: 20, height: 20, alignItems: 'center', backgroundColor: '#C4C4C4' }}
                            >
                                <Text style={{ fontWeight: 'bold' }}>-</Text>
                            </TouchableOpacity>

                            <Text style={{ marginLeft: 10, marginRight: 10 }}>1</Text>

                            <TouchableOpacity
                                style={{
                                    width: 20,
                                    height: 20,
                                    alignItems: 'center',
                                    backgroundColor: '#C4C4C4',
                                }}
                            >
                                <Text style={{ fontWeight: 'bold' }}>+</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity>
                            <Text style={{ color: '#134FEC', fontWeight: 'bold' }}>Mua sau</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 30 }}>

                <Text style={{ fontWeight: 'bold', width: 140, marginLeft: 20 }}>Mã giảm giá đã lưu</Text>

                <TouchableOpacity style={{ marginLeft: 10 }}>
                    <Text style={{ color: '#134FEC' }}>Xem tại đây</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        width: 280,
                        height: 45,
                        alignItems: 'center',
                        marginLeft: 15,
                        borderWidth: 1,
                    }}
                >


                    <Text style={{ width: 30, height: 20, backgroundColor: 'yellow', marginLeft: 10 }}></Text>
                    <TextInput style={{ marginLeft: 20, width: 230, height: 45 }}>Mã giảm giá </TextInput>
                </View>

                <TouchableOpacity
                    style={{
                        marginLeft: 10,
                        marginRight: 10,
                        width: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#0A5EB7',
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Áp dụng</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ width: '100%', height: 10, marginTop: 20, backgroundColor: '#C4C4C4' }}></Text>

            <View style={styles.bodyContainer}>
                <Text style={{ fontWeight: 'bold' }}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>

                <TouchableOpacity style={{ marginLeft: 10 }}>
                    <Text style={{ color: '#134FEC' }}>Nhập tại đây</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ width: '100%', height: 10, backgroundColor: '#C4C4C4' }}></Text>

            <View
                style={{ flexDirection: 'row', justifyContent: 'space-between', height: '10%', alignItems: 'center' }}
            >
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>Tạm tính</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red', marginRight: 20 }}>141.800 đ</Text>
            </View>
            <Text style={{ width: '100%', height: '15%', backgroundColor: '#C4C4C4' }}></Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: '5%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Text style={{ color: '#808080', fontWeight: 'bold', marginLeft: 20 }}>Thành tiền</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red', marginRight: 20 }}>141.800 đ</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 35 }}>
                <TouchableOpacity
                    style={{
                        width: '90%',
                        height: 50,
                        backgroundColor: '#E53935',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>TIẾN HÀNH ĐẶT HÀNG</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        marginTop: 30,
        height: '20%',
        width: '100%',
        flexDirection: 'row',
    },
    img: {
        height: 20,
    },
    headerTextView: {
        marginLeft: 20,
    },
    headerText: {
        fontWeight: 'bold',
        marginTop: 12,
    },
    bodyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        width: '100%',
        flexDirection: 'row',
    },
});