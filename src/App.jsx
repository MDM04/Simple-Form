import { useState } from "react"

export default function App() {
  const [comments, setComments] = useState([])
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author: author,
      content: content,
      createdAt: new Date()
    }

    setComments(state => [newComment, ...state])
    setAuthor("")
    setContent("")
  }

  return (
    <div id="app">
      <h2 className="form">Seção de Comentários</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="author">Email</label>
        <input type="email" id="author" required value={author} onChange={(e) => setAuthor(e.target.value)} />
        <label htmlFor="content">Comentário</label>
        <textarea id="content" cols="30" rows="5" required value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        <button>Enviar comentário</button>
      </form>
      <hr />
      <section id="comments">
        {comments.length > 0
          ? (
            comments.map((comment) => (
              <div key={comment.id}>
                <h3>{comment.author}</h3>
                <span>Em {comment.createdAt.toLocaleString()}</span>
                <p>{comment.content}</p>
              </div>
            )))
          : (
            <p className="form">Seja o primeiro a comentar!</p>
          )}
      </section>
    </div>
  )
}""