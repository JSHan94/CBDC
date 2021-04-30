#!/bin/bash

cd CBDC_user

nohup npm start &

cd ../CBDC_admin

nohup npm start &

cd ../CBDC_server

nohup npm start &