import { WebView } from 'react-native-webview';
import React from 'react';
import { View } from 'tamagui';

const shop = () => {
  return <WebView source={{ uri: 'https://www.designflag.dk/produkt-kategori/dannebrosflag/' }} />;
};

export default shop;
