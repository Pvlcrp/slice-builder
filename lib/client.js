const axios = require("axios")

function Client({repository, apiKey}) {
  this.repository = repository;
  this.apiKey = apiKey;
  this.headers = {
    "repository": repository,
    "Authorization": `Bearer ${apiKey}`,
  }
}

Client.prototype.getSlices = function() {
  return axios.get("https://customtypes.prismic.io/slices", {
    headers: this.headers
  })
    .then(({ data }) => data)
    .catch(this.handleApiError)
}

Client.prototype.handleApiError = function(error) {
  const response = error.response || {}
  const data = response.data || {}
  const message = data.message || ""

  if (message) {
    console.error("An error occured in the Prismic Client : ", message)
  } else {
    console.error("An error occured in the Prismic Client : ", error)
  }
}

module.exports = Client