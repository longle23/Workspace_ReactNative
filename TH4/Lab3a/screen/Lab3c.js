import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import icon from '../constant/icon';
import Star from './Star';

function PhoneActivity(props) {
  return (
    <View style={{flex: 1, marginVertical: 15}}>
      <View style={{flex: 40, alignItems: 'center'}}>
        <Image source={icon.icon_background_phone}></Image>
      </View>
      <View style={{flex: 25, padding: 20}}>
        <Text style={{color: 'black', fontSize: 18}}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Star numberStar={5}></Star>
          <Text style={{color: 'black', fontSize: 15, paddingLeft: 20}}>
            (Xem 828 đánh giá)
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', fontSize: 15}}>1.790.000 đ</Text>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              textDecorationLine: 'line-through',
              paddingLeft: 20,
            }}>
            1.790.000 đ
          </Text>
        </View>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <Text style={{color: 'red', alignItems: 'center'}}>
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <Image
            source={icon.questen}
            style={{
              justifyContent: 'flex-end',
              height: 20,
              width: 20,
              paddingLeft: 20,
            }}></Image>
        </View>
        <TouchableOpacity
          style={{
            height: 45,
            width: '100%',
            justifyContent: 'center',
            borderRadius: 15,
            borderColor: 'black',
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{color: 'black', alignItems: 'center', paddingRight: 10}}>
              4 MÀU-CHỌN MÀU
            </Text>
            <Image
              source={icon.next}
              style={{
                justifyContent: 'flex-end',
                height: 10,
                width: 10,
              }}></Image>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 6, padding: 20}}>
        <TouchableOpacity
          style={{
            height: 45,
            width: '100%',
            padding: 10,
            justifyContent: 'center',
            borderRadius: 15,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
            CHỌN MUA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default PhoneActivity;
