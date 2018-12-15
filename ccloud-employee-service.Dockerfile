FROM node:latest
VOLUME EmployeeServiceSource
COPY Services/EmployeeService EmployeeServiceSource/
WORKDIR EmployeeServiceSource
RUN npm install
EXPOSE 3000
CMD npm start

