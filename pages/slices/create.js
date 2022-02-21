import settings from "settings.json"
import React from "react"
import SliceBuilder from "components/slice-builder"
import JsonDisplay, { withJsonContext } from "components/json-display"

import { Button, Wrapper, Grid, GridItem} from "styles"

const App = () => {
  return (
    <>
      <Wrapper>
        <h1>
          Generate a new slice for : {settings.repository}.prismic.io
        </h1>
        <Grid>
          <GridItem col={{ md: 8, lg: 8 }}>
            <form>
              {/* Primary / Single */}
              <h3>Primary</h3>
              <SliceBuilder model="primary" />
              {/* Items / Repeatable */}
              <h3>Items</h3>
              <SliceBuilder model="items" />

              {/* Create slice on prismic API */}
              <Button>
                [+] Create slice
              </Button>
            </form>
          </GridItem>
          <GridItem col={{ md: 4, lg: 4 }}>
            {/* JSON Result */}
            <h2>JSON</h2>
            <JsonDisplay />
          </GridItem>
        </Grid>
      </Wrapper>
    </>
  )
}

export default withJsonContext(App) 