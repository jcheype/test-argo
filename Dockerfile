FROM node:24
COPY dist/server.cjs /
EXPOSE 3100
ENTRYPOINT [ "node", "server.cjs" ]
