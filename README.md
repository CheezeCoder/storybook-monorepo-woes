# storybook-monorepo-woes

Testing repo for storybook problems.

### An issue with writing your own storybook addon within a yarn typescript monorepo.

The purpose of the test addon is to show or hid a component at the bottom of a story depending on the state of a toolbar button. However whenever the toolbar button is pressed we get an error exclaiming that:

```
vendors~main.4a74125e061c6152166f.bundle.js:83880 Uncaught Invariant Violation: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.
    at http://localhost:63500/vendors~main.4a74125e061c6152166f.bundle.js:83880:26
    at Object.throwInvalidHookError (http://localhost:63500/vendors~main.4a74125e061c6152166f.bundle.js:83883:5)
    at useContext (http://localhost:63500/vendors~main.4a74125e061c6152166f.bundle.js:107890:21)
    at useStorybookApi (http://localhost:63500/vendors~main.4a74125e061c6152166f.bundle.js:4555:44)
    at useChannel (http://localhost:63500/vendors~main.4a74125e061c6152166f.bundle.js:4590:13)
    at emit (http://localhost:63500/main.1a3abdd9125454e6749a.bundle.js:28:81)
    at HTMLUnknownElement.callCallback (http://localhost:63500/vendors~main.4a74125e061c6152166f.bundle.js:69202:14)
    at Object.invokeGuardedCallbackDev (http://localhost:63500/vendors~main.4a74125e061c6152166f.bundle.js:69252:16)
    at invokeGuardedCallback (http://localhost:63500/vendors~main.4a74125e061c6152166f.bundle.js:69309:31)
    at invokeGuardedCallbackAndCatchFirstError (http://localhost:63500/vendors~main.4a74125e061c6152166f.bundle.js:69323:25)
```

## To get started:

```
yarn install
```

then

```
yarn build
```

then

```
yarn storybook
```
