# int333
| VERSION | REPOSITORY
| - | - 
| 0.0.3 | https://github.com/pandevim/int333/

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
<script type="module" src="/build/int333.esm.js"></script>
<script nomodule="" src="/build/int333.js"></script>
```
- Then you can use the element anywhere in your template, JSX, html etc


### Node Modules
- Run `npm i @pandevim/int333`
- Put a script tag similar to these in the head of your index.html
```html
<script type="module" src="@pandevim/int333@VERSION/dist/index.mjs"></script>
<script nomodule="" src="@pandevim/int333@VERSION/dist/index.js"></script>
```
- Then you can use the element anywhere in your template, JSX, html etc

### Script Tag
- Put a script tag similar to these in the head of your index.html 
```html
<script type="module" src="https://unpkg.com/@pandevim/int333@VERSION/dist/int333/int333.esm.js"></script>
<script nomodule="" src="https://unpkg.com/@pandevim/int333@VERSION/dist/int333/int333.js"></script>
```
- Then you can use the element anywhere in your template, JSX, html etc
