import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Pages/HomeScreen'; // Dosya yolunu kendi yapına göre ayarla
import LoginPage from './Pages/LoginPage/LoginPage'; // Dosya yolunu kendi yapına göre ayarla
import SignupPage from './Pages/SignUp/SignupPage'; // Dosya yolunu kendi yapına göre ayarla
import Verify from './Pages/SignUp/Verify'; // Dosya yolunu kendi yapına göre ayarla
import Password from './Pages/SignUp/Password'; // Dosya yolunu kendi yapına göre ayarla
import HomePage from './Pages/HomePage/HomePage'; // Dosya yolunu kendi yapına göre ayarla
import WhichPage from './Pages/SignUp/WhichPage'; // Dosya yolunu kendi yapına göre ayarla
import AutPage from './Pages/SignUp/AutPage'; // Dosya yolunu kendi yapına göre ayarla
import OtpPage from './Pages/SignUp/OtpPage'; // Dosya yolunu kendi yapına göre ayarla

import ProfiliDuzenlePage from './Pages/HomePage/ProfiliDuzenlePage'; // Dosya yolunu kendi yapına göre ayarla
import DoctorSearchPage from './Pages/HomePage/DoctorSearchPage'; // Dosya yolunu kendi yapına göre ayarla
import SaglıkDosyam from './Pages/HomePage/SaglıkDosyam'; // Dosya yolunu kendi yapına göre ayarla
import ProfilPage from './Pages/HomePage/ProfilPage'; // Dosya yolunu kendi yapına göre ayarla
import HospitalAndHekimPage from './Pages/HomePage/HospitalAndHekimPage'; // Dosya yolunu kendi yapına göre ayarla
import HospitalsPage from './Pages/HospitalAndHekimPage/HospitalsPage'; // Dosya yolunu kendi yapına göre ayarla
import HospitalInfoPage from './Pages/HomePage/HospitalInfoPage'; // Dosya yolunu kendi yapına göre ayarla
import HekimlerPage from './Pages/HospitalAndHekimPage/HekimlerPage'; // Dosya yolunu kendi yapına göre ayarla
import DoctorInfoPage from './Pages/HomePage/DoctorInfoPage'; // Dosya yolunu kendi yapına göre ayarla
import MedicineControlPage from './Pages/HomePage/MedicineControlPage'; // Dosya yolunu kendi yapına göre ayarla
import YakınlarımPage from './Pages/HomePage/YakınlarımPage'; // Dosya yolunu kendi yapına göre ayarla
import SuHatırlatPage from './Pages/HomePage/SuHatırlatPage'; // Dosya yolunu kendi yapına göre ayarla
import SettingsPage from './Pages/HomePage/SettingsPage'; // Dosya yolunu kendi yapına göre ayarla
import LanguagePage from './Pages/Settingpage/LanguagePage'; // Dosya yolunu kendi yapına göre ayarla
import ContactPage from './Pages/Settingpage/ContactPage'; // Dosya yolunu kendi yapına göre ayarla
import SozlesmePage from './Pages/Settingpage/SozlesmePage'; // Dosya yolunu kendi yapına göre ayarla
import SıkSorulanPage from './Pages/Settingpage/SıkSorulanPage'; // Dosya yolunu kendi yapına göre ayarla
import TıbbiBirimlerPage from './Pages/HospitalAndHekimPage/TıbbiBirimlerPage'; // Dosya yolunu kendi yapına göre ayarla
import Tıbbibirim2Page from './Pages/HospitalAndHekimPage/Tıbbibirim2Page'; // Dosya yolunu kendi yapına göre ayarla
import GenelBilgilerPage from './Pages/HospitalAndHekimPage/GenelBilgilerPage'; // Dosya yolunu kendi yapına göre ayarla
import OdalarPage from './Pages/HospitalAndHekimPage/OdalarPage'; // Dosya yolunu kendi yapına göre ayarla
import MedicalTeknoloPage from './Pages/HospitalAndHekimPage/MedicalTeknoloPage'; // Dosya yolunu kendi yapına göre ayarla
import SunulanHizmetPage from './Pages/HospitalAndHekimPage/SunulanHizmetPage'; // Dosya yolunu kendi yapına göre ayarla

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} // Sadece HomeScreen başlığını kaldırdık
      />
       <Stack.Screen 
          name="LoginPage" 
          component={LoginPage} 
          options={{ headerShown: false }} // Sadece HomeScreen başlığını kaldırdık
          />
            <Stack.Screen 
          name="SunulanHizmetPage" 
          component={SunulanHizmetPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
          <Stack.Screen 
          name="MedicalTeknoloPage" 
          component={MedicalTeknoloPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
           <Stack.Screen 
          name="GenelBilgilerPage" 
          component={GenelBilgilerPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
           <Stack.Screen 
          name="OdalarPage" 
          component={OdalarPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
          <Stack.Screen 
          name="Tıbbibirim2Page" 
          component={Tıbbibirim2Page} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
          <Stack.Screen 
          name="TıbbiBirimlerPage" 
          component={TıbbiBirimlerPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
           <Stack.Screen 
          name="LanguagePage" 
          component={LanguagePage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
           <Stack.Screen 
          name="SozlesmePage" 
          component={SozlesmePage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
          <Stack.Screen 
          name="SıkSorulanPage" 
          component={SıkSorulanPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
           <Stack.Screen 
          name="ContactPage" 
          component={ContactPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
          <Stack.Screen 
          name="SettingsPage" 
          component={SettingsPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
           <Stack.Screen 
          name="SuHatırlatPage" 
          component={SuHatırlatPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
          <Stack.Screen 
          name="YakınlarımPage" 
          component={YakınlarımPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
          <Stack.Screen 
          name="MedicineControlPage" 
          component={MedicineControlPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
           <Stack.Screen 
          name="HekimlerPage" 
          component={HekimlerPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
           <Stack.Screen 
          name="DoctorInfoPage" 
          component={DoctorInfoPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
          <Stack.Screen 
          name="HospitalInfoPage" 
          component={HospitalInfoPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
         <Stack.Screen 
          name="SignupPage" 
          component={SignupPage} 
          options={{ headerShown: false }} // Sadece HomeScreen başlığını kaldırdık
        />
         <Stack.Screen 
          name="HospitalsPage" 
          component={HospitalsPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
        />
         <Stack.Screen 
          name="Verify" 
          component={Verify} 
          options={{ headerShown: false }} // Sadece HomeScreen başlığını kaldırdık
          />
         <Stack.Screen 
          name="Password" 
          component={Password} 
          options={{ headerShown: false }} // Sadece HomeScreen başlığını kaldırdık
        />
         <Stack.Screen 
          name="HomePage" 
          component={HomePage} 
          options={{ headerShown: false }} // Sadece HomeScreen başlığını kaldırdık
        />
         <Stack.Screen 
          name="WhichPage" 
          component={WhichPage} 
          options={{ headerShown: false }} // Sadece HomeScreen başlığını kaldırdık
        />
         <Stack.Screen 
          name="ProfiliDuzenlePage" 
          component={ProfiliDuzenlePage} 
          options={{ title: 'Profili Düzenle' }} // LoginPage başlığını "Giriş Yap" yaptık
        />
        <Stack.Screen 
          name="DoctorSearchPage" 
          component={DoctorSearchPage} 
          options={{ title: 'Doktor Ara' }} // LoginPage başlığını "Giriş Yap" yaptık
        />
        <Stack.Screen 
          name="SaglıkDosyam" 
          component={SaglıkDosyam} 
          options={{ title: 'Sağlık Dosyam' }} // LoginPage başlığını "Giriş Yap" yaptık
        />
        <Stack.Screen 
          name="ProfilPage" 
          component={ProfilPage} 
          options={{ title: 'Profilim' }} // LoginPage başlığını "Giriş Yap" yaptık
          />
            <Stack.Screen 
          name="AutPage" 
          component={AutPage} 
          options={{ headerShown: false }} // Sadece HomeScreen başlığını kaldırdık
          />
           <Stack.Screen 
          name="HospitalAndHekimPage" 
          component={HospitalAndHekimPage} 
          options={{ headerShown: true }} // Sadece HomeScreen başlığını kaldırdık
          />
           <Stack.Screen 
          name="OtpPage" 
          component={OtpPage} 
          options={{ headerShown: false }} // Sadece HomeScreen başlığını kaldırdık
          />
    </Stack.Navigator>
  );
}
