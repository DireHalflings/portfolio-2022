# React Web Developer Portfolio
Web Developer portfolio created using ReactJS with TypeScript, framer motion, and SASS.

## Development Deployment
After cloning repo to local, use `npm install` to install all dependencies.
Once dependencies are installed use `npm start` to start development server on port 3000.

## Production Deployment
Build docker container using `docker build -t bt-portfolio`.
Application will run through build commands, then copy build to `stable-alpine` container.
Exposed docker port is port 80.
Docker image can be deployed to prefered container service.