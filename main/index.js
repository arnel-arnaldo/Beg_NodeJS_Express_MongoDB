const express = require('express')
const app = new express()
const ejs = require('ejs')

const mongoose = require('mongoose')
mongoose.connect(
  'mongodb+srv://arnelarnaldo:Maj14344@ahcluster1.yonmz.mongodb.net/db1?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
)

const fileUpload = require('express-fileupload')
const validateMiddleWare = require('./middleware/validationMiddleware')
const expressSession = require('express-session')
const authMiddleware = require('./middleware/authMiddleware')
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')
const flash = require('connect-flash')

app.set('view engine', 'ejs')

global.loggedIn = null

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload())
app.use('/posts/store', validateMiddleWare)
app.use(
  expressSession({
    resave: true,
    saveUninitialized: true,
    secret: 'keyboard cat',
  })
)
app.use(flash())
app.use('*', (req, res, next) => {
  loggedIn = req.session.userId
  next()
})

let port = process.env.PORT
if (port == null || port == '') {
  port = 4000
}
app.listen(port, () => {
  console.log('App listening to port', port)
})

const homeController = require('./controllers/home')
const newPostController = require('./controllers/newPost')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const logoutController = require('./controllers/logout')

app.get('/', homeController)
app.get('/posts/new', authMiddleware, newPostController)
app.post('/posts/store', authMiddleware, storePostController)
app.get('/post/:id', getPostController)
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)
app.post(
  '/users/register',
  redirectIfAuthenticatedMiddleware,
  storeUserController
)
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController)
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController)
app.get('/auth/logout', logoutController)
app.use((req, res) => res.render('notfound'))
