
## Setup Docker File 

- creamos un archivo Dockerfile y colocaremos toda la configuración de nuestro contenedor 
 1. Instalamos node especificando la version
 
   ```
   FROM node:18
    ```
    
 2. Especificamos el directorio de trabajo
 
   ```
  WORKDIR /app
   ```
   
 3. Copiamos el package.json y el package-lock.json si existe en este caso copiamos pnpm-lock.yaml
```
COPY package.json ./
COPY pnpm-lock.yaml ./
```
 4. Instalamos las dependencias y modulos con el comando 
 - en el caso que estemos usando pnpm 
 ```
    RUN npm install -g pnpm
 ```
 - en el caso que estemos usando npm 
 ```
    RUN npm install
 ```
 5. Creamos un archivo .dockerignore e ignoramos  dentro de este archivo 
```
node_modules
npm-debug.log
```
 
 6. Copiamos el resto de los archivos de la Aplicación que se deben ejecutar 
```
COPY . .     
```

7. Ejecutamos el comando para iniciar la aplicación
```
CMD [ "pnpm", "start" ]
```

8. En el terminal ejecutamos el comando para construir la imagen
```
docker build -t <nombre de la imagen> .
```
- Verificamos que la imagen se haya creado correctamente con el comando 
```
docker images
```
- Ejecutamos el contenedor con el comando 
 el puerto 4000 es el puerto que se va a exponer y el 3000 es el puerto que se va a utilizar en la aplicación>>
```
docker run -it -p 4000:3000 <nombre de la imagen>









