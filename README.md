# web-components

| Scope | Latest Version | Url
| - | - | -
| int333 | 0.0.3 | https://github.com/pandevim/int333/
| ramabana | 0.0.0 | https://github.com/
| ytnlp | 0.0.0 | https://github.com/

## Setup

```bash
$ # Create project dir
$ mkdir web-components
$ cd web-components/
/web-components $ echo "# web-components" > README.md
```
```bash
/web-components $ # Create project container from web image and bind correct directory
/web-components $ docker run --interactive --tty \
--name web-components \
--mount type=bind,source=`pwd`,target=/app \
--publish 3333:3333 \
pandevim/web
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
/app $ hub push
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

