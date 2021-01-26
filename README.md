# Trova Components Library

A set of beautiful and colorful React components to build a modern and beautiful application.

## Technologies

-   [React](https://reactjs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Rollup](https://rollupjs.org/guide/en/)
-   [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
-   [Storybook](https://storybook.js.org/)

## Usage

`npm i @trova/components`

```javascript
import { ThemeWrapper, MainContent } from '@trova/components';
```

The library is using and internal theming feature. That's why we provide the <ThemeWrapper> component where the default theme of the library is used along with the default global styles. 
The following code is an example of the usage:

```jsx
<ThemeWrapper>
    <MainContent>
        <H1>A Title</H1>

        <H2>A subtitle</H2>

        <Button
            buttonType={ButtonType.Primary}
            icon={<Icon name={IconName.Plus} color={'#FFF'} />}
        >
            Click me!
        </Button>
    </MainContent>
</ThemeWrapper>
```

---

## Commands

### Basic

`yarn build` -> Rollup bundling process

`yarn storybook` -> Storybook will load up your components at http://localhost:6006

`yarn test:watch` -> To run your tests locally (they will re-run whenever a file is changed)

### Documentation

`yarn storybook:export` -> Export Storybook as static files

### Miscellaneous

`yarn test` -> Used for the CI/CD pipeline
