import { Evento } from '../evento';

const eventos: Evento[] = [
  {
    id: 'cug91h0ten-491172ghian-viox52oyayf',
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
        id: 'iohe30b3qv-0oku03aev7s-uo7oxie3kfq',
        nome: 'Alice Silva',
        email: 'alice@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: 'zyecvvrrn2-c331v322t2t-imryxgyshf',
        nome: 'Carlos Pereira',
        email: 'carlos@example.com',
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: 'pr0zqqi3xu-rnsvdvtdl1m-el8h615q5x',
        nome: 'Beatriz Lima',
        email: 'beatriz@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2,
      },
    ],
  },
  {
    id: 'lh0plapoyys-kct824ih8y9-bise6fai1s',
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
        id: '6t81u79113i-f5ab2gp3t7u-0cy2zsqpk4ij',
        nome: 'Eduardo Santos',
        email: 'eduardo@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: 'lkvid9gb8rq-gz1q5w6ztj7-4kq5c3p6skl',
        nome: 'Fernanda Costa',
        email: 'fernanda@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
    ],
  },
  {
    id: 'k8uexwkckw-lv7jxe6uiif-99nvlazou2u',
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
        id: '7g09qnmg442-xutd2yacli-pxlb5kvl2g',
        nome: 'Gabriela Rocha',
        email: 'gabriela@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: 'aht99eft0uv-m74czgbprn-7kxk4o5mxf3',
        nome: 'Hugo Nogueira',
        email: 'hugo@example.com',
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: 'ppiqa7abq-oygpy7kjlo-2p08tag17n',
        nome: 'Isabela Martins',
        email: 'isabela@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: '25dxgc911v8-t3w7i2iyqss-5hcd1jxo0q',
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
        id: 'orh65z7m68n-jj5z9cmm26-449v60yind6',
        nome: 'Bruno Cardoso',
        email: 'bruno@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: 'rxlfdc06pb-9mrbe3twp2q-wplq7wknci',
        nome: 'Carla Mendes',
        email: 'carla@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: 'gt780df4pjc-wovkrndfxhe-w72xrb5ohca',
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
        id: 't94od1edj8s-81sv0sqm688-opvaswk832b',
        nome: 'Maria Souza',
        email: 'maria@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2,
      },
      {
        id: 'd4b5jq01r44-76s7tmg9sfw-1hwd9j3mfet',
        nome: 'José Almeida',
        email: 'jose@example.com',
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: 'bffch4a1rv6-1flx3oag4hv-y1rno7njjq',
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
        id: '6ox3xe3l227-rey3vg2y1i-x0ffd5xnatc',
        nome: 'Cláudia Lima',
        email: 'claudia@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 3,
      },
      {
        id: 'khyqulhotcr-ymbkak8n7ld-ct18r6d2r1',
        nome: 'Ricardo Barbosa',
        email: 'ricardo@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: 'vddujjiprqf-ard6kwq5v4a-i6j3cz0kpor',
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
        id: 'g3ucit1h0u5-dc2h3u8hsa-9zjgeuc8m6w',
        nome: 'Thiago Oliveira',
        email: 'thiago@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 4,
      },
      {
        id: 'ns5l05mgqnb-dpgktf5qyqv-zxmrdrxrs1k',
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
