import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Inquiries from './Inquiries'


describe(`Inquiries component`, () => {
    describe(`Snapshot`, () => {
        it(`renders the UI as expected`, () => {
            const inquiries = renderer.create(
                <BrowserRouter>
                    <Inquiries />
                </BrowserRouter>).toJSON()
            expect(inquiries).toMatchSnapshot()
        })
    })

    describe(`Smoke test`, () => {
        it(`renders without crashing`, () => {
            const div = document.createElement('div')

            ReactDOM.render(
                <BrowserRouter>
                    <Inquiries />
                </BrowserRouter>,
                div
            )
            ReactDOM.unmountComponentAtNode(div)
        })
    })
})