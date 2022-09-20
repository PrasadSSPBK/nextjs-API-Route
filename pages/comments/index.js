import {useState} from 'react'
function CommentsPage(){
    const [commentsList,setCommentsList]=useState([])
    const [comment,setComment]=useState('')

    const fetchComments=async()=>{
        const response =await fetch('/api/comments')
        console.log(response)
        const data=await response.json()
        console.log(data)
        setCommentsList(data)
    }
    const addComment=async()=>{
        const options={
            method:"POST",
            body:JSON.stringify({comment}),
            headers:{
                'content-type':'application/json'
            }
        }
        const response=await fetch('/api/comments',options)
        const data=await response.json()
        setComment('')
       
    }

    const deleteComments=async(commentId)=>{
        const options={
            method:"DELETE"
        }
        const response=await fetch(`/api/comments/${commentId}`,options)
        const data=await response.json()
        fetchComments()
        }

    return(
        <div>
            <div> 
                <input type="text" value={comment} onChange={(event)=>setComment(event.target.value)} placeholder="Enter Your Comment"/>
 <button onClick={addComment}>ADD COMMENT</button>
            </div>
            <button onClick={fetchComments}>FETCH COMMENTS</button>
            <br/>
            {commentsList.map((comment)=>{
                return(
                    <div key={comment.id}>
                        <h1>{comment.id} {comment.text} </h1>
                        <div>
                        <button onClick={()=>deleteComments(comment.id)}>DELETE</button>
                        </div>
                        <hr/>
                        </div>
                )
            })}
        </div>
    )

}
export default CommentsPage