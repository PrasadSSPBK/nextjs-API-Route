import { comments } from "../../data/comments"

function Comment ({comment}){
    return(
        <h1>{comment.id}|{comment.text}</h1>
    )
}
export default Comment

export async function getStaticPaths(){
    return{
        paths:[
            {params:{commentId:"1"}},
            {params:{commentId:"2"}},
            {params:{commentId:"3"}},
            {params:{commentId:"4"}},
        ],
        fallback:false,
    }
}

export async function getStaticProps(context){
    const {params}=context
    const comment=comments.find((comment)=>comment.id===parseInt(params.commentId))
    return{
        props:{
            comment,
        }
    }
}