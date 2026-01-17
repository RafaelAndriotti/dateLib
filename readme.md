# 📅 Biblioteca de Manipulação de Datas

Uma biblioteca simples em **JavaScript** para manipulação e formatação de datas.  
Inclui funções para adicionar dias, meses e anos, calcular diferenças entre datas e formatar datas em diferentes padrões.

---

## 🚀 Funcionalidades

- **Adicionar dias, meses e anos**
  - `adicionaDias(data, dias)`
  - `adicionaMeses(data, meses)`
  - `adicionaAnos(data, anos)`

- **Calcular diferença entre duas datas**
  - `diferencaEntreDatas(dataInicial, dataFinal)`  
    Retorna a diferença em dias entre duas datas.

- **Formatar datas**
  - `dataFormatada(data, formato)`  
    Suporta formatos como `DD/MM/YYYY`, `YYYY-MM-DD`, `YYYY/MM/DD`.

---

## ⚙️ Instalação

Basta importar os arquivos no seu projeto:

```js
import { adicionaDias, adicionaMeses, adicionaAnos } from './adicionaData.js';
import { diferencaEntreDatas } from './calculaDiferencaData.js';
import { dataFormatada } from './formataDatas.js';
