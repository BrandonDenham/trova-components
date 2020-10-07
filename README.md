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

### Miscellaneous

`npm run test` -> Used for the CI/CD pipeline
