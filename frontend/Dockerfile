FROM oven/bun

WORKDIR /project/frontend

COPY package.json ./
COPY bun.lockb ./
RUN bun install
COPY . ./

EXPOSE 3000
