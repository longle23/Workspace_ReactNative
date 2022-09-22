import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header1}>
          <Text>Nguyên hàm tích phân và ứng dụng</Text>

          <Text>cung cấp bởi Tiki Trading</Text>

          <Text style={styles.styleText}>141.800 đ</Text>
        </View>

        <View styles={{ justifyContent: 'space-between' }}>
          <Text>Mã giảm giá đã lưu</Text>

          <TouchableOpacity>
            <Text>Xem tại đây</Text>
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'space-between' }}>
          <View>
            <Text>Mã giảm giá</Text>
          </View>

          <TouchableOpacity>
            <Text>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.center}>
        <Text style={{ fontWeight: 'bold' }}>
          Bạn có phiếu quà tặng Tiki/Got it/Urbox?
        </Text>

        <TouchableOpacity>
          <Text style={{ color: 'blue', fontWeight: 'bold' }}>
            Nhập tại đây?
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <View style={styles.tamtinh}>
          <Text style={{ marginRight: 220, fontWeight: 'bold' }}>Tạm tính</Text>

          <Text style={{ fontWeight: 'bold', color: 'red' }}>141.800 đ</Text>
        </View>

        <View style={styles.nen}></View>

        <View style={styles.thanhtien}>
          <Text
            style={{ marginRight: 220, fontWeight: 'bold', color: '#808080' }}>
            Thành tiền
          </Text>

          <Text style={{ fontWeight: 'bold', color: 'red' }}>141.800 đ</Text>
        </View>

        <TouchableOpacity style={{backgroundColor: '#E53935',width: '95%',height: '15%',justifyContent: 'center'}}>
          <Textstyle={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Tiến hành đặt hàng</Text>
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
    alignItems: 'center',
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
    width: '100%',
  },
  thanhtien: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
  },
  styleText: {
    color: 'red',
  },
});
