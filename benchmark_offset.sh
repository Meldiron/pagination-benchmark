#!/bin/bash

k6 -e OFFSET=0 run src/script_offset.js
k6 -e OFFSET=100000 run src/script_offset.js
k6 -e OFFSET=200000 run src/script_offset.js
k6 -e OFFSET=300000 run src/script_offset.js
k6 -e OFFSET=400000 run src/script_offset.js
k6 -e OFFSET=500000 run src/script_offset.js
k6 -e OFFSET=600000 run src/script_offset.js
k6 -e OFFSET=700000 run src/script_offset.js
k6 -e OFFSET=800000 run src/script_offset.js
k6 -e OFFSET=900000 run src/script_offset.js