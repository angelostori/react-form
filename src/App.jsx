import articles from '../public/articles'

function App() {


  return (
    <>
      <div className="container">
        <h3>Articoli:</h3>
        <ul className='my-3'>
          {articles.map(article =>
            <li key={article.id}>{article.title}</li>
          )}
        </ul>
      </div>


      <div className="container">
        <h4>Aggiungi nuovo articolo</h4>
        <label class="form-label">Titolo:</label>
        <input
          type="text"
          className="form-control"
          required
        />
        <button className='btn btn-dark my-3' type="submit">Aggiungi</button>
      </div>

    </>
  )
}

export default App
