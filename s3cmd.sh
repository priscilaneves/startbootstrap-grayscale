#!/bin/bash
#compress
aws s3 sync dist/css s3://xdevel.com.br/css  --acl=public-read --delete --cache-control="max-age=31536000" --content-encoding="gzip"
aws s3 sync dist/less s3://xdevel.com.br/less  --acl=public-read --delete --cache-control="max-age=31536000" --content-encoding="gzip"
aws s3 sync dist/js s3://xdevel.com.br/js  --acl=public-read --delete --cache-control="max-age=31536000" --content-encoding="gzip"
aws s3 sync dist/font-awesome-4.2.0 s3://xdevel.com.br/font-awesome-4.2.0  --acl=public-read --delete --cache-control="max-age=31536000" --content-encoding="gzip"
aws s3 sync dist/font-awesome-4.3.0 s3://xdevel.com.br/font-awesome-4.3.0  --acl=public-read --delete --cache-control="max-age=31536000" --content-encoding="gzip"
aws s3 cp   dist/dist/index.html s3://xdevel.com.br/index.html  --acl=public-read  --cache-control="max-age=31536000" --content-encoding="gzip"
#not compress
aws s3 sync dist/img s3://xdevel.com.br/img  --acl=public-read --delete --cache-control="max-age=31536000"
aws s3 sync dist/fonts s3://xdevel.com.br/fonts  --acl=public-read --delete --cache-control="max-age=31536000"
aws s3 cp   dist/favicon.ico s3://xdevel.com.br/index.ico  --acl=public-read  --cache-control="max-age=31536000"
