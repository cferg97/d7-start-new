import { Button, ListGroup } from 'react-bootstrap'

const deleteComment = async (asin) => {
  try {
    let response = await fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + asin,
      {
        method: 'DELETE',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQyMmQ0YmUzZDAwMTU4NDVmZWYiLCJpYXQiOjE2Njk3MzA2NDAsImV4cCI6MTY3MDk0MDI0MH0.7jjvxG0xoMiQ9FpIPJTKx98IId3SxB3ZxDy28QcdhGc',
        },
      }
    )
    if (response.ok) {
      alert('comment deleted!')
    } else {
      alert('comment NOT deleted!')
    }
  } catch (error) {
    alert('comment NOT deleted!')
  }
}

const SingleComment = ({ comment }) => (
  <ListGroup.Item>
    {comment.comment}
    <Button
      variant="danger"
      className="ml-2"
      onClick={() => deleteComment(comment._id)}
    >
      D
    </Button>
  </ListGroup.Item>
)

export default SingleComment
