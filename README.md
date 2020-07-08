# web-components

```bash
$ # Create project dir
$ mkdir web-components
$ cd web-components/
/web-components $ echo "# web-components" > README.md
```
```bash
/web-components $ # Create project container from web image
/web-components $ docker run --interactive --tty --detach \
--name web-components \
--mount type=bind,source=`pwd`,target=/app \
--publish 3333:3333 \
pandevim/web
```
```bash
/web-components $ # Start project container
/web-components $ docker exec --interactive --tty web-components bash
```
```bash
/app $ # Some boilerplate setup
/app $ echo "* text eol=lf" > .gitattributes
```
```bash
/app $ # Initilize git
/app $ hub init
/app $ hub add .
/app $ hub commit -m "initial commit"
```
```bash
/app $ # Create github repo and push
/app $ hub create web-components
/app $ hub remote add origin git@github.com:pandevim/web-components.git
/app $ hub push -u origin master
```
```bash
/app $ # Create components scope <scope>
/app $ npm init stencil
/app $ cd <scope>/
```
```bash
/<scope> $ # Make the component
/<scope> $ rm -rf src/components/my-component
/<scope> $ yarn generate <component-name>
```
```bash
$ # Test
$ docker exec -it container-web-components bash
/<scope> $ yarn test
```
```bash
$ # Start the local server
$ docker exec -it container-web-components bash
/<scope> $ yarn start
```
```bash
$ # Build the component
$ docker exec -it container-web-components bash
/<scope> $ yarn build
```
