import { Evento } from '../evento';
import { Id } from '../shared';

const eventos: Evento[] = [
  {
    id: '1f867156-08cb-4b5e-8907-804edea59e0b',
    alias: 'evento-fullstack',
    senha: 'senha123',
    nome: 'Evento de Desenvolvimento Fullstack',
    data: new Date('2024-12-01T10:00:00Z'),
    local: 'São Paulo, SP',
    descricao:
      'Um evento completo para aprender desenvolvimento fullstack do zero.',
    imagem:
      'https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk',
    imagemBackground:
      'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
    publicoEsperado: 200,
    convidados: [
      {
        id: '937d2fda-51c2-4333-a8f6-18a298eabe0f',
        nome: 'Alice Silva',
        email: 'alice@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: '4841bfdc-2fda-4472-a2ba-20d1cc898566',
        nome: 'Carlos Pereira',
        email: 'carlos@example.com',
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: '82c79b9b-f3f8-42b2-bf24-2db8c85cd04b',
        nome: 'Beatriz Lima',
        email: 'beatriz@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2,
      },
    ],
  },
  {
    id: 'd803a093-ab54-47ca-8ba3-b14a57fdd1b7',
    alias: 'evento-js-avancado',
    senha: 'js2024',
    nome: 'Workshop Avançado de JavaScript',
    data: new Date('2024-11-20T15:00:00Z'),
    local: 'Rio de Janeiro, RJ',
    descricao: 'Um workshop avançado para programadores JavaScript.',
    imagem:
      'https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200',
    imagemBackground:
      'https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg',
    publicoEsperado: 100,
    convidados: [
      {
        id: '23ad9d6b-935f-436b-8355-2b509e9d6b90',
        nome: 'Eduardo Santos',
        email: 'eduardo@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: 'f4698b01-5bd8-4130-8a7b-05ae82e432e1',
        nome: 'Fernanda Costa',
        email: 'fernanda@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
    ],
  },
  {
    id: '44706242-f581-494d-a050-f9cded0a42d8',
    alias: 'evento-dev-frontend',
    senha: 'front123',
    nome: 'Bootcamp de Desenvolvimento Frontend',
    data: new Date('2024-11-15T09:00:00Z'),
    local: 'Belo Horizonte, MG',
    descricao: 'Aprenda a criar interfaces incríveis e responsivas.',
    imagem:
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg',
    imagemBackground:
      'https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg',
    publicoEsperado: 150,
    convidados: [
      {
        id: 'a0529a36-6226-4fff-87b5-04d7038f8f6f',
        nome: 'Gabriela Rocha',
        email: 'gabriela@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: '6f25c114-5658-4260-b5e6-4af3bfc00aab',
        nome: 'Hugo Nogueira',
        email: 'hugo@example.com',
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: 'ebf6f14b-4017-4253-93cd-3247fbe366f0',
        nome: 'Isabela Martins',
        email: 'isabela@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: '82db8994-ab0b-409a-a04d-f125367af0eb',
    alias: 'casamento-alberto-marina',
    senha: 'casamento2024',
    nome: 'Casamento do Alberto e Marina',
    data: new Date('2024-11-25T16:00:00Z'),
    local: 'Florianópolis, SC',
    descricao:
      'Celebração do casamento de Alberto e Marina com amigos e familiares.',
    imagem:
      'https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg',
    imagemBackground:
      'https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg',
    publicoEsperado: 150,
    convidados: [
      {
        id: 'dbc2c022-9593-445d-bf82-38fac49b10ef',
        nome: 'Bruno Cardoso',
        email: 'bruno@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: '8aec7f46-b0d8-473f-b42f-90530fef5b05',
        nome: 'Carla Mendes',
        email: 'carla@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: '676fef82-b12f-4096-90f2-d720f02e976e',
    alias: 'aniversario-joao',
    senha: 'joao2024',
    nome: 'Aniversário do João - 30 Anos',
    data: new Date('2024-12-05T18:00:00Z'),
    local: 'Curitiba, PR',
    descricao:
      'Comemoração dos 30 anos de João com amigos próximos e familiares.',
    imagem:
      'https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg',
    imagemBackground:
      'https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg',
    publicoEsperado: 80,
    convidados: [
      {
        id: '47a9c501-11bd-4529-8ce4-7652d701b9fc',
        nome: 'Maria Souza',
        email: 'maria@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2,
      },
      {
        id: '78e99f98-aaff-4370-b614-8a0386f32344',
        nome: 'José Almeida',
        email: 'jose@example.com',
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: 'd35efc56-2145-4b6a-baf4-39506912727d',
    alias: 'inauguracao-loja-estrela',
    senha: 'estrela2024',
    nome: 'Inauguração da Loja Estrela',
    data: new Date('2024-12-10T09:00:00Z'),
    local: 'Porto Alegre, RS',
    descricao:
      'Evento de inauguração da nova loja Estrela com brindes e promoções.',
    imagem:
      'https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png',
    imagemBackground:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s',
    publicoEsperado: 300,
    convidados: [
      {
        id: '94b473e9-4b9e-4a59-bbef-bafda4609762',
        nome: 'Cláudia Lima',
        email: 'claudia@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 3,
      },
      {
        id: '112f7809-c510-45e3-a5f2-a5e2c42bae0e',
        nome: 'Ricardo Barbosa',
        email: 'ricardo@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: '0bc469dc-37c3-4d18-8ef4-ce83b4d89e45',
    alias: 'reuniao-familia-oliveira',
    senha: 'familia2024',
    nome: 'Reunião da Família Oliveira',
    data: new Date('2024-12-15T12:00:00Z'),
    local: 'Salvador, BA',
    descricao: 'Reunião de fim de ano da família Oliveira.',
    imagem:
      'https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg',
    imagemBackground:
      'https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid',
    publicoEsperado: 50,
    convidados: [
      {
        id: 'd18733d0-12f1-40cc-8751-77b928c80e8e',
        nome: 'Thiago Oliveira',
        email: 'thiago@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 4,
      },
      {
        id: '669674af-1182-4939-a326-71dda13eab9c',
        nome: 'Letícia Oliveira',
        email: 'leticia@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
];

export default eventos;
