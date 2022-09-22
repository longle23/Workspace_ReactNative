import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <View style={styles.header1}>
          <Image source={require('./img/sachgiaokhoa.png')}></Image>

          <Text>Nguyên hàm tích phân và ứng dụng</Text>

          <Text>cung cấp bởi Tiki Trading</Text>

          <Text style={styles.styleText}>141.800 đ</Text>
        </View>

        <View styles={styles.header2}>
          <Text>Mã giảm giá đã lưu</Text>

          <TouchableOpacity>
            <Text>Xem tại đây</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.header3}>
          <Text>Mã giảm giá</Text>

          <button value={Áp u}}></button>
        </View>
      </View>

      <View style={styles.center}>
        <Text style={styles.textBold}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>

        <Text style={{ color: 'blue' }}>Nhập tại đây?</Text>
      </View>

      <View style={styles.bottom}>
        <View style={styles.tamtinh}>
          <Text style={{ marginRight: 220, fontWeight: 'bold' }}>Tạm tính</Text>

          <Text style={styles.styleText}>141.800 đ</Text>
        </View>

        <View style={styles.nen}>
          <Text></Text>
        </View>

        <View style={styles.thanhtien}>
          <Text style={{ marginRight: 220, fontWeight: 'bold' }}>Thành tiền </Text>

          <Text style={styles.styleText}>141.800 đ</Text>
        </View>

        <TouchableOpacity>
          <Text>Tiến hành đặt hàng</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCB7B6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 5,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 20,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  bottom: {
    flex: 5,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  tamtinh: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  nen: {
    flex: 2,
    backgroundColor: '#BCB7B6',
    width: '100%'
  },
  thanhtien: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex'
  },
  styleText: {
    color: 'red'
  },
  textBold: {
    fontWeight: 'bold',
  }
});