import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useViewport } from 'use-viewport'

function getTokenName(symbol) {
  if (symbol === 'COLLATERAL') {
    return 'SOV'
  }
  if (symbol === 'BONDED') {
    return 'MYNT'
  }
}

function AmountInput({
  color = true,
  disabled = false,
  onChange,
  symbol,
  value,
}) {
  const viewport = useViewport()

  // Super ugly Next.js workaround to let us have differences between SSR & client
  const [isCompact, setIsCompact] = useState(false)
  const smallLayout = viewport.below(414)
  useEffect(() => {
    setTimeout(() => {
      setIsCompact(smallLayout)
    }, 0)
  }, [smallLayout])

  return (
    <label
      css={`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        height: 100%;
      `}
    >
      <div
        css={`
          display: flex;
          align-items: center;
          font-size: 24px;
          color: ${color ? '#9096B6' : '#FFF'};
        `}
      >
        <span
          css={`
            position: relative;
            top: 1px;
          `}
        >
          {getTokenName(symbol)}
        </span>
      </div>
      <input
        type="text"
        disabled={disabled}
        value={value}
        onChange={onChange}
        placeholder="0"
        css={`
          display: block;
          width: 100%;
          text-align: center;
          font-weight: 600;
          color: ${color ? '#1c1c1c' : '#FFF'};
          font-size: ${isCompact ? '36px' : '88px'};
          background: transparent;
          border: 0;
          outline: none;
          &::placeholder {
            color: ${color ? '#1c1c1c' : '#FFF'};
          }
        `}
      />
    </label>
  )
}

AmountInput.propTypes = {
  color: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  symbol: PropTypes.oneOf(['COLLATERAL', 'BONDED']).isRequired,
  value: PropTypes.string,
}

export default AmountInput
