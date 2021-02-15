import React, { createElement } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Footer from './Footer'


describe(`Footer component`, () => {
    describe(`Snapshot`, () => {
        it(`renders the UI as expected`, () => {
            const footer = renderer.create(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>).toJSON()
            expect(footer).toMatchSnapshot()
        })
    })

    describe(`Smoke test`, () => {
        it(`renders without crashing`, () => {
            const div = document.createElement('div')

            ReactDOM.render(
                <BrowserRouter>
                    <Footer />
                </BrowserRouter>,
                div
            )
            ReactDOM.unmountComponentAtNode(div)
        })
    })
})