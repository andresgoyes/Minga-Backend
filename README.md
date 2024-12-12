# MindHUB & Rappi - Final Challenge

## Steps to Visualize the Project

- [1 - Clear the NPM Cache via Console](#1---clear-the-npm-cache-via-console)
- [2 - Install Dependencies via Console](#2---install-dependencies-via-console)
- [3 - Create a File Named `.env` in the Root Directory and Add the Following Content](#3---create-a-file-named-env-in-the-root-directory-and-add-the-following-content)
- [4 - Upload Data to the Database via Console](#4---upload-data-to-the-database-via-console)
- [5 - Start the Server via Console](#5---start-the-server-via-console)

---

### 1 - Clear the NPM Cache via Console

```bash
npm cache clear --force
```

---

### 2 - Install Dependencies via Console

```bash
npm install
```

---

### 3 - Create a File Named `.env` in the Root Directory and Add the Following Content

Create a file named `.env` and include the following content. Replace placeholders with actual values:

```env
PORT=8080
# Remove {} and complete the values
URI_MONGO="mongodb+srv://{mongoUser}:{password}@{databaseName}.tjm5s.mongodb.net/minga"
SECRET="{yourSecretWord}"
GOOGLE_CLIENT_ID="{GoogleClientID}"
GOOGLE_CLIENT_SECRET="{GoogleClientSecret}"
GOOGLE_URI_BACK="/api/auth/signIn/google/callback"
```

---

### 4 - Upload Data to the Database via Console

Run the following commands to upload data to the database. After each command, press `Ctrl+C` followed by `S` to stop the process:

```bash
npm run dataUsers
npm run dataAuthors
npm run dataCompanies
npm run dataCategories
npm run dataMangas
npm run dataComments
npm run dataReactions
```

---

### 5 - Start the Server via Console

To start the server, run the following command:

```bash
npm run dev
```