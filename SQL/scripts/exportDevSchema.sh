#!/bin/bash
## Only run this script on development machine

MASTER_DATABASE=covid19

DATE=`date +%d-%m-%y_%H:%M:%S`
SCHEMA_FILENAME="SQL/schema/dev_schema-$DATE.sql"
file_current_schema="SQL/schema/current_schema.sql"

# Export Schema
pg_dump -s -O $MASTER_DATABASE > "$SCHEMA_FILENAME"
pg_dump -s -O $MASTER_DATABASE > "$file_current_schema"
