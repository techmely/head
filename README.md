# Head Manager in SSR

An easy peasy lemon squeezy solution for management head in your server side.

- Small bundle size
- Super easy in DX, write head like you write object JS
- Support auto sort head with logic of CapoJs to improve the website performance

## How to use

```bun
bun install @techmely/head
```

```ts
const heads: Head[] = []
const headHtml = composeHeads(heads)
```
