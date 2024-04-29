const express = require('express')
const { Pool } = require('pg');

const app = express();
const PORT = 4000;

app.use(express.json());

// Configuração do pool de conexão com o PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'harry_potter2', 
    password: 'ds564', 
    port: 5432, 
  });
  
  // Rota para adicionar um bruxo
app.post('/bruxos', async (req, res) => {
    try {
      const { nome, idade, casa, habilidade, status_sangue, patrono } = req.body;
  
      // Verifique se a casa é válida
      const casasPermitidas = ['Sonserina', 'Lufa-Lufa', 'Grifinória', 'Corvinal'];
      if (!casasPermitidas.includes(casa)) {
        return res.status(400).send({ mensagem: 'Casa inválida. As casas permitidas são Sonserina, Lufa-Lufa, Grifinória e Corvinal.' });
      }
  
      // Verifique se o status_sangue é válido
      const statusSanguePermitidos = ['Puro', 'Mestiço', 'Trouxa'];
      if (!statusSanguePermitidos.includes(status_sangue)) {
        return res.status(400).send({ mensagem: 'Status de sangue inválido. Os status permitidos são Puro, Mestiço e Trouxa.' });
      }
  
      await pool.query('INSERT INTO bruxos (nome, idade, casa, habilidade, status_sangue, patrono) VALUES ($1, $2, $3, $4, $5, $6)', [nome, idade, casa, habilidade, status_sangue, patrono]);
      res.status(201).send({ mensagem: 'Bruxo adicionado com sucesso'});
    } catch (error) {
      console.error('Erro ao adicionar bruxo:', error);
      res.status(500).send('Erro ao adicionar bruxo');
    }
  });
  
// Rota para obter todos os bruxos
app.get('/bruxos', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM bruxos');
      res.json({
          total: result.rowCount,
          bruxos: result.rows,
      });
    } catch (error) {
      console.error('Erro ao obter bruxos:', error);
      res.status(500).send('Erro ao obter bruxos');
    }
  });

// Rota para atualizar um bruxo
app.put('/bruxos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, idade, casa, habilidade, status_sangue, patrono } = req.body;
    await pool.query('UPDATE bruxos SET nome = $1, idade = $2, casa = $3, habilidade = $4, status_sangue = $5, patrono = $6 WHERE id = $7', [nome, idade, casa, habilidade, status_sangue, patrono, id]);
    res.status(200).send({ mensagem: 'bruxo atualizado com sucesso'});
  } catch (error) {
    console.error('Erro ao atualizar bruxo:', error);
    res.status(500).send('Erro ao atualizar bruxo');
  }
});

// Rota para excluir um bruxo
app.delete('/bruxos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM bruxos WHERE id = $1', [id]);
    res.status(200).send({ mensagem: 'bruxo excluído com sucesso'});
  } catch (error) {
    console.error('Erro ao excluir bruxo:', error);
    res.status(500).send('Erro ao excluir bruxo');
  }
});

// Rota para obter um bruxo por ID
app.get('/bruxos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM bruxos WHERE id = $1', [id]);
    if (result.rowCount === 0) {
      res.status(404).send({ mensagem: 'bruxo não encontrado' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error('Erro ao obter bruxo por ID:', error);
    res.status(500).send('Erro ao obter bruxo por ID');
  }
});

// Rota para adicionar uma varinha
app.post('/varinhas', async (req, res) => {
    try {
      const { material, comprimento, nucleo, fabricacao } = req.body;
      await pool.query('INSERT INTO varinhas (material, comprimento, nucleo, fabricacao) VALUES ($1, $2, $3, $4)', [material, comprimento, nucleo, fabricacao]);
      res.status(201).send({ mensagem: 'Varinha adicionada com sucesso'});
    } catch (error) {
      console.error('Erro ao adicionar varinha:', error);
      res.status(500).send('Erro ao adicionar varinha');
    }
  });
  
  // Rota para obter todas as varinhas
  app.get('/varinhas', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM varinhas');
      res.json({
          total: result.rowCount,
          varinhas: result.rows,
      });
    } catch (error) {
      console.error('Erro ao obter varinhas:', error);
      res.status(500).send('Erro ao obter varinhas');
    }
  });
  
  // Rota para atualizar uma varinha
  app.put('/varinhas/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { material, comprimento, nucleo, fabricacao } = req.body;
      await pool.query('UPDATE varinhas SET material = $1, comprimento = $2, nucleo = $3, fabricacao = $4 WHERE id = $5', [material, comprimento, nucleo, fabricacao, id]);
      res.status(200).send({ mensagem: 'Varinha atualizada com sucesso'});
    } catch (error) {
      console.error('Erro ao atualizar varinha:', error);
      res.status(500).send('Erro ao atualizar varinha');
    }
  });
  
  // Rota para excluir uma varinha
  app.delete('/varinhas/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await pool.query('DELETE FROM varinhas WHERE id = $1', [id]);
      res.status(200).send({ mensagem: 'Varinha excluída com sucesso'});
    } catch (error) {
      console.error('Erro ao excluir varinha:', error);
      res.status(500).send('Erro ao excluir varinha');
    }
  });
  
  // Rota para obter uma varinha por ID
  app.get('/varinhas/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const result = await pool.query('SELECT * FROM varinhas WHERE id = $1', [id]);
      if (result.rowCount === 0) {
        res.status(404).send({ mensagem: 'Varinha não encontrada' });
      } else {
        res.json(result.rows[0]);
      }
    } catch (error) {
      console.error('Erro ao obter varinha por ID:', error);
      res.status(500).send('Erro ao obter varinha por ID');
    }
  });

//Rota raiz para teste
app.get('/', async (req, res) => {
  res.status(200).send({ mensagem: 'Servidor backend rodando com sucesso🚀'});
});

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});