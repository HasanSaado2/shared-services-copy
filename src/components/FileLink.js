import React, { Component } from "react";
import { WebView, Linking } from "react-native-webview";

function FileLink() {
  const uri =
    "https://guestportal.adek.gov.ae:8433/portal/SelfRegistration.action?from=LOGIN";
  return (
    <WebView
      ref={(ref) => {
        this.webview = ref;
      }}
      source={{ uri }}
      onNavigationStateChange={(event) => {
        if (event.url !== uri) {
          this.webview.stopLoading();
          Linking.openURL(event.url);
        }
      }}
    />
  );
}

export default FileLink;
