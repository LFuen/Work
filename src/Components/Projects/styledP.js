import {fadeInRight} from 'react-animations'
import styled, {keyframes} from 'styled-components'

const fromRight = keyframes`${fadeInRight}`

const ProjectDiv = styled.div`
    animation: 1s ${fromRight};
    margin-top: 6.25rem;
    margin-bottom: 4rem;
`

export {
    ProjectDiv
}