import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import PhotoHobby from './PhotoHobby'


describe(`PhotoHobby component`, () => {
    describe(`Snapshot`, () => {
        it(`renders the UI as expected`, () => {
            const photo = renderer.create(
                <BrowserRouter>
                    <PhotoHobby />
                </BrowserRouter>).toJSON()
                expect(photo).toMatchSnapshot()
        })
    })

    describe(`Smoke test`, () => {
        it(`renders without crashing`, () => {
            const div = document.createElement('div')

            ReactDOM.render(
                <BrowserRouter>
                    <PhotoHobby />
                </BrowserRouter>,
                div
            )
            ReactDOM.unmountComponentAtNode(div)
        })
    })
})