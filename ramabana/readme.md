# ramabana
Check version in [package.json](./package.json)

| Web Components | Description
| - | -
| el-component | Test component

## Run

```bash
$ # Test
$ docker exec -it web-components bash
/app/int333 $ yarn test
```
```bash
$ # Start the local server
$ docker exec -it web-components bash
/app/int333 $ yarn start
```
```bash
$ # Build the component
$ docker exec -it web-components bash
/app/int333 $ yarn build
```


## Using this component

### Development
- Put a script tag similar to these in the head of your index.html 
```html
<script type="module" src="/build/ramabana.esm.js"></script>
<script nomodule="" src="/build/ramabana.js"></script>
```
- Then you can use the element anywhere in your template, JSX, html etc


### Node Modules
- Run `npm i @pandevim/ramabana`
- Put a script tag similar to these in the head of your index.html
```html
<script type="module" src="@pandevim/ramabana@VERSION/dist/index.mjs"></script>
<script nomodule="" src="@pandevim/ramabana@VERSION/dist/index.js"></script>
```
- Then you can use the element anywhere in your template, JSX, html etc

### Script Tag
- Put a script tag similar to these in the head of your index.html 
```html
<script type="module" src="https://unpkg.com/@pandevim/ramabana@VERSION/dist/ramabana/ramabana.esm.js"></script>
<script nomodule="" src="https://unpkg.com/@pandevim/ramabana@VERSION/dist/ramabana/ramabana.js"></script>
```
- Then you can use the element anywhere in your template, JSX, html etc
