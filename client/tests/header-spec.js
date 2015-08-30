import React from 'react';
import ReactAddons from 'react/addons';
import Header from 'client/app/common/header';

var testUtils = ReactAddons.addons.TestUtils;
console.log(Header);

describe("Header", function () {
    it("should exist", function () {
        var renderer = testUtils.createRenderer();
        renderer.render(<Header/>);

        var output = renderer.getRenderOutput();

        expect(Header).toBeDefined();
        expect(output.type).toEqual('nav');
        console.log(output.props.children.type);
    });

    it('can scryRenderedDOMComponentsWithClass with TextComponent', function () {
        // abhi-todo Setup tests for components that use React-router
        class Wrapper extends React.Component {
            render() {
                return <div>Hello <span className="some-class">Jim</span></div>;
            }
        }
        var renderedComponent = testUtils.renderIntoDocument(<Wrapper />);
        var scryResults = testUtils.scryRenderedDOMComponentsWithClass(
            renderedComponent,
            'some-class'
        );
        expect(scryResults.length).toBe(1);

    });
});
