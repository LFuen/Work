import {fadeInDown} from 'react-animations'
import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`${fadeInDown}`

const WelcomeDiv = styled.div`
    animation: 2s ${fadeIn};
`
const Images = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;

    img{
        object-fit: scale-down;
}
`

export {
    WelcomeDiv,
    Images
}