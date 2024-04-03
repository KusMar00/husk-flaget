import { Ionicons } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import { StyleSheet } from 'react-native';

const DrawerLayout = () => (
  <Drawer>
    <Drawer.Screen
      name="index"
      options={{
        headerTitle: 'Hjem',
        headerStyle: {
          height: 150,
        },
        headerTitleStyle: {
          fontWeight: '500',
          fontSize: 40,
        },
        headerShadowVisible: false,
        drawerLabel: 'Hjem',
        headerLeft: () => <DrawerToggleButton />,
        drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="calender"
      options={{
        headerTitle: 'Kalender',
        drawerLabel: 'Kalender',
        drawerIcon: ({ size, color }) => (
          <Ionicons name="calendar-outline" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="info"
      options={{
        headerTitle: 'Flag Wiki',
        drawerLabel: 'Flag Wiki',
        drawerIcon: ({ size, color }) => (
          <Ionicons name="information-circle-outline" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="shop"
      options={{
        headerTitle: 'Shop',
        drawerLabel: 'Shop',
        drawerIcon: ({ size, color }) => <Ionicons name="cart-outline" size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="settings"
      options={{
        headerTitle: 'Indstillinger',
        drawerLabel: 'Indstillinger',
        drawerIcon: ({ size, color }) => (
          <Ionicons name="settings-outline" size={size} color={color} />
        ),
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
