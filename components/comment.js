import { useState, useEffect } from "react";
import {
  FileEarmarkPerson,
  ChatText,
  CheckCircle,
} from "react-bootstrap-icons";

const Comment = () => {
  const [text, setText] = useState("");
  const [top, setTop] = useState(null);
  const [left, setLeft] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!clicked) {
      return;
    }
    const element = document.getElementById("comment-container");
    const rePositioner = (e) => {
      setLeft(e.layerX);
      setTop(e.layerY);
    };

    element.addEventListener("click", rePositioner);
    return () => element.removeEventListener("click", rePositioner);
  }, [clicked]);

  return (
    <>
      <div className="d-flex align-items-center">
        <h1 className="me-5">Comment</h1>
        <div>
          {clicked ? (
            <CheckCircle
              role="button"
              onClick={() => {
                setClicked(false);
                // setTop(null);
                // setLeft(null);
              }}
            />
          ) : (
            <ChatText role="button" onClick={() => setClicked(true)} />
          )}
        </div>
      </div>
      <div
        id="comment-container"
        className="  bg-secondary bg-opacity-25"
        style={{
          width: "100%",
          height: "50vh",
          position: "relative",
          cursor: clicked ? "cell" : "auto",
        }}
      >
        {clicked && top && left && (
          <div
            className=" bg-white f-flex align-items-center row"
            style={{
              width: "200px",
              height: "100px",
              position: "absolute",
              top: top + "px",
              left: left + "px",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          >
            <div className="col-2">
              <FileEarmarkPerson />
            </div>
            <div className="col">
              <input
                className="w-100 form-control"
                placeholder="Comment ..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) =>
                  e.code === "Enter"
                    ? setComments([
                        ...comments,
                        {
                          top: top,
                          left: left,
                          text: text,
                        },
                      ])
                    : null
                }
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Comment;
