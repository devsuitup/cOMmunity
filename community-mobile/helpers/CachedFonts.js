import { Font } from 'expo';

export const CachedFonts = fonts => fonts.map(font => Font.loadAsync(font));
