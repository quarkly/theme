# @quarkly/theme

Компонент для создания и использования тем совместно с @quarkly/atomize

Темы в quarkly базируются на css-переменных.

Ключевой особенностью тем в кваркли явлется возможность переиспользования переменных из тем.

Для того, чтобы использовать переменные из темы достаточно описать свойство в теме и обратиться к этому свойству используя префикс "--".

Переменные можно использовать как в JSX:

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

Так и в самой теме:

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

Для цветов в jsx-разметке предусмотрен более короткий синтаксис:

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

Для работы с медиа-выражениями в темах предусмотрены breakpoints:

К любому свойству можно добавить префикс в виде имени ключа breakpoint'а.

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

# Demo
[Codesandbox](https://codesandbox.io/s/atomize-demo-pom06?file=/src/Example.js:182-335)