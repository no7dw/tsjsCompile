
Error 1:
error TS1192: Module has no default export.

```
  {
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "moduleResolution": "node",
    "lib": ["es5", "dom"],
    "allowSyntheticDefaultImports": true, //important
    "esModuleInterop": true //important
  }
}

``` 

Error 2:
error TS2351: Cannot use 'new' with an expression whose type lacks a call or construct signature.
[lacks a call or construct signature](
https://github.com/Microsoft/TypeScript-React-Starter/issues/8)

