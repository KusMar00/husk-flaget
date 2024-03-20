import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { Pressable, StyleSheet } from 'react-native';

const DrawerLayout = () => (
  <Drawer>
    <Drawer.Screen
      name="index"
      options={{
        headerTitle: 'Home',
        drawerLabel: 'Home',
        drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="info"
      options={{
        headerTitle: 'Info',
        drawerLabel: 'Info',
        drawerIcon: ({ size, color }) => (
          <Ionicons name="information-circle" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="shop"
      options={{
        headerTitle: 'Shop',
        drawerLabel: 'Shop',
        drawerIcon: ({ size, color }) => <Ionicons name="cart" size={size} color={color} />,
      }}
    />
  </Drawer>
);

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
  },
});

export default DrawerLayout;
