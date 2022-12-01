const express = require('express');
const path = require('path');
const friendsRouter = require('./routes/friends.router.js');
const messagesRouter = require('./routes/messages.router.js');

const app = express();
const port = 666;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method}  ${req.baseUrl}${req.url} ${delta} ms `);
});

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Test Title',
    caption: 'Caption TEST!',
  });
});

// Routers settings
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
