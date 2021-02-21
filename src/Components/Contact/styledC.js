import {fadeInDown} from 'react-animations'
import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`${fadeInDown}`

const ContactDiv = styled.div`
    animation: 2s ${fadeIn};
`
export {
    ContactDiv
}