import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useTransition, animated } from 'react-spring'

import logo from './logo.svg'

function Logo({
  label = 'Aragon Bonding Curve Converter',
  onClick = () => {},
  mode = 'normal',
}) {
  // Don’t animate initially
  const animate = useRef(false)
  useEffect(() => {
    animate.current = true
  }, [])

  const modeTransition = useTransition(mode, null, {
    immediate: !animate.current,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <button
      onClick={onClick}
      css={`
        position: relative;
        display: flex;
        width: 68px;
        height: 68px;
        padding: 0;
        white-space: nowrap;
        border: 0;
        cursor: pointer;
        outline: 0 !important;
        background: transparent;
        &::-moz-focus-inner {
          border: 0;
        }
        &:active {
          transform: translateY(1px);
        }
      `}
    >
      {modeTransition.map(({ item: mode, key, props: { opacity } }) => (
        <animated.img
          key={key}
          alt={label}
          src={logo}
          style={{ opacity }}
          css={`
            position: absolute;
            top: 0;
            left: 0;
          `}
        />
      ))}
    </button>
  )
}

Logo.propTypes = {
  label: PropTypes.string,
  mode: PropTypes.oneOf(['ant', 'anj', 'normal']),
  onClick: PropTypes.func,
}

export default Logo
