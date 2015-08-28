import React from 'react';
import ReactAddons from 'react/addons';
import Header from 'client/app/common/header';

var testUtils = ReactAddons.addons.TestUtils;

describe("test", function() {
	it("should run", function() {
		var renderer = testUtils.createRenderer();
		renderer.render(<Header/>);

		var output = renderer.getRenderOutput();

		expect(output.type).toEqual('nav');
		console.log(output.props.children.type);
	})
});
