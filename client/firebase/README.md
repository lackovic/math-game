# How to deploy on Google Firebase

1. Build the client and copy the files to `firebase/public`
2. Edit `firebase/public/assets/server-config.json`
3. Change the URL to `https://marco-math-game.firebaseapp.com/server`
4. Change the port to `5000`
5. Copy the server files from `server/src` to `firebase/functions/src`
6. Edit `firebase/functions/src/index.ts`
7. Comment/uncomment lines as instructed in the file
8. Run `firebase deploy`
