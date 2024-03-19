import { express } from 'express';
import { path } from 'path';
const app = express();

const PORT = process.env.PORT || 3000;

// Служіння статичних файлів з папки dist
app.use(express.static(path.join(__dirname, 'dist')));

// Перехоплення усіх запитів для SPA (односторінкового додатку)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
