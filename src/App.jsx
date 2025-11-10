import { useState } from 'react';
import initialArticles from './articles';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  // Stato iniziale con articoli di partenza
  const [articles, setArticles] = useState(initialArticles);

  // Stato per l'input titolo
  const [title, setTitle] = useState('');

  // Funzione al submit del form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Controllo la lunghezza minima del testo da inserire
    if (title.length < 5) {
      alert('Il titolo non può contenere meno di 5 char!');
      return;
    }

    // Nuovo articolo
    const newArticle = { title };

    // Aggiungo il nuovo articolo alla lista
    const updatedArticles = [newArticle, ...articles];

    // Aggiorno lo stato con la nuova lista
    setArticles(updatedArticles);

    // Pulisco il campo input
    setTitle('');
  };

  // Funzione creare un nuovo array senza l'articolo con quell'indice
  const handleDelete = (indexToDelete) => {
    const filteredArticles = articles.filter((article, index) => index !== indexToDelete);
    setArticles(filteredArticles);
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 text-warning">Lista Articoli</h2>

      <ul className="list-group mb-4 shadow-sm">
        {articles.map((article, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center list-group-item-warning">
            <div>
              {article.title}
            </div>
            <button className='btn btn-danger' onClick={() => handleDelete(index)}>
              <i className="bi bi-trash"></i>
            </button>
          </li>
        ))}
      </ul>

      <div className="card p-4 shadow-sm">
        <form onSubmit={handleSubmit}>
          <h5 className="mb-3 text-secondary">Aggiungi nuovo articolo</h5>
          <div className="mb-3">
            <label className="form-label">Titolo:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Scrivi il titolo..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required />
          </div>
          <button className="btn btn-warning" type="submit">
            <i className="bi bi-plus-circle me-2"></i>Aggiungi
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
