import React from 'react'
import ConvertForm from 'components/ConvertForm/ConvertForm'
import WarningBanner from 'components/WarningBanner/WarningBanner'

const App = () => (
  <div
    css={`
      position: relative;
      height: 100vh;
    `}
  >
    <WarningBanner />
    <ConvertForm />
  </div>
)

export default App
