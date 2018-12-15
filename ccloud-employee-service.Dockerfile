FROM node
VOLUME EmployeeServiceSource
COPY Services/EmployeeService EmployeeServiceSource/
WORKDIR EmployeeServiceSource
RUN npm install --no-optional
EXPOSE 3000
CMD npm start

