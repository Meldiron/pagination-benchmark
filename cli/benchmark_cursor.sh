#!/bin/bash

cd ..

k6 -e CURSOR=id1 run src/script_cursor.js
k6 -e CURSOR=id100000 run src/script_cursor.js
k6 -e CURSOR=id200000 run src/script_cursor.js
k6 -e CURSOR=id300000 run src/script_cursor.js
k6 -e CURSOR=id400000 run src/script_cursor.js
k6 -e CURSOR=id500000 run src/script_cursor.js
k6 -e CURSOR=id600000 run src/script_cursor.js
k6 -e CURSOR=id700000 run src/script_cursor.js
k6 -e CURSOR=id800000 run src/script_cursor.js
k6 -e CURSOR=id900000 run src/script_cursor.js