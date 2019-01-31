#!/bin/bash
cd ~
if [ -d "~/mongo_data" ]
then
  mkdir mongo_data
else 
  rm -rf mongo_data
  mkdir mongo_data
fi
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" && \
brew install node@8 && \
brew install mongodb && \
mongod --dbpath ~/mongo_data
