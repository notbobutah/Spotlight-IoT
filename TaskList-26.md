Readme: [Return](README.md)   

Timestamp|Task Id|task Name|Task Description
|:-------|:-----|:-------------|:-------------:
07:00:00 AM|4.1|refactor be sequelize|db init for spotlight is broken in GKE, looks like a misconfigured sequelize env. 
08:00:00 AM|4.2|test be db work|redeploy be and look for data
09:00:00 AM|4.3|updated be image |corrected the startup of the be container to properly executed sequelize migrate and seed operations created database schema and seed data in the postgres database on startup.
10:00:00 AM|4.4|testing updated image locally|created new remote image registry based docker-compose to test published images.
11:00:00 AM|4.5|verified local db|ran pulled images in local docker-compose as a means of testing the published image for proper startup process.
12:00:00 PM|4.6|Test public RESTful|Reran the be deployment in GKE and successfully loaded the data. Exercised the REST endpoints in the public url above and found the swagger page still refers to localhost
01:00:00 PM|4.7|Deploy java version of BE |decided to not muddy the waters, the project is available for review but doesn’t need to be deployed
