import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import { MpStyle } from '../styles/map';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const apiKey = 'c0151a8e-a2e6-4de0-bf5c-61a4783447c3';

export default function Map() {
  const [region, setRegion] = useState({
    latitude: 55.751244,
    longitude: 37.618423,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [search, setSearch] = useState('');
  const [marker, setMarker] = useState(null);
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  const zoomIn = () => {
    setRegion(prevRegion => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta / 2,
      longitudeDelta: prevRegion.longitudeDelta / 2,
    }));
  }

  const zoomOut = () => {
    setRegion(prevRegion => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta * 2,
      longitudeDelta: prevRegion.longitudeDelta * 2,
    }));
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const response = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${debouncedSearch}&format=json`);
        const { GeoObjectCollection } = response.data.response;
        const { pos } = GeoObjectCollection.featureMember[0].GeoObject.Point;
        const [longitude, latitude] = pos.split(' ');

        setRegion({
          ...region,
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
        });

        setMarker({
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
        });
      } catch (error) {
        console.error(error);
      }
    };

    if (debouncedSearch) {
      handleSearch();
    }
  }, [debouncedSearch]);

  return (
    <SafeAreaView style={MpStyle.container}>
      <MapView
        style={MpStyle.map}
        region={region}
        onRegionChangeComplete={setRegion}
        mapType='satellite'
      >
        {marker && (
          <Marker coordinate={marker} />
        )}
      </MapView>
      <View style={MpStyle.btnC}>
        <TouchableOpacity onPress={zoomIn} style={MpStyle.btn}>
          <FontAwesomeIcon icon={faPlus} style={MpStyle.btnIcon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={zoomOut} style={MpStyle.btn}>
          <FontAwesomeIcon icon={faMinus} style={{color: 'white'}}/>
        </TouchableOpacity>
      </View>
      <View style={MpStyle.searchContainer}>
        <TextInput
          style={MpStyle.searchInput}
          placeholder="INPUT NAME OF CITY"
          placeholderTextColor={'white'}
          value={search}
          onChangeText={setSearch}
        />
      </View>
    </SafeAreaView>
  );
}
