 # Documentation
 - folder structure
    * node js apis are in folder backendapis.
    * Frontent react code is in folder frontend.
    * email sender cli is in folder digsupemail

 - To start application run command : docker-compose -f docker-compose.yml up --build -d
 - frontend will be hosted on port 4200
 - To run cli
    * cd to digsupemail
    * run: npm install / yarn install
    * run: ./digsupemail start


# Docker containers
- 'frontend' container will build react application and hosted using nginx mapped to port 4200
- 'postgresdb' container is database container. Port is mapped to host so node js cli script can connect whith it. Node js cli is not part of docker compose
- 'apis' container is node js apis container. Port is mapped to host so frontend can access it. Also it is  linked to 'postgresdb' container so can connect to databse.
- 'mailcatcher' conatiner is used by node js cli script
 


# Notes
- add config in gitignore