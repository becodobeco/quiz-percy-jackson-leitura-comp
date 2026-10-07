# Quiz dos chalés — beta-compartilhar-chale

Esta é uma cópia da versão final aprovada, com cartões de resultado para compartilhamento. A pasta e o ZIP `quiz-chales-final` continuam preservados.

## Compartilhar o resultado

Depois do resultado, de todas as indicações de livros e do botão de refazer o teste, cada chalé mostra seu cartão vertical (1080 × 1920 px), com a ilustração e a cor próprias do chalé, seu nome, número e uma assinatura discreta da Livraria Leitura. Essa é a última seção da página. Os 18 JPEGs estão em `assets/share-cards/` e foram preparados antecipadamente para que a prévia não dependa de gerar imagens no dispositivo da pessoa.

- **Compartilhar resultado:** no site publicado por HTTPS, abre o menu nativo de compartilhamento quando o navegador aceita arquivos. O texto enviado inclui o nome do chalé e o endereço público do quiz. Caso não haja suporte, a interface orienta a baixar a imagem.
- **Baixar imagem:** no site publicado, salva o JPEG. Ao abrir `index.html` diretamente no computador, abre a imagem em outra aba para usar “Salvar imagem como”, pois o navegador restringe downloads automáticos de arquivos locais.
- **Copiar link do quiz:** fica funcional após a publicação em um endereço HTTP/HTTPS; no modo local, a interface informa que ainda não existe link público.

O botão de compartilhamento não publica automaticamente em nenhuma rede social. A pessoa escolhe o aplicativo no seu próprio dispositivo. O cartão não contém dados pessoais nem pontuação.

`share-card.js` contém o desenho usado para produzir os cartões; os arquivos finais já estão incluídos. O script de geração e o teste de navegador ficam na pasta de trabalho do projeto, fora deste pacote. Se a identidade visual dos cartões for alterada, gere novamente os 18 arquivos de `assets/share-cards/`.

Os cartões usam a mesma moldura central e um recorte proporcional para cada banner original. Os banners de Hebe e Tique têm margens brancas no arquivo de origem; essas margens são excluídas somente nos cartões de compartilhamento.

Esta versão final consolida o quiz aprovado e as indicações de leitura: 18 livros principais e 14 alternativas jovens, com os hiperlinks extraídos dos títulos no DOCX. A beta 1.1 permanece salva separadamente em `quiz-chales-beta-1.1.zip` como ponto de retorno.

Esta versão foi refeita com a identidade visual enviada em `identidade_visual_quiz_imagens.zip`. A abertura usa a paisagem noturna e o emblema laranja do Acampamento Meio-Sangue fornecido posteriormente; as perguntas e o desempate usam pergaminho; o resultado aplica a paleta do chalé e mostra seu banner ilustrado. Os 18 banners em `assets/banners/` foram reconstruídos em alta resolução com base nos painéis em `reference/`, preservados sem alteração. Os nomes e números dos chalés são texto vivo da interface.

Os 18 banners da versão final usam WebP para carregar mais rápido na web. As dimensões e proporções foram preservadas; os PNGs originais continuam no pacote beta 1.1 e no arquivo `quiz-chales-final-antes-otimizacao.zip`.

A assinatura discreta da Livraria Leitura aparece no rodapé da abertura e do resultado. A arte branca da logo foi extraída do guia de aplicação da marca fornecido no computador.

## Abrir no navegador

1. Extraia o ZIP inteiro para uma pasta.
2. Dê dois cliques em `index.html`.

Não é necessário instalar Node.js, executar comandos ou iniciar servidor. O quiz abre localmente e também pode ser publicado como site estático. Os links para os produtos na Livraria Leitura exigem internet quando acionados. Mantenha as pastas `assets/` e `reference/` ao lado do HTML.

## O que está incluído

- As 13 perguntas, a matriz de pontuação e os 18 resultados oficiais do pacote de dados anterior.
- Desempate por pontuação total, quantidade de `+3`, perguntas estruturais e pergunta final dinâmica quando necessário.
- Temas cromáticos dos 18 chalés, aplicados somente após a revelação, com cabeçalho centralizado no resultado.
- Moldura de pergaminho em nove partes para manter os ornamentos proporcionais quando a pergunta ou o resultado ocupa mais altura; ilustrações exibidas com recorte proporcional, sem esticar.
- Cabeçalhos e ação de refazer centralizados; parágrafos longos alinhados à esquerda para leitura confortável também no celular.
- Fontes locais e imagens incluídas no pacote. A paisagem de abertura e a base de pergaminho foram criadas para adaptar a composição das referências ao conteúdo real do quiz; o selo vem das imagens fornecidas e os banners são reconstruções detalhadas dessas referências.
- Código-fonte legível em JavaScript e CSS, com os dados originais também em `source-data/`.
- Recomendações editoriais em `recommendations.js`, separadas da pontuação: título, autor, ISBN, URL e justificativa por chalé.
- As alternativas jovens de Ares, Íris, Nêmesis e Nike mantêm o status editorial apenas nos dados internos, sem aviso na interface.
- As 32 indicações exibem imagens locais das capas associadas aos ISBNs do briefing, sem esticar ou recortar as imagens. Os cartões mantêm o pergaminho, os ornamentos e as cores do chalé. As URLs de origem estão em `assets/covers/sources.json`; a edição do produto deve ser conferida na página da Leitura.
- Nenhuma classificação etária numérica ou aviso de conteúdo foi inventado; esses dados podem ser adicionados depois de verificação editorial.

Os arquivos PNG de `reference/` são referências visuais fornecidas para este projeto. As imagens geradas em `assets/` são componentes da interface desta versão.
