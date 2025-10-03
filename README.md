# tRPC Server with TypeScript Strict Mode

A tRPC server implementation with TypeScript strict mode using Yarn and Biome.

## Features

- ✅ tRPC server with Express adapter
- ✅ TypeScript strict mode configuration
- ✅ Biome for linting and formatting
- ✅ Yarn package management
- ✅ Hello World endpoint with optional name parameter

## Getting Started

### Install dependencies
```bash
yarn install
```

### Development
```bash
yarn dev
```

### Build
```bash
yarn build
```

### Production
```bash
yarn start
```

## API Endpoints

### Root
- `GET /` - Server status and available endpoints

### tRPC
- `GET /trpc/helloWorld` - Returns "Hello, World!" with timestamp
- `GET /trpc/helloWorld?input={"name":"TypeScript"}` - Returns "Hello, TypeScript!" with timestamp

## Example Usage

```bash
# Basic hello world
curl "http://localhost:3001/trpc/helloWorld"

# With custom name
curl "http://localhost:3001/trpc/helloWorld?input=%7B%22name%22%3A%22TypeScript%22%7D"
```

## Scripts

- `yarn dev` - Start development server with hot reload
- `yarn build` - Build TypeScript to JavaScript
- `yarn start` - Start production server
- `yarn typecheck` - Run TypeScript type checking
- `yarn lint` - Run Biome linting
- `yarn format` - Format code with Biome
- `yarn check` - Run Biome check and auto-fix

## Project Structure

```
src/
├── router.ts    # tRPC router definition
└── server.ts    # Express server setup
```
