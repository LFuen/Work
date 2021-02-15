import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Nav from './Nav'


describe(`Snapshot`, () => {
    describe(`Snapshot`, () => {
        it(`renders the UI as expected`, () => {
            const nav = renderer.create(
                <BrowserRouter>
                    <Nav />
                </BrowserRouter>).toJSON()
            expect(nav).toMatchSnapshot()
        })
    })

    describe(`Smoke test`, () => {
        it(`Renders without crashing`, () => {
            const div = document.createElement('div')

            ReactDOM.render(
                <BrowserRouter>
                    <Nav />
                </BrowserRouter>,
                div
            )
            ReactDOM.unmountComponentAtNode(div)
        })
    })
})