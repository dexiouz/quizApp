/**
 * theme.js
 *
 * Theme Provider Configuration contains default constansts to be used across all Screens to maintain Consistency
 */

import { Platform, PixelRatio } from "react-native";
import {colors} from '../colors';
const MULTIPLIER = PixelRatio.get() >= 2 ? 1 : 0.9;

// App constants for colors font and other variables to be used throughout the app

const constants = {
  statusBarStyle: Platform.select({
    ios: "dark-content",
    android: "dark-content"
  }),
  lightStatusBarStyle: Platform.select({
    ios: "light-content",
    android: "light-content"
  }),
  fontFamily: Platform.select({ ios: "Graphik App", android: "Graphik" }),
  boldFontFamily: Platform.select({
    ios: "Graphik App",
    android: "Graphik_Semibold"
  }),
  tabBarFontSize: Platform.select({ default: 13 }),
  keyboardAvoidingBehavior: Platform.select({ ios: "padding", android: null })
};

const typography = {
  boldFontWeight: Platform.select({
    ios: "bold",
    android: "bold",
    default: null
  }),
  inputFieldFormSize: Platform.select({ default: 17 * MULTIPLIER }),
  smallFontSize: Platform.select({ default: 15 }),
  standardFontSize: Platform.select({ default: 17, android: 15 }),
  largeFontSize: Platform.select({
    default: 25 * MULTIPLIER,
    android: 23 * MULTIPLIER
  }),
  buttonFontSize: Platform.select({ default: 15, android: 15 })
};

// Theme Variables for Utilities, margins, paddings, borders, and  sizing
const utilities = {
  standardFieldHeight: Platform.select({ default: 64 * MULTIPLIER }),
  borderColor: "#707070",
  borderRadius: 4,
  iconSize: 20,
  tabFontSize: 10,
  tabIconSize: 26,
  letterSpacing: 0,
  horizontalPaddingLg: Platform.select({ default: 20, android: 20 }),
  horizontalPaddingMd: Platform.select({ default: 10, android: 10 }),
  verticalPaddingMd: Platform.select({ default: 14, android: 10 }),
  verticalPaddingLg: Platform.select({ default: 20, android: 20 })
};

export default { ...constants, ...typography, ...utilities, ...colors};
