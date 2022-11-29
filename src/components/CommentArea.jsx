import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  // state = {
  //   comments: [], // comments will go here
  //   isLoading: false,
  //   isError: false,
  // };

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchComments = async (asin) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQyMmQ0YmUzZDAwMTU4NDVmZWYiLCJpYXQiOjE2Njk3MzA2NDAsImV4cCI6MTY3MDk0MDI0MH0.7jjvxG0xoMiQ9FpIPJTKx98IId3SxB3ZxDy28QcdhGc",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        // let comments = await response.json();
        // this.setState({
        //   comments: comments,
        //   isLoading: false,
        //   isError: false,
        // });
        let data = await response.json()
        setComments(data)
        setIsLoading(false)
      } else {
        console.log("error");
        setIsLoading(false)
        setIsError(true)
        // this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false)
      setIsError(true)
      // this.setState({ isLoading: false, isError: true });
    }
  };


  useEffect(() => {
    fetchComments()
  }, [])


  return (
    <div>
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
