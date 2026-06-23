FROM cypress/browsers:node-24.17.0-chrome-149.0.7827.155-1-ff-152.0-edge-149.0.4022.69-1

WORKDIR /app

COPY . .

RUN npm install

CMD ["npx", "cypress", "run", "--browser", "firefox", "--config-file", "cypress.prod.cjs"]
