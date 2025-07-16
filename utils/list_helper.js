const _=require('lodash')


const dummy=(blogs)=>1

const totalLikes=(blogs)=>blogs.reduce((sum,blog)=>sum+blog.likes,0)


const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null
  return blogs.reduce((fav, blog) =>
    blog.likes > fav.likes ? blog : fav
  )
}


const mostBlogs=(blogs)=>{
  if(blogs.length===0) return null

  const grouped=_.countBy(blogs, 'author')
    const top=_.maxBy(Object.entries(grouped),([,count])=>count)

    return{
      author:top[0],
      blogs:top[1]
    }

}

const mostLikes=(blogs)=>{
  if(blogs.length===0) return null

  const grouped=_.groupBy(blogs,'author')

  const authorLikes=_.map(grouped,(blogs,author)=>({
    author,
    likes: _.sumBy(blogs,'likes')
  }))
  return _.maxBy(authorLikes,'likes')
}


module.exports={dummy, totalLikes, favoriteBlog,mostBlogs,mostLikes}
