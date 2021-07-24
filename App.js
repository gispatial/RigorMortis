import React, {Component} from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
      <WebView
        source={{ uri: 'https://rizq.us/rzqpay/admin' }}
        style={{ marginTop: 17 }}
      />
  );
}
