# Vitest

## Unit Test con Javascript

Eseguire `npm run test` o `npx vitest run` per eseguire i test.

## Abilitare i test con Vue (Composition Test)

1. Rinominare il file `src/components/HelloWorld.NoTest.js` in `src/components/HelloWorld.test.js`
2. Rinominare il file `src/components/Counter.NoTest.js` in `src/components/Counter.test.js`
3. In `vitest-project/vitest.config.ts` togliere il commento sotto a "test"
4. Lanciare: `npm run test` o `npx vitest run`

## Avviare i test E2E
Eseguire `npm run test:e2e` per un resoconto rapido dei test E2E.
Con `npm run test:e2e:report` si può visualizzare il resoconto dei test.
Con `test:e2e:ui` si apre l'interfaccia interattiva dei test E2E.
