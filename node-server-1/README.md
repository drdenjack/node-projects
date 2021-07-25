# node-app3

This is a nice place to test some things.  See how dealios work.


## Requirements
docker
npm/node
nodemon - for auto restarting server


## To run the server

  - Regular plain old run it:
    $ node app/app.js

  - With nodemon to check for changes:
    $ nodemon app/app.js

## run postgres db in docker

    $ docker-compose -f database/docker-compose-pg.yml up -d 

- Connect to db vm manually:
    $ docker exec -it <hash id> /bin/bash

  - Another easy way is to use docker dashboard and just click the button!

- Run the FE from ~/code/react-crud-1/


# TODO
- run node in docker too
- make a db sequence as a counter for id.  Figure out the right way to do it.