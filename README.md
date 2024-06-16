# Blog FIAP - Trabalho de Frontend

Bem-vindo ao README do nosso projeto de frontend para o blog da FIAP. Este projeto utiliza Vite, uma ferramenta de build para projetos JavaScript que acelera o início do desenvolvimento. Iniciamos o projeto usando o template React disponível no Vite (`npm create vite@latest my-blog -- --template react`).

Além do Vite e React, nosso projeto inclui:
- Node 20.13.1
- React Router
- Bootstrap 5.3.3
- Contentful (utilizado como backend para posts e categorias do blog)
- Contentful rich-text-html-renderer

### Configuração do Ambiente

Para rodar este projeto, você precisará configurar um arquivo de variáveis de ambiente. Crie um arquivo `.env.local` na raiz do seu projeto com as seguintes variáveis preenchidas:

dotenv
VITE_SPACE_ID=seu_space_id
VITE_ACCESS_TOKEN=seu_access_token
Como Rodar o Projeto
Para iniciar o projeto localmente, utilize o seguinte comando:

bash
Copiar código
npm run dev
Para construir o projeto para produção, utilize o seguinte comando:

bash
Copiar código
npm run build
Obrigado por verificar nosso projeto de frontend para o blog da FIAP!

perl
Copiar código

Este texto está pronto para ser adicionado ao `README.md` do seu repositório Git. Certifique-se de substituir `seu_space_id` e `seu_access_token` pelos IDs e tokens reais do Contentful que você utilizará no seu projeto.
 
 
