import articles from '../public/articles'

function App() {


  return (
    <>
      <ul>
        {articles.map(article =>
          <li key={article.id}>{article.title}</li>
        )}
      </ul>

    </>
  )
}

export default App
