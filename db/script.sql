CREATE DATABASE harry_potter;

\c atividade_pratica_01;

CREATE TABLE bruxos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    idade INTEGER NOT NULL,
    casa VARCHAR(50),
    habilidade VARCHAR(100) NOT NULL,
    status_sangue VARCHAR(50) NOT NULL,
    patrono VARCHAR(100)
);


CREATE TABLE varinhas (
    id SERIAL PRIMARY KEY,
    material VARCHAR(100) NOT NULL,
    comprimento DECIMAL NOT NULL,
    nucleo VARCHAR(100) NOT NULL,
    fabricacao DATE NOT NULL
);