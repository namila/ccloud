FROM node:8-alpine
RUN mkdir EmployeeServiceSource
COPY Services/EmployeeService EmployeeServiceSource/
WORKDIR EmployeeServiceSource
RUN npm install --no-optional
VOLUME EmployeeServiceSource
EXPOSE 3000
CMD npm start

