# #!/bin/bash
# set -e
# #   Update pg_hba_file_rules set address='0.0.0.0' WHERE type = 'host' and address = '127.0.0.1';
# # sed -i'.BACKUP' 's/127.0.0.1/0.0.0.0/g' /data/db/pg_hba.conf
# #   SELECT pg_reload_conf();

# echo 'Initializing database for Thingsboard and spotlight - new image'
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  DROP DATABASE $APP_DB_NAME;
  CREATE USER $APP_DB_USER WITH SUPERUSER PASSWORD '$APP_DB_PASS';
  CREATE DATABASE $APP_DB_NAME;
  GRANT ALL PRIVILEGES ON DATABASE $APP_DB_NAME TO $APP_DB_USER;
  ALTER USER $APP_DB_USER with SUPERUSER;
  \connect $APP_DB_NAME $APP_DB_USER
  SELECT * from pg_hba_file_rules WHERE type = 'host' and address = '127.0.0.1';
EOSQL
