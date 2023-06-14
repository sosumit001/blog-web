import {Route,Routes} from 'react-router-dom'

import App from '../App'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Content from '../components/Content'
import data from '../test/Post.json'
import { gql,GraphQLClient } from 'graphql-request'
import { useEffect, useState } from 'react'

const client = new GraphQLClient(
    "https://api-ap-south-1.hygraph.com/v2/cli7mvbq53prp01uohsazc4u0/master"
)



const AppRoutes = () => {

    const [posts,setPosts] = useState(null)

    useEffect(() => {
        async function fetchPost() {
            try {
                const data = await client.request(POSTS)
                const {posts} = await data
                setPosts(posts)

            } catch (err) {
                console.log('err: ',err)
            }
        }
        fetchPost()
    })

    return (
        <Routes>
            <Route path='/'  element ={<App/>}></Route>
            <Route path='/blog' element = {<Blog/>}></Route>
            <Route path='/contact' element = {<Contact/>}></Route>
            <Route path='/content' element = {<Content Data = {data} />}></Route>
            {
             posts &&
                posts.map((ele) => (
             <Route
             key={ele.id}
             path={`/blog/${ele.title.toLowerCase().replace(/ /g, '-')}`}
             element={<Content postId={ele.id} />}
      />
    ))
}
        </Routes>
    )
}

export default AppRoutes

const POSTS = gql`
{
  posts {
    id
    title
  }
}`