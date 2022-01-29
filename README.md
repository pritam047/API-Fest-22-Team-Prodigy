
# Meme Generator

A simple meme generator app for meme lovers


## Run Locally

Clone the project

```bash
  git clone https://github.com/pritam047/API-Fest-22-Team-Prodigy.git
```

Go to the project directory

```bash
  cd API-Fest-22-Team-Prodigy
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## API Reference

#### Get all memes

```http
  GET /memes
```

#### Post a meme

```http
  POST /memes
```

#### Get a single meme

```http
  GET /memes/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of meme to fetch |


#### Update a single meme

```http
  PUT /memes/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of meme to update |


#### Delete a single meme

```http
  DELETE /memes/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of meme to delete |

#### Testing APIs
You can test our APIs using our Postman collection [here](https://www.postman.com/martian-spaceship-403381/workspace/api-fest-22-team-prodigy/request/8521507-522679ea-e47f-431e-ba92-5ab4d4270f66).

## Deploying
You can deploy this project using any of the below platforms:
- [Railway](https://railway.app/)
- [Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)
- [Glitch](https://glitch.com)
- Any cloud service provider of your choice (AWS, GCP, Azure)

## Authors

- [@pritam047](https://www.github.com/pritam047)
- [@dhruvsol](https://www.github.com/dhruvsol)
- [@zoboro](https://www.github.com/zoboro)
- [@anshit](https://www.github.com/anshitpoddar)
