# 3-SUM Problem

## Problem:
Given an unordered array `S` of `n` integers. Find all unique triplets in the array each of them gives the sum of zero.

## Requirements

NodeJS v.10+ is required to run project.

## Local deployment

Just clone the repository

## Local Start

```shell
npm start <input.txt >output.txt
```

Also You can specify input and output files with env variables:
 - **SOURCE_FILE**: `/dev/stdin` - path to the source file
 - **DEST_FILE**: `/dev/stdout` - path to the destination file

Source file could contain several rows. All of these rows will be processed.
The results of each row processing will be writen to the destination file and
separated one from another with an empty line.

## Example:

```shell
npm start < list.txt
```

Output (to console):
```shell
-2,-1,3
-7,3,4
-8,3,5
-8,-2,10

-7,3,4
-8,3,5
-8,-2,10
```

## Algorithm ananlysis:

**Assumptions**:
 - two triplets are the same if and only if they contain the same items despite of order of this items
 - input array `S` could contain non-unique integers

**Time complexity**: *O(n<sup>2</sup>)* + *O(n log n)*

**Memory complexity**: *O(n<sup>2</sup>)* -- hash-table is used to reduce order of time complexity.

**Solution**: [./lib/find-triplets.js](./lib/find-triplets.js#L29)

## Running tests

```shell
npm install
npm test
```
