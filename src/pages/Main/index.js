import React, { useState, useEffect } from 'react';
import RNSimData from 'react-native-sim-data'

import {
  View, Text, TextInput, Image, ScrollView, StatusBar, PermissionsAndroid
} from 'react-native';

import styles from './styles'
import banner from '~/assets/banner.png'

function Main() {
  const [deviceInfo, setDeviceInfo] = useState({})

  useEffect(() => {
    async function requestReadStatePermission() {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE)

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Phone State permission granted");
      } else {
        console.log("Phone State permission denied");
      }
    }
    requestReadStatePermission()
    getDeviceInfo()
  }, [])

  function getDeviceInfo() {
    const deviceData = RNSimData.getSimInfo()

    deviceData
      ? setDeviceInfo(RNSimData.getSimInfo())
      : setDeviceInfo({ SIM: "Data not found" })
  }


  return (
    <View
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={banner}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.welcome}>Prisma SmartInventory</Text>

        <Text style={[styles.deviceTitle]}>Chip 1</Text>
        {deviceInfo.carrierName0
          ?
          <View style={styles.infoLine}>
            <Text style={styles.instructions}>Operadora: {deviceInfo.carrierName0}</Text>
          </View>
          :
          <View style={styles.infoLine}>
            <Text style={styles.instructions}>Operadora: </Text>
            <TextInput style={styles.infoEdit} placeholder="Digite o nome da operadora" placeholderTextColor="#777" />
          </View>
        }
        {deviceInfo.phoneNumber0
          ?
          <View style={styles.infoLine}>
            <Text style={styles.instructions}>Telefone: {deviceInfo.phoneNumber0}</Text>
          </View>
          :
          <View style={styles.infoLine}>
            <Text style={styles.instructions}>Telefone: </Text>
            <TextInput style={styles.infoEdit} placeholder="Digite o telefone" placeholderTextColor="#777" />
          </View>
        }
        <View style={styles.infoLine}>
          <Text style={styles.instructions}>Serial Chip: {deviceInfo.simSerialNumber0 ? deviceInfo.simSerialNumber0 : "Not found"}</Text>
        </View>
        <View style={styles.infoLine}>
          <Text style={styles.instructions}>Slot Chip: {deviceInfo.simSlotIndex0 ? deviceInfo.simSlotIndex0 : "Not found"}</Text>
        </View>
        <View style={styles.infoLine}>
          <Text style={styles.instructions}>Mobile Network Code: {deviceInfo.mnc0 ? deviceInfo.mnc0 : "Not found"}</Text>
        </View>
        {deviceInfo.deviceId0
          ?
          <View style={styles.infoLine}>
            <Text style={styles.instructions}>IMEI: {deviceInfo.deviceId0}</Text>
          </View>
          :
          <View style={styles.infoLine}>
            <Text style={styles.instructions}>IMEI: </Text>
            <TextInput style={styles.infoEdit} placeholder="Digite o IMEI do smartphone" placeholderTextColor="#777" />
          </View>
        }



        <Text style={[styles.deviceTitle]}>Chip 2</Text>
        {deviceInfo.carrierName1
          ?
          <View style={styles.infoLine}>
            <Text style={styles.instructions}>Operadora: {deviceInfo.carrierName1}</Text>
          </View>
          :
          <View style={styles.infoLine}>
            <Text style={styles.instructions}>Operadora: </Text>
            <TextInput style={styles.infoEdit} placeholder="Digite o nome da operadora" placeholderTextColor="#777" />
          </View>
        }
        {deviceInfo.phoneNumber1
          ?
          <View style={styles.infoLine}>
            <Text style={styles.instructions}>Telefone: {deviceInfo.phoneNumber1}</Text>
          </View>
          :
          <View style={styles.infoLine}>
            <Text style={styles.instructions}>Telefone: </Text>
            <TextInput style={styles.infoEdit} placeholder="Digite o telefone" placeholderTextColor="#777" />
          </View>
        }
        <View style={styles.infoLine}>
          <Text style={styles.instructions}>Serial Chip: {deviceInfo.simSerialNumber1 ? deviceInfo.simSerialNumber1 : "Not found"}</Text>
        </View>
        <View style={styles.infoLine}>
          <Text style={styles.instructions}>Slot Chip: {deviceInfo.simSlotIndex1 ? deviceInfo.simSlotIndex1 : "Not found"}</Text>
        </View>
        <View style={styles.infoLine}>
          <Text style={styles.instructions}>Mobile Network Code: {deviceInfo.mnc1 ? deviceInfo.mnc1 : "Not found"}</Text>
        </View>
        {deviceInfo.deviceId1
          ?
          <View style={styles.infoLine}>
            <Text style={styles.instructions}>IMEI: {deviceInfo.deviceId1}</Text>
          </View>
          :
          <View style={styles.infoLine}>
            <Text style={styles.instructions}>IMEI: </Text>
            <TextInput style={styles.infoEdit} placeholder="Digite o IMEI do smartphone" placeholderTextColor="#777" />
          </View>
        }



      </ScrollView>
    </View>
  )
}

export default Main;
