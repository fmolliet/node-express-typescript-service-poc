import 'reflect-metadata';
import app from './App';

app.listen(process.env.SERVICE_PORT || 3000, () => {
    console.log(`Node server listening on port: ${process.env.SERVICE_PORT || 3000}`);
});