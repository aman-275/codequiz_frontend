#!/usr/bin/env bash

echo "enter folder name"
read folder_name
mkdir $folder_name
cd $folder_name
touch index.ts

touch "${folder_name}Container.tsx"

