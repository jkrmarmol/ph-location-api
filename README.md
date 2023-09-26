# Philippines Location API

This is a RESTful API built with Node.js, Express.js, and TypeScript that allows you to locate places in the Philippines.

## Features

- **Location Lookup:** Search for places in the Philippines using various parameters such as region, province, or province.
<!-- - **Geocoding:** Convert addresses into latitude and longitude coordinates.
- **Reverse Geocoding:** Retrieve the nearest known address for a given set of coordinates. -->

## Installation

1. Clone the repository:
2. Install dependencies `npm install`
3. Start server `npm run dev`

## How to use
The API provides the following endpoints for locating places in the Philippines:

### Get region in a philippines

**Request:**
    
    GET /api

**Examples:**

    GET /api

**Response:**

```js
[
    {
        "name": "REGION I (ILOCOS REGION)",
        "reg_code": "01"
    },
    {
        "name": "REGION II (CAGAYAN VALLEY)",
        "reg_code": "02"
    },
    ...
```

### Get provinces in a region

**Request:**

    GET /api/:region

**Examples:**

    GET /api/13

**Response:**

```js
  [
    {
        "name": "NCR, CITY OF MANILA, FIRST DISTRICT",
        "reg_code": "13",
        "prov_code": "1339"
    },
    {
        "name": "CITY OF MANILA",
        "reg_code": "13",
        "prov_code": "1339"
    },
    {
        "name": "NCR, SECOND DISTRICT",
        "reg_code": "13",
        "prov_code": "1374"
    },
    {
        "name": "NCR, THIRD DISTRICT",
        "reg_code": "13",
        "prov_code": "1375"
    },
    ...
```

### Get municipality in a provinces

**Request:**

    GET /api/:region/:province

**Examples:**

    GET /api/13/1374

**Response:**

```js
  [
    {
        "name": "CITY OF MANDALUYONG",
        "prov_code": "1374",
        "mun_code": "137401"
    },
    {
        "name": "CITY OF MARIKINA",
        "prov_code": "1374",
        "mun_code": "137402"
    },
    {
        "name": "CITY OF PASIG",
        "prov_code": "1374",
        "mun_code": "137403"
    },
    ...
```

### Get barangay in a municipality

**Request:**

    GET /api/:region/:province/:municipality

**Examples:**

    GET /api/13/1374/137402

**Response:**

```js
  [
    {
        "name": "Barangka",
        "mun_code": "137402"
    },
    {
        "name": "Calumpang",
        "mun_code": "137402"
    },
    {
        "name": "Concepcion Uno",
        "mun_code": "137402"
    },
    {
        "name": "Malanday",
        "mun_code": "137402"
    },
    ...
```



## Author
**Kurt Russelle Marmol**

GitHub: [@jkrmarmol](https://github.com/jkrmarmol)

LinkedIn: [@jkrmarmol](https://www.linkedin.com/in/jkrmarmol/)
