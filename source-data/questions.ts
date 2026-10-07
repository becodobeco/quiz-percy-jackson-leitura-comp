export type OptionId = "A" | "B" | "C" | "D" | "E";

export interface QuizOption {
  id: OptionId;
  text: string;
}

export interface QuizQuestion {
  id: string;
  number: number;
  question: string;
  options: readonly QuizOption[];
}

export const questions = [
  {
    id: "q01",
    number: 1,
    question:
      "Uma missão começou com um plano impecável. Dez minutos depois, absolutamente tudo deu errado. O que você faz primeiro?",
    options: [
      {
        id: "A",
        text: "Tento entender exatamente onde o plano quebrou. Alguma peça importante deve ter passado despercebida.",
      },
      {
        id: "B",
        text: "Alguém precisa assumir o comando, escolher a próxima meta e fazer todo mundo voltar a se mover.",
      },
      {
        id: "C",
        text: "Escolho a saída que parece mais promissora e vou ajustando no caminho. Ficar parado provavelmente é pior.",
      },
      {
        id: "D",
        text: "Primeiro, confiro como todo mundo está. Depois reorganizo o que cada pessoa ainda consegue fazer.",
      },
      {
        id: "E",
        text: "Procuro uma rota lateral: uma informação ignorada, alguém com quem conversar ou simplesmente outro jeito de enxergar o problema.",
      },
    ],
  },
  {
    id: "q02",
    number: 2,
    question:
      "Quando você está em um grupo, qual papel costuma assumir sem nem perceber?",
    options: [
      {
        id: "A",
        text: "A pessoa que organiza a bagunça, distribui responsabilidades e faz as coisas finalmente saírem do lugar.",
      },
      {
        id: "B",
        text: "A pessoa que percebe quem ficou de fora, quem está desconfortável e quando o clima precisa mudar.",
      },
      {
        id: "C",
        text: "A pessoa que resolve os problemas práticos. Talvez ninguém saiba como, mas no final aquilo funciona.",
      },
      {
        id: "D",
        text: "A pessoa que aparece com uma ideia não planejada e, cinco minutos depois, convenceu metade do grupo a participar.",
      },
      {
        id: "E",
        text: "A pessoa que aponta aquilo que todo mundo percebeu, mas ninguém queria dizer em voz alta.",
      },
    ],
  },
  {
    id: "q03",
    number: 3,
    question:
      "Qual destas frases chega mais perto da sua relação com regras?",
    options: [
      {
        id: "A",
        text: "Regras fazem sentido quando existe uma lógica por trás delas e ajudam as coisas a funcionar melhor.",
      },
      {
        id: "B",
        text: "Regra nenhuma prevê todas as situações. Se existir uma solução melhor, provavelmente vou experimentar.",
      },
      {
        id: "C",
        text: "Respeito limites, mas, se uma regra ultrapassa os meus, não tenho muita dificuldade em confrontá-la.",
      },
      {
        id: "D",
        text: "Tenho pouca paciência para regras que dizem como alguém deveria viver, se expressar ou escolher o próprio caminho.",
      },
      {
        id: "E",
        text: "Antes de obedecer ou quebrar uma regra, quero entender por que ela existe e o que aconteceria sem ela.",
      },
    ],
  },
  {
    id: "q04",
    number: 4,
    question:
      "Uma discussão séria começa entre duas pessoas de quem você gosta. Seu instinto é...",
    options: [
      {
        id: "A",
        text: "Não entrar imediatamente. Quero observar, entender o que realmente provocou aquilo e perceber o que não está sendo dito.",
      },
      {
        id: "B",
        text: "Intervir de uma vez, principalmente se achar que alguém está sendo atacado ou tratado injustamente.",
      },
      {
        id: "C",
        text: "Tentar traduzir os dois lados. Às vezes as pessoas estão dizendo coisas diferentes quando, no fundo, precisam de coisas parecidas.",
      },
      {
        id: "D",
        text: "Estabelecer um limite. Seja qual for o problema, certas atitudes precisam ter consequências.",
      },
      {
        id: "E",
        text: "Quebrar a dinâmica de algum jeito — humor, uma pergunta inesperada, uma mudança de perspectiva — antes que todo mundo diga algo de que vai se arrepender.",
      },
    ],
  },
  {
    id: "q05",
    number: 5,
    question:
      "Quando você perde algo que realmente queria, qual pensamento costuma incomodar mais?",
    options: [
      { id: "A", text: "“Eu sei que consigo fazer melhor do que fiz.”" },
      { id: "B", text: "“Eu deveria ter percebido antes onde aquilo daria errado.”" },
      { id: "C", text: "“Eu aceitaria perder. Só não desse jeito.”" },
      { id: "D", text: "“O pior é saber que isso também afetou outras pessoas.”" },
      { id: "E", text: "“Talvez eu devesse ter arriscado mais enquanto ainda dava tempo.”" },
    ],
  },
  {
    id: "q06",
    number: 6,
    question:
      "Qual é a sua maneira mais natural de demonstrar que alguém é importante para você?",
    options: [
      {
        id: "A",
        text: "Faço alguma coisa concreta que facilite a vida da pessoa. Resolvo, conserto, preparo, organizo.",
      },
      {
        id: "B",
        text: "Dou espaço para ela falar — ou simplesmente fico por perto quando ela não quer falar.",
      },
      {
        id: "C",
        text: "Quero viver coisas com aquela pessoa. Convites, aventuras, histórias que depois só nós dois vamos entender.",
      },
      {
        id: "D",
        text: "Lembro a pessoa do que ela é capaz e, às vezes, dou aquele empurrãozinho que ela não daria sozinha.",
      },
      {
        id: "E",
        text: "Levo o que ela me conta a sério, ajudo a enxergar possibilidades que talvez não tenha considerado e digo uma verdade difícil quando é necessário.",
      },
    ],
  },
  {
    id: "q07",
    number: 7,
    question:
      "Você precisa tomar uma decisão arriscada sem saber exatamente o que vai acontecer. O que pesa mais?",
    options: [
      {
        id: "A",
        text: "Quero descobrir qual opção oferece a melhor chance de chegar ao resultado que preciso.",
      },
      {
        id: "B",
        text: "Posso não prever tudo. Se meu instinto disser que o caminho é aquele, confio que consigo me adaptar depois.",
      },
      {
        id: "C",
        text: "Se alguém depender de mim, minha tolerância ao risco aumenta bastante.",
      },
      {
        id: "D",
        text: "Quanto menos compreendo uma possibilidade, maior é a minha vontade de descobrir o que existe ali.",
      },
      {
        id: "E",
        text: "Antes de decidir, quero entender como aquilo vai atingir as outras pessoas envolvidas.",
      },
    ],
  },
  {
    id: "q08",
    number: 8,
    question:
      "Ninguém sabe a resposta. Nem a pessoa que normalmente sabe todas as respostas. E agora?",
    options: [
      {
        id: "A",
        text: "Pesquiso, comparo informações e tento encontrar algum padrão que todos deixaram passar.",
      },
      {
        id: "B",
        text: "Testo uma possibilidade. Se não funcionar, pelo menos agora sabemos uma coisa que não funciona.",
      },
      {
        id: "C",
        text: "Junto pessoas com perspectivas diferentes e vejo o que aparece quando colocamos as informações na mesma mesa.",
      },
      {
        id: "D",
        text: "Em algum momento alguém vai precisar escolher uma direção. Reúno o que temos, tomo uma decisão e seguimos.",
      },
      {
        id: "E",
        text: "Paro de forçar uma resposta por algum tempo. Algumas conexões aparecem justamente quando a cabeça ganha espaço para trabalhar.",
      },
    ],
  },
  {
    id: "q09",
    number: 9,
    question:
      "Alguém claramente subestima você. Qual reação parece mais sua?",
    options: [
      {
        id: "A",
        text: "Não faço muita questão de corrigir a pessoa. Vai ser mais interessante quando ela descobrir sozinha.",
      },
      {
        id: "B",
        text: "Se a impressão dela estiver interferindo em alguma coisa importante, corrijo na hora.",
      },
      {
        id: "C",
        text: "Deixo pensar o que quiser. Saber como alguém me enxerga também pode ser uma informação bastante útil.",
      },
      {
        id: "D",
        text: "Não preciso provar tudo imediatamente. Continuo fazendo o meu e deixo o tempo cuidar dessa parte.",
      },
      {
        id: "E",
        text: "Provavelmente vou esperar a oportunidade perfeita para fazer algo que torne impossível continuar pensando aquilo.",
      },
    ],
  },
  {
    id: "q10",
    number: 10,
    question:
      "Quando você imagina uma vida realmente bem-sucedida, o que mais se aproxima dela?",
    options: [
      {
        id: "A",
        text: "Ter construído alguma coisa útil que continue fazendo diferença depois de mim.",
      },
      {
        id: "B",
        text: "Olhar ao redor e perceber que construí relações verdadeiras e um lugar onde as pessoas querem estar.",
      },
      {
        id: "C",
        text: "Saber que levei minhas capacidades o mais longe que consegui.",
      },
      {
        id: "D",
        text: "Ter vivido com liberdade suficiente para colecionar experiências, histórias e algumas decisões questionáveis.",
      },
      {
        id: "E",
        text: "Conseguir olhar para trás sem sentir que traí aquilo que considero essencial.",
      },
    ],
  },
  {
    id: "q11",
    number: 11,
    question:
      "Uma pessoa muito próxima está passando por uma crise. O que você provavelmente faz?",
    options: [
      {
        id: "A",
        text: "Tento transformar aquela montanha num conjunto de problemas menores que podemos resolver um por um.",
      },
      {
        id: "B",
        text: "Crio um espaço seguro e fico por perto. Nem toda crise precisa de uma solução nos primeiros cinco minutos.",
      },
      {
        id: "C",
        text: "Tento entender o que a pessoa está sentindo e o que ela realmente precisa — porque nem sempre são a mesma coisa.",
      },
      {
        id: "D",
        text: "Se existe algo ou alguém causando o problema, minha primeira vontade é agir diretamente sobre a causa.",
      },
      {
        id: "E",
        text: "Tento mudar um pouco o ar: tirar a pessoa dali, mostrar outra perspectiva, fazê-la respirar ou até rir por alguns minutos.",
      },
    ],
  },
  {
    id: "q12",
    number: 12,
    question:
      "Agora a pergunta desagradavelmente específica: quando você está sob muita pressão, qual versão menos simpática de você costuma aparecer?",
    options: [
      {
        id: "A",
        text: "Tento controlar tudo e começo a achar que seria muito mais fácil se todo mundo simplesmente fizesse as coisas do meu jeito.",
      },
      {
        id: "B",
        text: "Faço alguma coisa no impulso e só depois meu cérebro aparece perguntando se aquilo realmente foi uma boa ideia.",
      },
      {
        id: "C",
        text: "Eu me fecho, remoendo coisas por muito mais tempo do que gostaria de admitir.",
      },
      {
        id: "D",
        text: "Começo a carregar problemas alheios, tenho dificuldade de dizer não e esqueço que também tenho um limite.",
      },
      {
        id: "E",
        text: "Fico tão obcecado por uma ideia, tarefa ou interesse que perco completamente a noção de quando deveria parar.",
      },
    ],
  },
  {
    id: "q13",
    number: 13,
    question:
      "Você recebeu algo quase mitológico no Acampamento Meio-Sangue: uma tarde inteira sem nenhuma atividade obrigatória. Quando percebe, está...",
    options: [
      {
        id: "A",
        text: "...ajudando em uma tarefa que nem era sua porque alguém claramente estava fazendo trabalho demais sozinho.",
      },
      {
        id: "B",
        text: "...participando de uma disputa que começou como brincadeira e ficou estranhamente séria depois que alguém sugeriu “melhor de três”.",
      },
      {
        id: "C",
        text: "...indo conhecer um canto do acampamento onde nunca esteve porque viu alguma coisa curiosa naquela direção. O plano termina aí.",
      },
      {
        id: "D",
        text: "...em uma conversa que começou completamente banal e, de alguma forma, virou duas horas de confidências.",
      },
      {
        id: "E",
        text: "...em algum lugar tranquilo, lendo, pensando ou simplesmente deixando a cabeça viajar até descobrir que a tarde inteira desapareceu.",
      },
    ],
  },
] as const satisfies readonly QuizQuestion[];

export type QuestionId = (typeof questions)[number]["id"];
