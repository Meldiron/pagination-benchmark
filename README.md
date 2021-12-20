# Pagination benchmark

Offset &amp; cursor pagination benchmark using Appwrite as a backend.

## Setup

First, make sure you have [k6](https://k6.io/) and [NodeJS](https://nodejs.org/en/) installed. You also need Appwrite instance up and running with project named `benchmark` that has collection `posts` with collection permissions set to `read=['role:all']`, `write=[]`.

Now, let's copy `config.example.json` into `config.json` and fill it with credentials to your Appwrite instance.

Before running scripts, make sure to run `npm install` to install all required dependencies.

Then, we run `node src/setup.js` to insert 1M documents. Once it's finished, restart Appwrite instance in Appwrite folder using `docker-compose restart`.

Finally, we can run `sh benchmark_offset.sh` if we want to get results of offset pagnation, and `sh cli/benchmark_cursor.sh` to get cursor pagination results.
