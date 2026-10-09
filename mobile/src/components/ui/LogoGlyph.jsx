import React from 'react';
import { Image } from 'react-native';

/**
 * Transparent-background glyph (heart + vitals pulse + newborn ring),
 * for dropping into a chip the caller already colors — the mobile
 * counterpart of web's `LogoMark`. Use `LogoMark` instead for a
 * standalone placement that needs its own background.
 */
export default function LogoGlyph({ size = 16, style }) {
  return (
    <Image
      source={require('../../../assets/logo-glyph.png')}
      style={[{ width: size, height: size }, style]}
      accessibilityLabel="NeoMatCare"
    />
  );
}
