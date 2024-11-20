# Etapa 1: Construcción
FROM node:20.17 AS builder

# Establecer directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar los archivos de configuración de Angular
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código fuente
COPY . .

# Generar la versión optimizada para producción
RUN npm run build --prod

# Etapa 2: Servir la aplicación con NGINX
FROM nginx:1.21

# Copiar archivos de la aplicación desde la etapa anterior
COPY --from=builder /usr/src/app/dist/client/browser /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]
