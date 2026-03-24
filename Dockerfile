### STAGE 1: Run ###
FROM node:20.19.2-alpine AS build

WORKDIR /app

COPY ./package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

# Build nestjs app
RUN npm run build && \
    npm prune --omit=dev --legacy-peer-deps


### STAGE 2: Run ###
FROM node:20.19.2-alpine

WORKDIR /app

ENV TZ=America/Buenos_Aires

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
COPY ./public ./public

EXPOSE 3000

#CMD ["node", "dist/main"]
CMD ["npm", "run", "start:prod" ]