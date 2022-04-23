# Hudu REST API Node.js Library

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

```
import Hudu from 'hudu-node';
const HuduInst = new Hudu({
    host: 'example.com',
    key: 'abcdefghijklmnopqrstuvwxyz',
});

const company = await huduInst.companies('get', {
    id: 1,
});
```

## Hudu API Version

2.1.5.10
