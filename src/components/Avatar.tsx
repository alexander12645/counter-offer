import React from 'react';
import { View, StyleSheet, ImageSourcePropType } from 'react-native';
import { Image } from 'expo-image';
import { colors } from '../theme/tokens';

interface AvatarProps {
  source: ImageSourcePropType;
  size?: 'small' | 'medium';
  overlap?: boolean;
  padding?: number;
}

const SIZES = {
  small: 32,
  medium: 40,
};

export function Avatar({ source, size = 'small', overlap = false, padding = 4 }: AvatarProps) {
  const dimension = SIZES[size];
  const inner = dimension - padding;

  return (
    <View
      style={[
        styles.container,
        {
          width: dimension,
          height: dimension,
          borderRadius: dimension / 2,
          marginLeft: overlap ? -10 : 0,
        },
      ]}
    >
      <Image
        source={source}
        style={{
          width: inner,
          height: inner,
          borderRadius: inner / 2,
        }}
        contentFit="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface.default,
    borderWidth: 2,
    borderColor: colors.surface.default,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
