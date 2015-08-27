// react-shim.js
// See https://github.com/facebook/react/issues/1939
import reactDOMProperty from 'react/lib/DOMProperty';
reactDOMProperty.ID_ATTRIBUTE_NAME = 'data-myid';
import react from 'react';

export default react;
