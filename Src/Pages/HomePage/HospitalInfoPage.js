import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Navigasyonu ekledim

const menuItems = [
  { title: 'Genel Bilgiler', icon: require('../../Assets/hastaneler.png') },
  { title: 'Odalar', icon: require('../../Assets/odalar.png') },
  { title: 'Hekimler', icon: require('../../Assets/hekimler.png') },
  { title: 'Tıbbi Birimler', icon: require('../../Assets/tıbbibirimler.png') },
  { title: 'Medikal Teknolojiler', icon: require('../../Assets/medikarteknolojiler.png') },
  { title: 'Sunulan Hizmetler', icon: require('../../Assets/sunulanhizmetler.png') },
];

export default function HospitalInfoPage() {
  const navigation = useNavigation(); // Navigasyonu kullanıma aldım

  return (
    <ScrollView style={styles.container}>
      {/* Hospital Header */}
      <View style={styles.headerCard}>
        <Image source={require('../../Assets/MedicanaKadıkoy.png')} style={styles.headerImage} />
        <View style={styles.infoContainer}></View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <FontAwesome5 name="phone" size={24} color="#19A7CE" />
            <Text style={styles.buttonText}>Hastaneyi Ara</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="photo-library" size={24} color="#19A7CE" />
            <Text style={styles.buttonText}>Fotoğraf Galerisi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Entypo name="location-pin" size={24} color="#19A7CE" />
            <Text style={styles.buttonText}>Yol Tarifi Al</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="event" size={24} color="#19A7CE" />
            <Text style={styles.buttonText}>Randevu Al</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu Section */}
      <View style={styles.menuCard}>
        {menuItems.map((item, index) => (
          <TouchableOpacity 
  key={index} 
  style={styles.menuItem}
  onPress={() => {
    if (item.title === "Genel Bilgiler") {
      navigation.navigate("GenelBilgilerPage");
    } else if (item.title === "Odalar") {
      navigation.navigate("OdalarPage");
    } else if (item.title === "Hekimler") {
      navigation.navigate("HekimlerPage"); // Hekimler sayfasına yönlendirme
    } else if (item.title === "Tıbbi Birimler") {
      navigation.navigate("TıbbiBirimlerPage"); // Tıbbi Birimler sayfasına yönlendirme
    }
    else if (item.title === "Medikal Teknolojiler") {
      navigation.navigate("MedicalTeknoloPage"); // Tıbbi Birimler sayfasına yönlendirme
    }
    else if (item.title === "Sunulan Hizmetler") {
      navigation.navigate("SunulanHizmetPage"); // Tıbbi Birimler sayfasına yönlendirme
    }
  }}
>
  <Image source={item.icon} style={styles.menuIcon} />
  <Text style={styles.menuText}>{item.title}</Text>
  <Entypo name="chevron-right" size={24} color="#19A7CE" />
</TouchableOpacity>
        ))}
      </View>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Geri</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
  },
  headerCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginTop: 20,
    paddingBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  infoContainer: {
    padding: 15,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#042387',
    marginTop: 5,
    textAlign: 'center',
  },
  menuCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#042387',
    flex: 1,
  },
  backButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 15,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#042387',
  },
});
