Blog FIAP - Trabalho de Frontend
Bem-vindo ao README do nosso projeto de frontend para o blog da FIAP. Este projeto utiliza Vite, uma ferramenta de build para projetos JavaScript que acelera o início do desenvolvimento. Iniciamos o projeto usando o template React disponível no Vite (npm create vite@latest my-blog -- --template react).

Além do Vite e React, nosso projeto inclui:

Node 20.13.1
React Router
Bootstrap 5.3.3
Contentful (utilizado como backend para posts e categorias do blog)
Contentful rich-text-html-renderer
Para rodar este projeto, você precisará de um arquivo de variáveis de ambiente. Crie um arquivo .env.local na raiz do seu projeto. Certifique-se de preencher pelo menos as seguintes variáveis com o ID do espaço e o token de acesso do Contentful:

VITE_SPACE_ID
VITE_ACCESS_TOKEN
Para iniciar o projeto:

arduino
Copiar código
npm run dev
Para construir o projeto para produção:

arduino
Copiar código
npm run build
Obrigado por verificar nosso projeto de frontend para o blog da FIAP!
 
 
