import settings from "settings.json"
import Client from "lib/client"
import {Button, Wrapper, GridItem} from "styles"

export default (props) => {
  return (
    <section>
      <Wrapper>
        <h1>
          Slices :
        </h1>

        <GridItem col={{sm: 6, md: 4, lg: 4}}>
          <Button href="/slices/create" as="a">
            [+] Create new slice
          </Button>
        </GridItem>

      </Wrapper>
    </section>
  )
}

export async function getServerSideProps(context) {
  const apiKey = settings.custom_type_api_key
  const repository = settings.repository
  const client = new Client({ apiKey, repository})
  const slices = await client.getSlices()
  return {
    props: {
      slices: slices || []
    }, // will be passed to the page component as props
  }
}
