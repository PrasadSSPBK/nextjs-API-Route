import { comments } from "../../../data/comments"

export default function handler(req,res){
    const {commentId}=req.query
    if(req.method==="GET"){
        const selectedComment=comments.find((comment)=>comment.id===parseInt(commentId))
        res.status(200).json(selectedComment)
        
    }
    else if(req.method==="DELETE"){
        console.log(commentId)
        // const selectedComment=comments.find((comment)=>comment.id===parseInt(commentId))
        const index=comments.findIndex((comment)=>comment.id===parseInt(commentId))
        // const updatedComments=comments.filter((comment)=>comment.id!==parseInt(commentId))
        // comments.splice(updatedComments,1)
        // console.log(comments)
        comments.splice(index,1)
        res.status(200).json(comments)
}
}