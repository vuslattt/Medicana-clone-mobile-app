import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated, Image, Modal, Easing } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Altbar = () => {
  const navigation = useNavigation();
  const [isRotated, setIsRotated] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // Randevu Al modalı
  const rotation = useRef(new Animated.Value(0)).current;
  const menuSlide = useRef(new Animated.Value(0)).current;

  // Animasyonu başlatan fonksiyon
  const toggleRotation = () => {
    const toValue = isRotated ? 0 : 1;

    Animated.parallel([
      Animated.timing(rotation, {
        toValue,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(menuSlide, {
        toValue,
        duration: 500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start(() => {
      setIsRotated(!isRotated);
    });
  };

  // Rotation değeri (180 derece döndürme)
  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  // Menü butonlarının yukarı-aşağı kayma animasyonu
  const menuTranslateY = menuSlide.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0], // 50px aşağıdan başlasın, yukarı çıksın
  });

  return (
    <View style={styles.container}>
      {/* Menü Animasyonlu Görünecek */}
      <Animated.View style={[styles.menuContainer, { transform: [{ translateY: menuTranslateY }], opacity: menuSlide }]}>
        <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Ara 5058443788")}>
          <Image source={require('../../Assets/cagrımerkezi.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('YakınlarımPage')}>
          <Image source={require('../../Assets/Destek.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SettingsPage')}>
          <Image source={require('../../Assets/ayarlarr.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('HekimlerPage')}>
          <Image source={require('../../Assets/hekimlerr.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      </Animated.View>

      {/* Alt Menü */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={[styles.tab, styles.leftTab]} onPress={() => navigation.navigate('HomePage')}>
          <FontAwesome name="home" size={24} color="#002D72" />
          <Text style={styles.label}>Ana Sayfa</Text>
        </TouchableOpacity>

        {/* Hızlı İşlemler Butonu */}
        <View style={styles.fastActionWrapper}>
          <TouchableOpacity style={styles.fastAction} onPress={toggleRotation}>
            <Animated.View style={[styles.fastActionCircle, { transform: [{ rotate: rotateInterpolate }] }]}>
              <FontAwesome name="chevron-up" size={40} color="white" style={styles.baner} />
              <FontAwesome name="chevron-up" size={40} color="#00C8E0" style={styles.innerIcon} />
            </Animated.View>
          </TouchableOpacity>
          <Text style={styles.fastActionLabel}>Hızlı İşlemler</Text>
        </View>

        <TouchableOpacity style={[styles.tab, styles.rightTab]} onPress={() => setModalVisible(true)}>
          <FontAwesome name="calendar" size={24} color="#002D72" />
          <Text style={styles.label}>Randevu Al</Text>
        </TouchableOpacity>
      </View>

      {/* Randevu Al Modalı */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Image source={require('../../Assets/Allert.png')} style={styles.modalIcon} />
            <Text style={styles.modalText}>Bu özelliği kullanabilmek için profilinizi güncelleyin.</Text>
            <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate('ProfiliDuzenlePage')}>
              <Text style={styles.confirmButtonText}>Tamam</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelButtonText}>Vazgeç</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  menuContainer: {
    position: 'absolute',
    bottom: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#EAF0F6',
    paddingVertical: 30,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  menuItem: {
    alignItems: 'center',
    flex: 1,
  },
  menuIcon: {
    width: 90,
    height: 90,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  tab: {
    alignItems: 'center',
    flex: 1,
  },
  leftTab: {
    marginLeft: -60,
  },
  rightTab: {
    marginRight: -60,
  },
  label: {
    fontSize: 14,
    color: '#002D72',
    marginTop: 6,
  },
  fastActionWrapper: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -35 }],
    alignItems: 'center',
  },
  fastAction: {
    alignItems: 'center',
  },
  fastActionCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#002D72',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#DAE2EE',
    position: 'absolute',
    top: -55,
    right: -55,
  },
  innerIcon: {
    position: 'absolute',
    bottom: 5,
  },
  baner: {
    position: 'absolute',
    bottom: 20,
  },
  fastActionLabel: {
    fontSize: 14,
    color: '#002D72',
    marginTop: 30,
    right: -15,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  modalIcon: {
    width: 100,
    height: 90,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D4159',
    textAlign: 'center',
    marginBottom: 20,
  },
  confirmButton: {
    width: '100%',
    backgroundColor: '#003366',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#003366',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#003366',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Altbar;
