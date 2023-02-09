// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// Prevents "DatabaseClosedError: MissingAPIError IndexedDB API missing and/or ReferenceError: indexedDB is not defined" when running tests.
// https://stackoverflow.com/questions/47934383/indexeddb-testing-with-jest-enzyme-referenceerror-indexeddb-is-not-defined
// https://github.com/dumbmatter/fakeIndexedDB#user-content-with-jest
import 'fake-indexeddb/auto';
