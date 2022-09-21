#!/bin/bash

ts=$(date +%s)
cmt="$CI_COMMIT_REF_NAME"
version="$EB_APP_NAME-$cmt-$ts"
# Zip file name
fn="$version.zip"
echo "Setting filepath as $version.zip"

echo "Assigning credentials"
aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
aws configure set region $AWS_DEFAULT_REGION

echo "Compressing files"
zip-files -o $fn .nuxt node_modules .ebextensions nuxt.config.js package.json package-lock.json tailwind.config.js --include-dotfiles --exclude-vcs -x \*.zip

# e.g. 8prop-ssr-dev
S3_KEY="$EB_APP_NAME-$SHORT_ENV/$fn"

# e.g. 8prop-ssr-dev-env
EB_APP_ENV="$EB_APP_NAME-${SHORT_ENV}-env"

echo "Copying files to s3://$EB_S3_BUCKET/$S3_KEY"
# Copy the files to S3
aws s3 cp $fn "s3://$EB_S3_BUCKET/$S3_KEY"

# Create a new version in Elastic Beanstalk
echo "Creating ElasticBeanstalk Application ${EB_APP_NAME} Version ${version}"

aws elasticbeanstalk create-application-version \
--application-name $EB_APP_NAME \
--version-label "$version" \
--description "$version" \
--source-bundle S3Bucket="$EB_S3_BUCKET",S3Key="$S3_KEY" --auto-create-application

# Update to that version
echo "Updating ElasticBeanstalk Application Version ..."
aws elasticbeanstalk update-environment \
--application-name $EB_APP_NAME \
--environment-name $EB_APP_ENV \
--version-label "$version" \
--option-settings "[{ \"Namespace\": \"aws:elasticbeanstalk:customoption\", \"OptionName\": \"VpcId\", \"Value\": \"$VPC_ID\" }]"

rm $fn