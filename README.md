# react-component-generator

React component boilerplate code generator with typescript.

![Create React Component Example](https://user-images.githubusercontent.com/43134750/139830943-4ca9cb2a-bc5f-4a8a-9810-1981ac14739a.gif)

## How to use

- Install the extension [here](https://marketplace.visualstudio.com/items?itemName=PulkitBanta.react-component-generator).
- Open command pallete `Ctrl + Shift + P` (windows) or `Cmd + Shift + P` (mac).
- Search `Create React Component` and hit enter.
- Enter path of the component eg `src/components`. This is the parent folder inside which your component will be created.
- Enter name of the component eg `Header`. This is the component name and the folder which will contain the component

## Generated Code Structure

#### Test file with jest and react-testing library

```js
import { render } from '@test-utils';
import { Header } from './Header';

describe('Header', () => {
 it('should render properly', () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
 });
});
```

#### Component file

```js
import { FC, memo } from 'react';

export const Header: FC = memo(() => {
 return <></>;
});

Header.displayName = 'Header';
```

#### index.js

```js
export { Header as default } from './Header';
```

#### types.js

```js
export type Props = {
 // component prop type
 click: () => void
};
```

## Contributing

The project is open to all sort of contributions.
