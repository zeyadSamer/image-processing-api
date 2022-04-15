import express from 'express';

import routes from './routes/mainrouter';

const app = express();

const port = 3000;

app.use('/api', routes);

app.listen(port, () => {
  console.log(`server running on http://localhost:${3000}`);
});

//exporting app for testing
export default app;
