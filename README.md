# Initialisation

## Demarrage d'un container node

```bash
docker run --rm -w /app -v $(pwd):/app -it -p 3000:3000 node:slim bash
```

## Initialisation node

```bash
npm init -y
```

## Installation des dependances typescript

```bash
npm i -D typescript tsx @types/node
```

## Initialisation typescript

```bash
npx tsc --init

# Rendre accessible a notre utilisateur
chown -R 1000:1000 .
```

## Modifier le package.json

- type "commonjs" to "module"
- script dev: "tsx watch src/index.ts"