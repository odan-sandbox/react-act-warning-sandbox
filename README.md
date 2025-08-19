# react-act-warning-sandbox

```bash
$ yarn jest foo
  console.error
    An update to ForwardRef(TouchRipple) inside a test was not wrapped in act(...).
    
    When testing, code that causes React state updates should be wrapped into act(...):
    
    act(() => {
      /* fire events that update state */
    });
    /* assert on the output */
    
    This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act

      at node_modules/react-dom/cjs/react-dom-client.development.js:16023:19
      at runWithFiberInDEV (node_modules/react-dom/cjs/react-dom-client.development.js:1522:13)
      at warnIfUpdatesNotWrappedWithActDEV (node_modules/react-dom/cjs/react-dom-client.development.js:16022:9)
      at scheduleUpdateOnFiber (node_modules/react-dom/cjs/react-dom-client.development.js:14396:11)
      at dispatchSetStateInternal (node_modules/react-dom/cjs/react-dom-client.development.js:6969:13)
      at dispatchSetState (node_modules/react-dom/cjs/react-dom-client.development.js:6927:7)
      at node_modules/@mui/material/ButtonBase/TouchRipple.js:171:5
      at node_modules/@mui/material/ButtonBase/TouchRipple.js:264:7
      at Object.pulsate (node_modules/@mui/material/ButtonBase/TouchRipple.js:274:5)
      at node_modules/@mui/material/useLazyRipple/useLazyRipple.js:77:47

 PASS  src/foo.test.jsx
  ✓ test (40 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.152 s
Ran all test suites matching foo.
```