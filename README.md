# Platzi JavaScript

Repositorio dedicado a realizar pruebas de JavaScript utilizando herramientas del Ecmascript

## Instalación y configuración

Para el funcionamiento del proyecto se utiliza Docker. A continuación la forma de inicializar

```

# Iniciarlizar el contenedor / Si no existe lo crea
docker-compose up -d

# Compilar para producción
docker-compose -f docker-production.yml up -d

# Ingresar a la consola
docker-compose exec learning-javascript bash

# Finalizar el contenedor
docker-compose down

```

## Ecmascript versions

Curso de ecmascript donde se presentan las funcionalidades de cada versión

```

docker-compose exec learning-javascript npm run ecmascript:es6
docker-compose exec learning-javascript npm run ecmascript:es7
docker-compose exec learning-javascript npm run ecmascript:es8
docker-compose exec learning-javascript npm run ecmascript:es9
docker-compose exec learning-javascript npm run ecmascript:es10

```

## Asynchronisms Curse

Curso de asincronismo donde se enseña el uso de callbacks, promise, async/await

```
docker-compose exec learning-javascript npm run callback
docker-compose exec learning-javascript npm run callback:challenge

docker-compose exec learning-javascript npm run promise
docker-compose exec learning-javascript npm run promise:challenge

docker-compose exec learning-javascript npm run async
docker-compose exec learning-javascript npm run async:challenge

```

## Scope and Clousures

Curso de scope and clousures donde se enseña el uso de estos

```
docker-compose exec learning-javascript npm run closure:index
docker-compose exec learning-javascript npm run closure:lexical
docker-compose exec learning-javascript npm run closure:loops
docker-compose exec learning-javascript npm run closure:private

docker-compose exec learning-javascript npm run scope:global
docker-compose exec learning-javascript npm run scope:local
docker-compose exec learning-javascript npm run scope:block
docker-compose exec learning-javascript npm run scope:function

```