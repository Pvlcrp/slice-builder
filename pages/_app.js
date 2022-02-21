import "material-icons/iconfont/material-icons.css"

import React from 'react'
import NextApp from 'next/app'
import { withRouter } from 'next/router'
import { ThemeProvider } from "styled-components"
import GlobalStyle from "styles/global"
import theme from "styles/theme"

class MyApp extends NextApp {
  static async getInitialProps() {
    return {
      props: {},
    };
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default withRouter(MyApp)