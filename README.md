# Trova Components Library

A set of beautiful and colorful React components to build a modern and beautiful application.

---

## Technologies

-   [React](https://reactjs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Rollup](https://rollupjs.org/guide/en/)
-   [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
-   [Storybook](https://storybook.js.org/)
-   [Docz](https://www.docz.site/)

---

## Usage

In addition, the library is using code splitting. To take advantage of this feature, the import of the components should be like this:

```javascript
import TestComponent from 'react-component-library/build/TestComponent';
```

---

## Commands

### Basic

`npm run build` -> Rollup bundling process

`npm run storybook` -> Storybook will load up your components at http://localhost:6006

`npm run test:watch` -> To run your tests locally (they will re-run whenever a file is changed)

`npm run docz:dev` -> Live preview of the documentation

### Documentation

`npm run storybook:export` -> Export Storybook as static files

`npm run docz:build` -> To generate the static documentation to deploy to the documentation pages

#### Importing project
1. To include this project, you need to add this to the package dependencies:
``` json
"trova-components": "BrandonDenham/trova-components#master"
```
2. Run npm install or yarn install (depending on the parent project tool you are using)
3. On terminal, go the node_module/trova-components folder, and run `npm run build`
4. Now you can start importing components to the proyect using this structure:
   ``` javascript 
   import componentName from '@trova/components/componentName' ```

### Miscellaneous

`npm run test` -> Used for the CI/CD pipeline
