# Usa una imagen oficial de Node.js como base
FROM node:20.17

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto en el que corre tu servidor
EXPOSE 4004

# Comando para ejecutar la app
CMD ["node", "index.js"]
