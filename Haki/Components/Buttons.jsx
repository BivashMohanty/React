import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Buttons = ({
  kind = 'primary',
  variant = 'solid',
  size = 'medium',
  iconOnly = false,
  iconName,
  iconSize = 24,
  iconColor = 'white',
  children,
  onPress,
}) => {
  const getButtonStyle = () => {
    let style = [styles.button, styles[kind], styles[variant], styles[size]];

    if (iconOnly) {
      style.push(styles.iconOnly);
    }

    return style;
  };

  const getTextStyle = () => {
    return [styles.text, styles[`${kind}Text`], styles[`${size}Text`]];
  };

  return (
    <TouchableOpacity style={getButtonStyle()} onPress={onPress}>
      {iconName && (
        <Ionicons name={iconName} size={iconSize} color={iconColor} />
      )}
      {!iconOnly && <Text style={getTextStyle()}>{children}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  primary: {
    backgroundColor: '#841584',
  },
  secondary: {
    backgroundColor: '#6c757d',
  },
  solid: {
    borderWidth: 0,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
  },
  small: {
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  medium: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  large: {
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  iconOnly: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: 'white',
  },
  smallText: {
    fontSize: 12,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 20,
  },
  outlineText: {
    primary: {
      color: '#841584',
    },
    secondary: {
      color: '#6c757d',
    },
  },
  primaryOutline: {
    borderColor: '#841584',
  },
  secondaryOutline: {
    borderColor: '#6c757d',
  },
});

export default Buttons;
