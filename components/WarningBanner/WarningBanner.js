import React from 'react'

import { useShowBanner } from 'components/utils/store'

const WarningBanner = () => {
  const { showBanner, hideBanner } = useShowBanner()

  if (!showBanner) return null
  return (
    <span
      css={`
        width: 100%;
        color: white;
        background-color: red;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        padding: 5px;
        display: block;
      `}
    >
      THIS APP IS A SOVRYN LABS PROJECT. READ THE LIMITATIONS{' '}
      <a
        css={`
          color: white;
					text-decoration: underline;
					:hover {
						color: white;
					}
        `}
        href="https://wiki.sovryn.app/e/en/sovryn-dapp/subprotocols/bonding-curve-trading"
        rel="noopener noreferrer"
        target="_blank"
      >
        HERE
      </a>
      .
      <span
        css={`
          float: right;
          margin-right: 10px;
					cursor: pointer;
        `}
        onClick={hideBanner}
      >
        &#10006;
      </span>
    </span>
  )
}

export default WarningBanner
