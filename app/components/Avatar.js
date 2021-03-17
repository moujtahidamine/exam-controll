import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Avatar = () => (
  <Image source={require('./avatar.jpg')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    marginBottom: 12,
    borderRadius : 3
  },
});

export default memo(Avatar);
