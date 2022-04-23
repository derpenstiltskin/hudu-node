# Hudu API Node.js Library

Unofficial Node.js library for [Hudu](https://hudu.com)'s REST API.

## Documentation

Documentation is located in the docs folder in the repo.

## Requirements

Node 16 or higher.

## Installation

No released version yet.

## Prerequisites

In the API section of your Hudu Admin, you need to generate an API key to use.

## Usage

CommonJS:
```
const Hudu = require('hudu-node');
const huduInst = new Hudu({
    host: 'example.com',
    key: 'abcdefghijklmnopqrstuvwxyz',
});

huduInst.companies('get', {
    id: 1,
})
    .then(company => console.log(company));
```

EJS:
```
import Hudu from 'hudu-node';
const HuduInst = new Hudu({
    host: 'example.com',
    key: 'abcdefghijklmnopqrstuvwxyz',
});

(async () => {
    const company = await huduInst.companies('get', {
        id: 1,
    });

    console.log(company);
});
```

## Hudu API Version

2.1.5.10
