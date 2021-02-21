import {fadeInDown} from 'react-animations'
import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`${fadeInDown}`

const WelcomeDiv = styled.div`
    animation: 2s ${fadeIn};
`
export {
    WelcomeDiv
}