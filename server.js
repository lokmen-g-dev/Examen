import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
mongoose.set('strictQuery', true)
import { notFoundError, errorHandler } from './middlewares/error-handler.js';

//import gameRoutes from './routes/plat.js';
import resRoutes from './routes/restaurant.js';
import menuRoutes from './routes/menu.js';

const app = express();
const port = process.env.PORT || 9090;
const databaseName = 'examen2cinfo3scp';

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose
  .connect(`mongodb://localhost:27017/${databaseName}`)
  .then(() => {
    console.log(`Connected to ${databaseName}`);
  })
  .catch(err => {
    console.log(err);
  });

  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/img', express.static('public/images'));

//app.use('/game', gameRoutes);
app.use('/restaurants', resRoutes);
app.use('/menus', menuRoutes);

app.use(notFoundError);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});