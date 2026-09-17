# Acme Calculator API

A simple REST API that performs arithmetic division.

## Setup

```bash
npm install
```

## Run the server

```bash
npm start
```

The server starts on **http://localhost:3000** by default. Set the `PORT` environment variable to change it.

## API Endpoints

### `GET /health`

Returns the service health status.

```json
{ "status": "ok" }
```

### `GET /api/divide?a=NUMBER&b=NUMBER`

Divides `a` by `b` and returns the result.

**Example:**

```
GET /api/divide?a=10&b=2
```

```json
{ "result": 5 }
```

Returns `400` if either parameter is missing or not a valid number.

## Run tests

```bash
npm test
```
