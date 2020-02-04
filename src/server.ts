import * as express from 'express';
import routes from './routes';

const PORT = process.env.PORT || 3000;

const app: express.Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use('/api', routes);

app.listen(PORT, () => {
  console.log('App listening on port', PORT);
});
