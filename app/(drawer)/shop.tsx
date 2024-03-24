import { WebView } from 'react-native-webview';
import { Spinner, View } from 'tamagui';
import React, { useState } from 'react';

const shop = () => {
  const [isLoading, setLoading] = useState(false);

  return (
    <>
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
      {isLoading && (
        <View h={'100%'} alignItems="center" justifyContent="center">
          <Spinner size="large" color="$grey10" />
        </View>
      )}
    </>
  );
};

export default shop;
