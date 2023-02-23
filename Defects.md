reacte diagrams erros during intitial biuld
npm install --save @types/lodash
 error TS2307: Cannot find module 'lodash' or its corresponding type declarations.

 Thingsboard does not recognize that the database has been insitialized already on startup as the new configuratoin points to an external database in the postgres instance. It attenppts to run the data load to init the system and encounters an error because of existing data. The solution to this is to build and use a seperate thingsboard image that does not use an embedded postgres db.

 