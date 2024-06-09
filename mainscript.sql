CREATE DATABASE IF NOT EXISTS `gradmate`;

-- Tabela login
CREATE TABLE IF NOT EXISTS `login` (
  `id` int NOT NULL AUTO_INCREMENT,
  `senha` varchar(32) NOT NULL,
  `email` varchar(40) NOT NULL,
  `login` varchar(20) NOT NULL,
  `permissaoAdmin` tinyint(1) NOT NULL DEFAULT '0',
  `permissaoUploadArquivos` tinyint(1) NOT NULL DEFAULT '0',
  `permissaoDownloadArquivos` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
);

-- Tabela curso
CREATE TABLE IF NOT EXISTS `curso` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `data_insercao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- Tabela fase_projeto
CREATE TABLE IF NOT EXISTS `fase_projeto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Tabela professor
CREATE TABLE IF NOT EXISTS `professor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `descricao_curta` varchar(50) DEFAULT NULL,
  `id_login` int DEFAULT NULL,
  `data_insercao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_login` (`id_login`),
  FOREIGN KEY (`id_login`) REFERENCES `login` (`id`)
);

-- Tabela aluno
CREATE TABLE IF NOT EXISTS `aluno` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `ra` varchar(50) NOT NULL,
  `id_login` int DEFAULT NULL,
  `id_curso` int DEFAULT NULL,
  `data_insercao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_login` (`id_login`),
  KEY `id_curso` (`id_curso`),
  FOREIGN KEY (`id_login`) REFERENCES `login` (`id`),
  FOREIGN KEY (`id_curso`) REFERENCES `curso` (`id`)
);

-- Tabela projeto
CREATE TABLE IF NOT EXISTS `projeto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `descricao` text,
  `id_fase` int NOT NULL,
  `bloqueado` tinyint(1) NOT NULL DEFAULT '0',
  `arquivado` tinyint(1) NOT NULL DEFAULT '0',
  `id_curso` int DEFAULT NULL,
  `id_orientador` int DEFAULT NULL,
  `foto_perfil` longblob NOT NULL,
  `data_insercao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_fase` (`id_fase`),
  KEY `id_curso` (`id_curso`),
  KEY `id_orientador` (`id_orientador`),
  FOREIGN KEY (`id_fase`) REFERENCES `fase_projeto` (`id`),
  FOREIGN KEY (`id_curso`) REFERENCES `curso` (`id`),
  FOREIGN KEY (`id_orientador`) REFERENCES `professor` (`id`)
);

-- Tabela projetos_alunos
CREATE TABLE IF NOT EXISTS `projetos_alunos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_projeto` int DEFAULT NULL,
  `id_aluno` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_projeto` (`id_projeto`),
  KEY `id_aluno` (`id_aluno`),
  FOREIGN KEY (`id_projeto`) REFERENCES `projeto` (`id`),
  FOREIGN KEY (`id_aluno`) REFERENCES `aluno` (`id`)
);
