# Flight Search - by Daniel Cintra


## To build project container: 

```sh
docker image build -t react:app .
```

## To run project in development mode: 

```sh
docker container run -it -p 3000:3000 -p 35729:35729 -v $(pwd):/app react:app
```

## To build project 

```sh
docker container run -it -v $(pwd):/app react:app build
```

## To run tests 

```sh
docker container run -it -v $(pwd):/app react:app test
```

#### Obs: If your terminal doesn't support $(), run the scripts without $ and will work fine. Example: 

```sh
docker container run -it -p 3000:3000 -p 35729:35729 -v (pwd):/app react:app
```

## Utilized Libraries

To develop the project were used:

* React
* Redux
* React Router
* Lodash
* Axios
* Moment 
* React Flexbox Grid
* React Feather
* React Datetime
* React Click Outside
* ValidatorJS
* Debounce
* Docker

