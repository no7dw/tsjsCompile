
[typescript-require](https://www.npmjs.com/package/typescript-require)

```
    // Initialize
    require('typescript-require');

    // Get functions.ts
    var funcs = require("./funcs.ts");
    console.log(funcs.lowercase("HELLO!"));
```


[cannot find name ' require'](https://stackoverflow.com/questions/31173738/typescript-getting-error-ts2304-cannot-find-name-require)
[use tsc directly ,no "--outFile" specific](https://github.com/parcel-bundler/parcel/issues/394)


todo:

  - tsc  (allowjs:true ,this config make js copy to outDir)
  - run app.js with node

IDE：
  js 引用ts，在IDE（VS Code） 在跳转 ts , 并无问题.

ERROR:

```
    Class constructor Point cannot be invoked without 'new' typescript
```
   [fix  cannot be invoked without 'new'] ('https://github.com/RobinBuschmann/sequelize-typescript/issues/222')
