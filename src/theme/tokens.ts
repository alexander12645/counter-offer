export const fontFamily = {
  regular: 'NuSansText-Regular',
  medium: 'NuSansText-Medium',
  semibold: 'NuSansText-Semibold',
} as const;

export const colors = {
  background: {
    default: '#FFFFFF',
    subtle: '#EFEFEF',
  },
  surface: {
    default: '#FFFFFF',
    subtle: '#EFEFEF',
    disabled: '#EFEFEF',
    accent: {
      primary: '#820AD1',
    },
    feedback: {
      critical: {
        strong: '#D01D1C',
      },
    },
  },
  content: {
    default: 'rgba(0, 0, 0, 0.96)',
    subtle: 'rgba(0, 0, 0, 0.64)',
    disabled: 'rgba(0, 0, 0, 0.32)',
    onColor: '#FFFFFF',
    accent: {
      primary: '#820AD1',
    },
  },
  border: {
    default: '#EFEFEF',
    onSubtle: 'rgba(0, 0, 0, 0.08)',
  },
  feedback: {
    destructive: '#D01D1C',
  },
  accent: {
    primary: '#820AD1',
  },
} as const;

export const spacing = {
  half: 2,
  x1: 4,
  x2: 8,
  x3: 12,
  x4: 16,
  x5: 20,
  x6: 24,
  x7: 28,
  x8: 32,
} as const;

export const radii = {
  small: 4,
  medium: 16,
  large: 24,
  full: 999,
} as const;

/**
 * Typography tokens mapped 1:1 from Figma NuDS v3 variables.
 *
 * Figma lineHeight is a multiplier (e.g. 1.3 = fontSize * 1.3).
 * Figma letterSpacing is a percentage (e.g. -1 = fontSize * -0.01).
 * React Native expects absolute px values for both.
 */
export const typography = {
  title: {
    small: {
      fontFamily: fontFamily.semibold,
      fontSize: 26,
      lineHeight: 31,
      letterSpacing: -0.52,
    },
  },
  subtitle: {
    small: {
      strong: {
        fontFamily: fontFamily.semibold,
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.17,
      },
    },
  },
  paragraph: {
    small: {
      default: {
        fontFamily: fontFamily.regular,
        fontSize: 15,
        lineHeight: 22,
        letterSpacing: -0.15,
      },
    },
  },
  label: {
    xsmall: {
      strong: {
        fontFamily: fontFamily.semibold,
        fontSize: 13,
        lineHeight: 17,
        letterSpacing: 0,
      },
    },
  },
  labelSmall: {
    default: {
      fontFamily: fontFamily.regular,
      fontSize: 15,
      lineHeight: 20,
      letterSpacing: -0.15,
    },
    strong: {
      fontFamily: fontFamily.semibold,
      fontSize: 15,
      lineHeight: 20,
      letterSpacing: -0.15,
    },
  },
  labelMedium: {
    default: {
      fontFamily: fontFamily.regular,
      fontSize: 17,
      lineHeight: 22,
      letterSpacing: -0.17,
    },
    strong: {
      fontFamily: fontFamily.semibold,
      fontSize: 17,
      lineHeight: 22,
      letterSpacing: -0.17,
    },
  },
} as const;
