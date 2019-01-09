FROM node:8-alpine
RUN mkdir ProductsServiceSource
COPY Services/ProductsService ProductsServiceSource/
WORKDIR ProductsServiceSource
RUN npm install --no-optional
VOLUME ProductsServiceSource
EXPOSE 3000
CMD npm start






