#!/bin/bash
cd /tmp/kavia/workspace/code-generation/food-explorer-666180-666189/food_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

