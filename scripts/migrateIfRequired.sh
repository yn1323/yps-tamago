#!/usr/bin/bash

if [ -z ${MIGRATE_DATABASE+x} ];
  then echo 'Skipping migration. No $MIGRATE_DATABASE';
  else DATABASE_URL=$MIGRATE_DATABASE yarn rw deploy vercel --no-build;
fi