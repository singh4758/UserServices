# Use latest node version 18.x
FROM node:18-slim

RUN apt-get update && apt-get upgrade -y
# create app directory in container
RUN mkdir -p /app

# set /app directory as default working directory
WORKDIR /app

# copy all file from current dir to /app in container
COPY . /app/

# expose port 9000
EXPOSE 9000

# cmd to start service
CMD [ "npm", "run", "startup" ]
