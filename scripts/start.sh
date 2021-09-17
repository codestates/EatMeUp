#!/bin/bash
cd /home/ubuntu/EatMeUp/EatMeUp-Server

export EATMEUP_DATABASE_USERNAME=$(aws ssm get-parameters --region ap-northeast-2 --names EATMEUP_DATABASE_USERNAME --query Parameters[0].Value | sed 's/"//g')
export EATMEUP_DATABASE_PASSWORD=$(aws ssm get-parameters --region ap-northeast-2 --names EATMEUP_DATABASE_PASSWORD --query Parameters[0].Value | sed 's/"//g')
export EATMEUP_DATABASE_DATABASE=$(aws ssm get-parameters --region ap-northeast-2 --names EATMEUP_DATABASE_DATABASE --query Parameters[0].Value | sed 's/"//g')
export EATMEUP_DATABASE_HOST=$(aws ssm get-parameters --region ap-northeast-2 --names EATMEUP_DATABASE_HOST --query Parameters[0].Value | sed 's/"//g')
export EATMEUP_DATABASE_PORT=$(aws ssm get-parameters --region ap-northeast-2 --names EATMEUP_DATABASE_PORT --query Parameters[0].Value | sed 's/"//g')
export EATMEUP_DATABASE_DIALECT=$(aws ssm get-parameters --region ap-northeast-2 --names EATMEUP_DATABASE_DIALECT --query Parameters[0].Value | sed 's/"//g')
export NODE_ENV=$(aws ssm get-parameters --region ap-northeast-2 --names NODE_ENV --query Parameters[0].Value | sed 's/"//g')

authbind --deep pm2 start index.js