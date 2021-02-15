import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import About from './About'


describe(`About component`, () => {
    describe(`Snapshot`, () => {
        it(`renders the UI as expected`, () => {
            const about = renderer.create(
                <BrowserRouter>
                    <About />
                </BrowserRouter>).toJSON()
            expect(about).toMatchSnapshot()
        })
    })

    describe(`Smoke test`, () => {
        it(`Renders without crashing`, () => {
            const div = document.createElement('div')

            ReactDOM.render(
                <BrowserRouter>
                    <About />
                </BrowserRouter>,
                div
            )
            ReactDOM.unmountComponentAtNode(div)
        })
    })
})