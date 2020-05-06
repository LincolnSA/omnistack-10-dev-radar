import React from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Profile({ navigation }) {
  const githubUerName = navigation.getParam('github_username');

  return (
    <WebView style={{ flex: 1 }} source={{ uri: `https://github.com/${githubUerName}` }} />
  );
}

