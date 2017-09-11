import comments from "./comments";
import CommentsModel from "../models/CommentModel.js"

export function list(request, response) {
  ContactModel.find({}).exec()
  .then(comments => {
    return response.json(comments);
  });
}

export function show(request, response) {
  let commentId = request.params.id;

  let singleComment = comments.find(function(comment){
    return commentId === comment.id;
  })
 return response.json(singleComment);
}

export function create(request, response) {
  const comment = new CommentModel({
    body: request.body.body
  })
  comment.save()
  .then(comment => {
    return response.json(comment)
  });
};




export function update(request, response) {
 return response.json({theId: request.params.id});
}
export function remove(request, response) {
 return response.json({});
}
