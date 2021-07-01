const mongoose = require('mongoose')

const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true })

// BlogPost.create(
//   {
//     title: 'The Atlanta Hawks Are For Real',
//     body: 'The Atlanta Hawks have beaten the Milwaukee Bucks in the first game of their ECF. Their star player, Trae Young, is carrying the team on his shoulders and threading to some uncharted territory.',
//   },
//   (error, blogpost) => {
//     console.log(error, blogpost)
//   }
// )

var id = '60d4d064bfbb822ba84b24fb'

BlogPost.findByIdAndDelete(id, (error, blogpost) => {
  console.log(error, blogpost)
})
