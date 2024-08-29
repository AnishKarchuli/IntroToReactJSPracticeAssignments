import { useState } from 'react'
import './App.css'

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [displayFeedback, setDisplayFeedback] = useState('');

  const handleFeedback = (event) => {
    setFeedback(event.target.value);
  }

  const displayFeedbackHandler = () => {
    setDisplayFeedback(feedback)
  }
  
  return (
    <div>
      <label htmlFor='feedbackTextarea'>Give your feedback:</label>
      <textarea id='feedbackTextarea' onChange={handleFeedback} cols={40} rows={3}></textarea>
      <button onClick={displayFeedbackHandler}>Submit</button>
      {displayFeedback && <p>Your feedback: {displayFeedback}</p>}
    </div>
  )
}

const MovieReview = () => {
  const [review, setReview] = useState("");
  const [displayReview, setDisplayReview] = useState("");

  const handleMovieReview = (event) => {
    setReview(event.target.value);
  }

  const displayMovieReviewHandler = () => {
    setDisplayReview(review);
  }
  
  return (
    <div>
      <label htmlFor='reviewTextarea'>Write your movie review:</label>
      <textarea id='reviewTextarea' onChange={handleMovieReview} cols={40} rows={3}></textarea>
      <button onClick={displayMovieReviewHandler}>Submit Review</button>
      {displayReview && <p>Your review: {displayReview}</p>}
    </div>
  )
}

const Message = () => {
  const [message, setMessage] = useState("");

  const handleMessageTextarea = (event) => {
    setMessage(event.target.value);
  }

  const displayMessageHandler = () => {
    const capitalizeMessage = message.toUpperCase();
    alert(`Message: ${capitalizeMessage}!`)
  }
  return (
    <div>
      <label htmlFor='messageTextarea'>Enter your message:</label>
      <textarea id='messageTextarea' onChange={handleMessageTextarea} cols={40} rows={3}></textarea>
      <button onClick={displayMessageHandler}>Display Message</button>
    </div>
  )
}

const Notes = () => {
  const [notes, setNotes] = useState("");
  const [saveNotes, setSaveNotes] = useState("");

  const handleNotesTextarea = (event) => {
    setNotes(event.target.value);
  }

  const savedNotesHandler = () => {
    setSaveNotes(notes)
  }

  return(
    <div>
      <label htmlFor='notesTextarea'>Take your notes:</label>
      <textarea id='notesTextarea' cols={40} rows={3} onChange={handleNotesTextarea}></textarea>
      <button onClick={savedNotesHandler}>Save Notes</button>
      {saveNotes && <p>Notes saved: {saveNotes}</p>}
    </div>
  )
}

const AskQuestion = () => {
  const [question, setQuestion] = useState("");
  const [displayAskQuestion, setDisplayAskQuestion] = useState("");

  const handleQuestionTextarea = (event) => {
    setQuestion(event.target.value);
  }

  const displayQuestionHandler = () => {
    const formattedQuestion = question.trim().endsWith('?') ? question : `${question}?`
    setDisplayAskQuestion(formattedQuestion);
  }

  return (
    <div>
      <label htmlFor='questionTextarea'>Ask your question:</label>
      <textarea id='questionTextarea' cols={40} rows={3} onChange={handleQuestionTextarea}></textarea>
      <button onClick={displayQuestionHandler}>Submit Question</button>
      {displayAskQuestion && <p>Your question: {displayAskQuestion}</p>}
    </div>
  )
}

const Comment = () => {
  const [comment, setComment] = useState("");
  const [displayComment, setDisplayComment] = useState("");

  const handleCommentTextarea = (event) => {
    setComment(event.target.value);
  }

  const displayCommentHandler = () => {
    setDisplayComment(comment)
  }

  return (
    <div>
      <label htmlFor='commentTextrea'>Leave your comment:</label>
      <textarea id='commentTextarea' cols={40} rows={3} onChange={handleCommentTextarea}></textarea>
      <button onClick={displayCommentHandler}>Submit Comment</button>
      {displayComment && <p>//{displayComment}</p>}
    </div>
  )
}

export default function App() {
  return (
    <main>
      <Feedback />
      <br />
      <MovieReview />
      <br />
      <Message />
      <br />
      <Notes />
      <br />
      <AskQuestion /> 
      <br />
      <Comment />
    </main>
  )
}
