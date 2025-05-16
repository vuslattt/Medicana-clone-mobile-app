import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const doctors = Array.from({ length: 10 }, (_, index) => ({
  id: index.toString(),
  title: ['Uzm. Dr.', 'Prof. Dr.', 'Op. Dr.'][index % 3],
  name: `A. ${['Erdal İbanoğlu', 'Murat Müslüman', 'Bedri Özer', 'Kadir Ercan', 'Özlem Gündeşlioğlu'][index % 5]}`,
  hospital: `Medicana ${['Ataköy', 'Zincirlikuyu', 'Beylikdüzü', 'Bursa', 'İzmir'][index % 5]}`,
  specialty: ['Anestezi Ve Reanimasyon', 'Sinir Cerrahisi', 'Kulak Burun Boğaz', 'Kalp Ve Damar Cerrahisi'][index % 4],
}));

export default function HekimlerPage({ navigation }) {
  const [search, setSearch] = useState('');

  const filteredDoctors = doctors.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bütün Hekimler</Text>
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={20} color="#042387" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Hekim Ara"
            value={search}
            onChangeText={setSearch}
          />
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Filtreler</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={filteredDoctors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.doctorCard} onPress={() => navigation.navigate('DoctorInfoPage', { doctor: item })}>
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorTitle}>{item.title}</Text>
              <Text style={styles.doctorName}>{item.name}</Text>
              <View style={styles.tagContainer}>
                <Text style={styles.hospitalTag}>{item.hospital}</Text>
                <Text style={styles.specialtyTag}>{item.specialty}</Text>
              </View>
            </View>
            <Image source={require('../../Assets/randevular.png')} style={styles.calendarIcon} />
            <FontAwesome name="chevron-right" size={18} color="#19A7CE" style={styles.arrowIcon} />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContentContainer}
      />
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
    padding: 10,
  },
  filterButton: {
    backgroundColor: '#19A7CE',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginLeft: 10,
  },
  filterText: {
    color: 'white',
    fontWeight: 'bold',
  },
  listContentContainer: {
    paddingBottom: 20,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#042387',
  },
  tagContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  hospitalTag: {
    backgroundColor: '#E0E7FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    marginRight: 5,
    color: '#042387',
    fontWeight: 'bold',
    fontSize: 12,
  },
  specialtyTag: {
    backgroundColor: '#E0E7FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    color: '#042387',
    fontWeight: 'bold',
    fontSize: 12,
  },
  calendarIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  arrowIcon: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  backButtonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

