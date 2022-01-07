FROM node:8-slim

ENV GIT_DISCOVERY_ACROSS_FILESYSTEM=1
RUN apt-get update
RUN apt-get install -y git
RUN apt-get install -y make
RUN apt-get install -y python

WORKDIR /workspace/Slides-Topicos
ADD package.json /workspace/Slides-Topicos
# ADD package-lock.json /workspace
RUN npm install