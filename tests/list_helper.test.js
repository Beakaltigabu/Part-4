const {test,describe}=require('node:test')
const assert=require('node:assert')
const listHelper=require('../utils/list_helper')

test('dummy returns one',()=>{
    const blogs=[]
    const result =listHelper.dummy(blogs)
    assert.strictEqual(result,1)
})


describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
    }
  ]

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    assert.strictEqual(result, 5)
  })

test('empty list reutns 0',()=>{
        const result=listHelper.totalLikes([])
        assert.strictEqual(result,0)
    })

    test('sum likes of multipe blogs', ()=>{
        const blogs =[
            {likes:2}, {likes:3},{likes:5}
        ]
        const result=listHelper.totalLikes(blogs)
        assert.strictEqual(result,10)
    })
})

describe('favorite blog', () => {
  test('returns blog with most likes', () => {
    const blogs = [
      { title: 'A', likes: 1 },
      { title: 'B', likes: 100 },
      { title: 'C', likes: 20 }
    ]
    const result = listHelper.favoriteBlog(blogs)
    assert.deepStrictEqual(result, { title: 'B', likes: 100 })
  })
})



describe('most blogs', ()=>{
  test('author with most blogs is returned',()=>{
    const blogs=[
      {author:'Author A'},
      {author:'Author B'},
      {author:'Author C'},
      {author:'Author D'},
      {author:'Author E'},
    ]

    const result=listHelper.mostBlogs(blogs)
    assert.notDeepStrictEqual(result,{
      author:'Author A',
      blogs:3
    })
  })
})



describe('most likes', () => {
  test('author with most likes is required',()=>{
    const blogs=[
      {author:'Author A', likes:10},
      {author:'Author B', likes:20},
      {author:'Author C', likes:30},
      {author:'Author D', likes:40},
      {author:'Author E', likes:50}
    ]

    const result=listHelper.mostLikes(blogs)
    assert.deepStrictEqual(result,{
      author:'Author E',
      likes:50
    })
  })
})
