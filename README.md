**Esercizio**
Sfruttiamo le Context API per rendere disponibile la lista dei post in tutta la nostra app.
- Partiamo col definire la lista dei post all’interno di `App.jsx`
- Se non lo abbiamo già fatto in precedenza, creiamo un componente `PostsPage.jsx`  che conterrà al suo interno un titolo e un componente `PostsList.jsx`  che mostra la lista di tutti i nostri post.
 - Creiamo un file per definire il nostro Context ed esportiamolo
 - Importiamo il Provider in `App.jsx` e wrappiamoci la nostra applicazione
 - Facciamo in modo che il componente `PostsList.jsx` recuperi i post consumando il Context e crei dunque una card per ciascuno di essi.
 La struttura dell’App deve essere
 `App.jsx` > `PostsPage.jsx` > `PostsList.jsx`   > `PostCard.jsx`
Bonus:
- creare componente Alert



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh