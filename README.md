<p>
  <img src="logo.png" width="200px" alt="quarkly atomize">
</p>
<h1> @quarkly/theme </h1>

<br>
Component for creating and using themes with @quarkly/atomize
In Quarkly, themes are based on CSS variables.
 
The key feature of Quarkly themes is that variables from themes can be reused.
To use variables from a theme, just describe the property in the theme and call this property using the prefix "--".

# Demo

- [Codesandbox](https://codesandbox.io/s/atomize-demo-pom06?file=/src/Example.js:182-335)
- [Quarkly](https://quarkly.io)

# Install and Usage
Themes are used together with [atomize](https://github.com/quarkly/atomize).
```sh
npm i @quarkly/atomize
```

```sh
npm i styled-components
```
The variables can be used both in JSX:

```js
const theme = {
    colors: {
        dark: "#04080C",
    },
};
export const MyComp = () => (
    <Theme>
        <Box bgc="--colors-dark" height="100px" width="100px" />
    </Theme>
);
```

And in the theme:

```js
const theme = {
    colors: {
        dark: "#04080C",
    },
    borders: {
        dark: "5px solid --colors-dark",
    },
};
export const MyComp = () => (
    <Theme>
        <Box border="--borders-dark" height="100px" width="100px" />
    </Theme>
);
```

Shorter syntax is used for colors in jsx markup:

```js
const theme = {
    colors: {
        dark: "#04080C",
    },
};
export const MyComp = () => (
    <Theme>
        <Box bgc="--dark" height="100px" width="100px" />
    </Theme>
);
```

Themes have breakpoints for working with media expressions:

Any property can be prefixed with a breakpoint key name

```js
const theme = {
    breakpoints: {
        sm: [{ type: "max-width", value: 576 }],
        md: [{ type: "max-width", value: 768 }],
        lg: [{ type: "max-width", value: 992 }],
    },
    colors: {
        dark: "#04080C",
    },
    borders: {
        dark: "5px solid --colors-dark",
    },
};
export const MyComp = () => (
    <Theme>
        <Box
            md-bgc="--dark"
            border="--borders-dark"
            height="100px"
            width="100px"
        />
    </Theme>
);
```

# Advanced usage

-  styles for a theme component
-  CSS variables for components

### Styles for a Theme Component

There is a mechanism for styling components directly from the theme. The key is the name property when creating a component in atomize:

```js
const Box = atomize.div({ name: "Box" });
const theme = {
    Box: {
        width: "100px",
        height: "100px",
    },
};
export const MyComp = () => (
    <Theme>
        <Box bgc="yellow" />
    </Theme>
);
```

### CSS Variables for Components

In some cases, it is necessary to specify the reused styles for one or a group of components.

For using such variables, specify the prefix "--cmp"


```js
const Box = atomize.div({});
const theme = {
    components: {
        box: {
            height: {
                default: "100px",
            },
            width: {
                default: "100px",
            },
        },
    },
};
export const MyComp = () => (
    <Theme>
        <Box
            height="--cmp-box-height-default"
            witdh="--cmp-box-witdh-default"
            bgc="yellow"
        />
    </Theme>
);
```
