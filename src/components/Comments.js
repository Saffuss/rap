import React from "react";

function Comments() {
    const comments = [
        {
          comment: "The detail in this nebula illustration is incredible!",
          replies: [
            {
              comment: "Totally agree, it almost looks real!",
              replies: [
                {
                  comment: "I wonder how long it took to draw this.",
                  replies: []
                }
              ]
            },
            {
              comment: "The colors are so vibrant, it feels like you're right there.",
              replies: []
            }
          ]
        },
        {
          comment: "This galaxy image looks straight out of a sci-fi movie!",
          replies: [
            {
              comment: "Right? It reminds me of Interstellar!",
              replies: [
                {
                  comment: "Especially the part where they zoom through the wormhole.",
                  replies: []
                }
              ]
            },
            {
              comment: "I love how they captured the spiral arms of the galaxy.",
              replies: []
            }
          ]
        },
        {
          comment: "This black hole illustration is terrifying and beautiful at the same time.",
          replies: [
            {
              comment: "The way they captured the light bending around it is insane!",
              replies: [
                {
                  comment: "It's like you're staring into the void.",
                  replies: []
                }
              ]
            },
            {
              comment: "Black holes are both fascinating and scary!",
              replies: []
            }
          ]
        },
        {
          comment: "The artist did an amazing job with the planetary rings in this one.",
          replies: [
            {
              comment: "The rings look so realistic, I almost thought it was a photo!",
              replies: [
                {
                  comment: "Yeah, the shading and shadows are spot on.",
                  replies: []
                }
              ]
            }
          ]
        },
        {
          comment: "This comet streaking through space looks so dynamic!",
          replies: [
            {
              comment: "The motion blur effect is perfect!",
              replies: []
            },
            {
              comment: "It looks like it's traveling at light speed!",
              replies: []
            }
          ]
        },
        {
          comment: "This moon base concept art feels like something from the future!",
          replies: [
            {
              comment: "Can't wait for humanity to actually build something like this.",
              replies: [
                {
                  comment: "Yeah, this is what I imagine colonizing the moon would look like.",
                  replies: []
                }
              ]
            }
          ]
        },
        {
          comment: "The asteroid belt in this artwork is so detailed.",
          replies: [
            {
              comment: "You can almost feel the danger of navigating through it!",
              replies: [
                {
                  comment: "Looks like something out of Star Wars!",
                  replies: []
                }
              ]
            },
            {
              comment: "I love the variety of textures on the asteroids.",
              replies: []
            }
          ]
        },
        {
          comment: "The stars in the background of this space station illustration are mesmerizing.",
          replies: [
            {
              comment: "It really makes you appreciate the vastness of space.",
              replies: [
                {
                  comment: "It's like staring into infinity.",
                  replies: []
                }
              ]
            }
          ]
        },
        {
          comment: "This supernova explosion is so vibrant, it's almost like you're witnessing it live!",
          replies: [
            {
              comment: "The colors and energy feel so powerful!",
              replies: [
                {
                  comment: "It's amazing how something so destructive can look so beautiful.",
                  replies: []
                }
              ]
            }
          ]
        },
        {
          comment: "The artist really captured the loneliness of space in this deep space image.",
          replies: [
            {
              comment: "Yeah, space is so vast and empty, but the way they illustrated it makes it feel awe-inspiring.",
              replies: [
                {
                  comment: "It gives me chills thinking about how far away everything is.",
                  replies: []
                }
              ]
            }
          ]
        }
      ];
      

      function getCommentsWithReplies({ comment, replies }, level = 1) {
        return (
            <div style={{marginLeft: `${level * 20}px`}}>
                {level === 1 ? <br/> : null}
                <p className="comment">-{comment}</p>

                {replies.length > 0 && replies.map((reply, index) => (
                    <div className="reply" key={index}>
                        {getCommentsWithReplies(reply, level + 1)}
                    </div>
                ))}
            </div>
        )
      }

    return (
        <div className="comments">
            {<h3>Comments</h3>}
            {comments.map(comment => getCommentsWithReplies(comment))}
        </div>
    )
}

export default Comments;