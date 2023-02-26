FROM lukechilds/dockerpi

# Variables needed at runtime to configure postgres and run the initdb scripts
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=spotlight
ENV POSTGRES_DB=postgres
ENV APP_DB_USER=thingsboard
ENV APP_DB_PASS=spotlight
ENV APP_DB_NAME=thingsboard 
# Copy in the load-extensions script
COPY provision_curl.sh /docker-entrypoint-initdb.d/