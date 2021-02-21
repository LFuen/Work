import {fadeIn} from 'react-animations'
import styled, {keyframes} from 'styled-components'

const appear = keyframes`${fadeIn}`

const AboutDiv = styled.div`
    animation: 3s ${appear};
`

export {
    AboutDiv
}