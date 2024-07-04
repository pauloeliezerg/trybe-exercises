# Exchange House

The exchange house project is an application that seeks to convert the rate of one currency to several others.
The application prototype is [at this link](https://www.figma.com/file/H3gBEiF0F94VESCGx9DD17/Casa-de-C%C3%A2mbio?node-id=0%3A1).

## Requirements

### 1. Project Environment

- [x] Create a repository from scratch or fork this repository (feel free to make PRs when you finish development).
- [x] Start project with NPM.
- [x] Structure the project to use ESModules (use `type` as `module` in `package.json` and `script` tags).
- [x] Install Vite as Dev Tool and `npm run dev`.

### 2. Application Structure

- [ ] Structure the HTML according to [prototype](https://www.figma.com/file/H3gBEiF0F94VESCGx9DD17/Casa-de-C%C3%A2mbio?node-id=0%3A1).
- [ ] Create semantic tags in HTML.

### 3. Interaction with API

- [ ] The API endpoint that should be used is `https://v6.exchangerate-api.com/v6/${SUA_API_KEY}/latest/${moeda}`.
- [ ] The currency to be searched must be passed as the _endpoint_ `currency` parameter.
- [ ] All currencies should be listed on the screen.

> You will need to register for free, and remember to use `.env` to store your `api_key`
> [API documentation link](https://www.exchangerate-api.com/docs/overview) if necessary

### 4. Error Handling

- [ ] You should use [Sweet Alert 2](https://sweetalert2.github.io/) for Error messages.
- [ ] An error should appear when no coins are passed.
- [ ] An error should appear when a non-existent coin is passed.

### 5. Styling (Bonus)

- [ ] Implementation of [high fidelity prototype](https://www.figma.com/file/H3gBEiF0F94VESCGx9DD17/Casa-de-C%C3%A2mbio?node-id=0%3A1)
