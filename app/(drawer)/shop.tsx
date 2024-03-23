import { WebView } from 'react-native-webview';
import { Spinner, View } from 'tamagui';
import React, { useState } from 'react';

const shop = () => {
  const [isLoading, setLoading] = useState(false);

  return (
    <>
      {isLoading && (
        <View h={'100vh'} flex justifyContent="center" alignItems="center">
          <Spinner size="large" color="$orange10" />
        </View>
      )}
      <WebView
        source={{ uri: 'https://www.designflag.dk/produkt-kategori/dannebrosflag/' }}
        onLoadProgress={({ nativeEvent }) => {
          if (nativeEvent.progress != 1 && isLoading == false) {
            setLoading(true);
          } else if (nativeEvent.progress == 1) {
            setLoading(false);
          }
        }}
      />
    </>
  );
};

export default shop;
