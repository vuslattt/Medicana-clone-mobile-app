import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation(); // ✅ Navigasyonu ekledim

  return (
    <View style={styles.container}>
      {/* Arka Plan Resmi */}
      <Image source={require('../../Assets/Login.png')} style={styles.backgroundImage} />

      {/* İçerik */}
      <View style={styles.content}>
        {/* E-posta Alanı */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={20} color="#B0B0B0" style={styles.icon} />
          <TextInput style={styles.input} placeholder="E-posta" placeholderTextColor="#B0B0B0" />
        </View>

        {/* Şifre Alanı */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={20} color="#B0B0B0" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Şifre"
            placeholderTextColor="#B0B0B0"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <FontAwesome name={passwordVisible ? "eye" : "eye-slash"} size={20} color="#B0B0B0" style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>

        {/* Giriş Yap Butonu */}
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('HomePage')}>
          <Text style={styles.loginButtonText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    resizeMode: 'cover',
  },
  content: {
    position: 'absolute',
    top: '33.4%',
    width: '80%',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
  },
  eyeIcon: {
    marginLeft: 10,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#00AEEF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
