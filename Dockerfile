FROM node:16 AS api

RUN apt update && apt dist-upgrade -y 

WORKDIR /srv
COPY api .

RUN npm install

CMD ["node", "api.js"]

FROM node:16 AS worker

RUN apt update && apt dist-upgrade -y

WORKDIR /srv
COPY worker .

USER root
CMD ["node", "worker.js"]
