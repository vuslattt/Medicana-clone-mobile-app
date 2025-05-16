import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // FontAwesome eklendi

const hospitals = Array.from({ length: 20 }, (_, index) => ({
  id: index.toString(),
  name: `Medicana ${['Airport Medical Center', 'Ataköy', 'Ataşehir', 'Avcılar', 'Bahçelievler', 'Bursa'][index % 6]}`,
  address: `Örnek Adres ${index + 1}, İstanbul`,
  image: require('../../Assets/Hospital1.png'), // Örnek resim
}));

export default function HospitalsPage({ navigation }) {
  const [search, setSearch] = useState('');

  const filteredHospitals = hospitals.filter(h =>
    h.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Üst Alan (Başlık + Arama) */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Hastane seçiniz</Text>
        
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={20} color="#A0A0A0" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Hastane ara"
            placeholderTextColor="#A0A0A0"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <TouchableOpacity style={styles.locationButton}>
          <Text style={styles.locationButtonText}>Konumdan Bul</Text>
        </TouchableOpacity>
      </View>

      {/* Hastane Listesi */}
      <FlatList
        data={filteredHospitals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.hospitalCard} 
            onPress={() => navigation.navigate('HospitalInfoPage', { hospital: item })}
          >
            <Image source={item.image} style={styles.hospitalImage} />
            <View style={styles.hospitalInfo}>
              <Text style={styles.hospitalName}>{item.name}</Text>
              <Text style={styles.hospitalAddress}>{item.address}</Text>
            </View>
            <FontAwesome name="chevron-right" size={18} color="#19A7CE" />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContentContainer}
      />

      {/* Geri Butonu */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Geri</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
  },
  header: {
    backgroundColor: '#042387',
    padding: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 14,
    color: '#333',
  },
  locationButton: {
    backgroundColor: '#19A7CE',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  locationButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  listContentContainer: {
    padding: 10,
  },
  hospitalCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 6,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  hospitalImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  hospitalInfo: {
    flex: 1,
  },
  hospitalName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#042387',
  },
  hospitalAddress: {
    fontSize: 12,
    color: '#333',
  },
  backButton: {
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
    marginTop: 10,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#042387',
  },
});

