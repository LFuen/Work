import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Contact from './Contact'



describe(`Contact component`, () => {
    describe(`Snapshot`, () => {
        it(`renders the UI as expected`, () => {
            const contact = renderer.create(
            <BrowserRouter>
                <Contact />
            </BrowserRouter>).toJSON()
            expect(contact).toMatchSnapshot()
        })
    })

    describe(`Smoke test`, () => {
        it(`Renders without crashing`, () => {
            const div = document.createElement('div')

            ReactDOM.render(
                <BrowserRouter>
                    <Contact />
                </BrowserRouter>,
                div
            )
            ReactDOM.unmountComponentAtNode(div)
        })
    })
})