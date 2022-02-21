import styled from "styled-components"
import mediaQueries, {gutter} from "./media-helper"

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;

  width: calc(100% + ${gutter}px);
  margin-left: -${gutter}px;

  > div {
    padding-left: ${gutter}px;
  }
`

const GridItem = styled.div`
  flex: 1 1 auto;
  width: ${({ width }) => (width ? `${width}%` : "100%")};
  max-width: ${({ width }) => (width ? `${width}%` : "100%")};

  ${({ col = {}, push = {}, pull = {} }) => {
    const colQueries = Object.keys(col).map(key =>
      mediaQueries[key]
        ? `
        @media ${mediaQueries[key]} {
          width: ${(100 * col[key]) / 12}%;
          max-width: ${(100 * col[key]) / 12}%;
        }
      `
        : ""
    )

    const pushQueries = Object.keys(push).map(key =>
      mediaQueries[key]
        ? `
        @media ${mediaQueries[key]} {
          margin-left: ${(100 * push[key]) / 12}%;
        }
      `
        : ""
    )

    const pullQueries = Object.keys(pull).map(key =>
      mediaQueries[key]
        ? `
          @media ${mediaQueries[key]} {
            margin-left: -${(100 * pull[key]) / 12}%;
          }
        `
        : ""
    )

    return `
      ${colQueries.join("")}
      ${pushQueries.join("")}
      ${pullQueries.join("")}
    `
  }}
`

const GridCentered = styled(Grid)`
  align-items: center;
`

export { Grid, GridCentered, GridItem }
