export const siteWidth = 1220
export const wrapperPadding = 20
export const gutter = 24;

export const breakpoints = {
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1440,
}

const mediaQueries = {
  sm: `(max-width: ${breakpoints.sm}px) and (min-width: ${breakpoints.xs + 1
    }px)`,
  md: `(max-width: ${breakpoints.md}px) and (min-width: ${breakpoints.sm + 1
    }px)`,
  lg: `(min-width: ${breakpoints.md + 1}px)`,
  small: `(min-width: ${breakpoints.xs + 1}px)`,
  medium: `(min-width: ${breakpoints.sm + 1}px)`,
  preMedium: `(max-width: ${breakpoints.sm}px)`,
  large: `(min-width: ${breakpoints.md + 1}px)`,
  siteWidth: `(min-width: ${siteWidth + 1}px)`,
  siteWidthWithSpace: `(min-width: ${siteWidth + 2 * wrapperPadding + 1}px)`,
  breakpoints,
}

export default mediaQueries
