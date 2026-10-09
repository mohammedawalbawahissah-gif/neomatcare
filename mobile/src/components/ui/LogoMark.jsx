import React from 'react';
import { Image } from 'react-native';

/**
 * NeoMatCare's mark (heart + vitals pulse + newborn), the mobile
 * counterpart of web's `LogoMark` — same artwork as the app icon and
 * splash screen, dropped in wherever a `heart` Ionicon previously stood
 * in for a logo (login header, AI assistant header/avatars), so the
 * app uses one consistent mark instead of a generic icon.
 */
export default function LogoMark({ size = 26, style }) {
  return (
    <Image
      source={require('../../../assets/logo.png')}
      style={[{ width: size, height: size, borderRadius: size * 0.22 }, style]}
      accessibilityLabel="NeoMatCare"
    />
  );
}
