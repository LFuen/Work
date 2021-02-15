import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Welcome from './Welcome'


describe(`Welcome component`, () => {
    describe(`Snapshot`, () => {
        it(`renders the UI as expected`, () => {
            const welcome = renderer.create(
                <BrowserRouter>
                    <Welcome />
                </BrowserRouter>).toJSON()
            expect(welcome).toMatchSnapshot()
        })
    })

    describe(`Smoke test`, () => {
        it(`renders without crashing`, () => {
            const div = document.createElement('div')

            ReactDOM.render(
                <BrowserRouter>
                    <Welcome />
                </BrowserRouter>,
                div
            )
            ReactDOM.unmountComponentAtNode(div)
        })
    })
})