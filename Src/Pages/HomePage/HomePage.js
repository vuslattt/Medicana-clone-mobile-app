import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../Components/Header';
import ProfilCard from '../../Components/HomePage/ProfilCard';
import ButonCard from '../../Components/HomePage/ButtonCard';
import Healthy from '../../Components/HomePage/Healthy';
import Altbar from '../../Components/Altbar/Altbar'; // Altbar import edildi

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Header 
        onNotificationPress={() => console.log('Bildirim Tıklandı!')} 
        onMenuPress={() => console.log('Menü Açıldı!')} 
      />

      {/* Kaydırılabilir içerik */}
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <ProfilCard onPressProfile={() => console.log('Profil Açıldı!')} />
        <ButonCard onPress={(title) => console.log(`${title} butonuna basıldı!`)} />
        <Healthy />
      </ScrollView>

      {/* Alt Bar - Sabit Kaldı */}
      <Altbar 
        onHomePress={() => console.log('Ana Sayfa Açıldı')}
        onFastActionsPress={() => console.log('Hızlı İşlemler Açıldı')}
        onAppointmentPress={() => console.log('Randevu Al Açıldı')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FF',
  },
  scrollContainer: {
    paddingBottom: 50, // Altbar'a çarpmasını önlemek için yeterli boşluk
  },
});
