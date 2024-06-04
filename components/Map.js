import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import { MpStyle } from '../styles/map';

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
      >
        {marker && (
          <Marker coordinate={marker} />
        )}
      </MapView>
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
