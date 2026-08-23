export const IMAGES = {
  capa: "https://image.qwenlm.ai/generated-images/e8da65dc-f2b5-4fe2-8b11-2c4b211c214c/_result.png",
  thumb1: "https://image.qwenlm.ai/generated-images/b61bed48-5233-44a0-9c19-f56ed84abf82/_result.png",
  thumb2: "https://image.qwenlm.ai/generated-images/fa8cf820-c004-42d1-a8d9-2b7078908383/_result.png",
  thumb3: "https://image.qwenlm.ai/generated-images/b044427b-bb36-488b-a00a-e5270acf79b1/_result.png",
};

export interface DayContent {
  day: number;
  title: string;
  focus: string;
  verse: { text: string; ref: string };
  also?: { text: string; ref: string };
  context: string;
  situation: string;
  reflection: string[];
  question: string;
  action: string;
  prayer: string;
}

export const INTRO_PARAGRAPHS = [
  "Nas cartas que escreveu às igrejas, Paulo não falou apenas de grandes doutrinas. Ele falou de palavras, reações, paciência e perdão — o tipo de coisa que acontece todos os dias debaixo do mesmo teto.",
  "Este devocional não foi feito para você simplesmente conhecer mais um ensinamento. Ele foi feito para ajudar você a transformar princípios da Palavra em pequenas decisões reais dentro da sua casa.",
  "Cada dia traz um conselho retirado das cartas de Paulo, uma situação comum do cotidiano, uma reflexão, uma pergunta para responder, uma pequena ação e uma oração. Dez a quinze minutos — é tudo o que este caminho pede de você.",
];

export const INTRO_EMPHASIS: { word: string; icon: string }[] = [
  { word: "Respostas", icon: "arrow" },
  { word: "Palavras", icon: "book" },
  { word: "Paciência", icon: "clock" },
  { word: "Conflitos", icon: "compass" },
  { word: "Perdão", icon: "heart" },
  { word: "Convivência", icon: "house" },
  { word: "Oração", icon: "candle" },
];

export const HOWTO_STEPS = [
  { title: "Leia o conselho", text: "Comece pela passagem bíblica do dia, com a referência para conferir na sua Bíblia." },
  { title: "Pense na situação", text: "Leia o retrato do cotidiano e lembre de uma cena parecida na sua casa." },
  { title: "Responda à pergunta", text: "Escreva com sinceridade no espaço “Minha reflexão”." },
  { title: "Escolha uma pequena ação", text: "Algo simples e concreto, que caiba no seu dia de hoje." },
  { title: "Faça a oração", text: "Em voz alta ou em silêncio — com as suas próprias palavras." },
];

export const FLOW = [
  { label: "Conselho", icon: "book" },
  { label: "Reflexão", icon: "compass" },
  { label: "Ação", icon: "sprout" },
  { label: "Oração", icon: "candle" },
];

export const DAYS: DayContent[] = [
  {
    day: 1,
    title: "Antes de responder, pare e reflita",
    focus: "Reações impulsivas e palavras",
    verse: {
      text: "Não saia da vossa boca nenhuma palavra torpe, mas só a que for boa para promover a edificação, para que dê graça aos que a ouvem.",
      ref: "Efésios 4:29",
    },
    also: {
      text: "A vossa palavra seja sempre agradável, temperada com sal, para que saibais como vos convém responder a cada um.",
      ref: "Colossenses 4:6",
    },
    context:
      "Paulo escreve à igreja de Éfeso ensinando como deve viver quem foi renovado em Cristo. No meio das orientações, ele cuida de algo bem concreto: o que sai da nossa boca. Antes de falar de grandes atitudes, ele fala das palavras — porque são elas que abrem, ou fecham, as portas da convivência.",
    situation:
      "Seu filho derrama o copo de suco na mesa pela segunda vez no dia. Ou seu cônjuge faz um comentário que soa como provocação. A resposta sobe rápido à garganta — afiada, pronta, com vontade de vencer a discussão.",
    reflection: [
      "Entre o que acontece e a nossa resposta existe um espaço pequeno — e é nesse espaço que a paz mora, ou se perde. Paulo não diz para nunca sentir incômodo; ele nos convida a avaliar cada palavra antes de soltá-la: ela constrói? Ela dá graça a quem ouve?",
      "Quando paramos dois segundos antes de responder, deixamos de reagir no automático e passamos a escolher. E uma casa muda de clima quando alguém escolhe, todos os dias, palavras que edificam em vez de palavras que ferem.",
    ],
    question:
      "Qual palavra — ou tom de voz — tem saído da minha boca nos momentos de cansaço, e o que ela está construindo dentro da minha casa?",
    action:
      "Hoje, antes de responder a qualquer situação tensa, respire fundo uma vez e pergunte a si mesmo: “essa resposta edifica?”. Só então fale.",
    prayer:
      "Senhor, guarda a minha boca nos momentos em que eu quiser responder na pressa. Que as minhas palavras dentro de casa sirvam para edificar e dar graça a quem ouve. Dá-me a serenidade de parar, pensar e então responder. Amém.",
  },
  {
    day: 2,
    title: "Quando a irritação aparece",
    focus: "Autocontrole e maneira de responder",
    verse: {
      text: "Irai-vos, e não pequeis; não se ponha o sol sobre a vossa ira. Não deis lugar ao diabo.",
      ref: "Efésios 4:26-27",
    },
    also: {
      text: "Toda a amargura, e ira, e cólera, e gritaria, e blasfêmia, e toda a malícia sejam tiradas dentre vós.",
      ref: "Efésios 4:31",
    },
    context:
      "Paulo não nega que a ira existe — ele ensina o que fazer com ela. Escrevendo aos efésios, mostra que o problema não é sentir, mas deixar a irritação ditar as palavras, virar amargura e passar a noite inteira morando dentro de casa.",
    situation:
      "O dia foi cheio, o jantar atrasou, as crianças não saem do celular e a pia está cheia. A irritação aparece de repente — e quem está mais perto vira o alvo mais fácil.",
    reflection: [
      "A irritação é um sinal, não uma ordem. Paulo reconhece que ela chega, mas nos chama a não pecar nela: não transformar o incômodo do momento em palavra dura, não deixar o sol se pôr carregando mágoa para o dia seguinte.",
      "Na prática, isso significa dar nome ao que sentimos, pedir um tempo quando preciso e resolver antes que o dia acabe. Autocontrole não é engolir tudo — é escolher o momento e o jeito de falar.",
    ],
    question:
      "Quando a irritação aparece, o que ela costuma encontrar em mim: uma porta aberta para palavras duras ou um coração que pede ajuda a Deus antes de reagir?",
    action:
      "Hoje, ao primeiro sinal de irritação, diga uma frase simples: “preciso de dois minutos”. Saia, respire, ore em silêncio — e só então volte para conversar.",
    prayer:
      "Pai, quando a irritação chegar, não deixes que ela governe a minha boca nem o meu coração. Ensina-me a sentir sem pecar, a resolver sem ferir e a não deixar o sol se pôr sobre a minha ira. Amém.",
  },
  {
    day: 3,
    title: "Como lidar com conflitos",
    focus: "Convivência e busca de paz",
    verse: {
      text: "Se for possível, quanto estiver em vós, tende paz com todos os homens.",
      ref: "Romanos 12:18",
    },
    also: {
      text: "E, sobre tudo isto, revesti-vos de amor, que é o vínculo da perfeição.",
      ref: "Colossenses 3:14",
    },
    context:
      "Escrevendo aos cristãos de Roma, Paulo dedica um capítulo inteiro à vida em comunidade: amor sincero, honra mútua, perdão. E resume tudo numa postura: fazer da paz um compromisso que começa em você — “quanto estiver em vós”.",
    situation:
      "Uma discussão antiga volta à tona por um motivo pequeno: a toalha molhada na cama, a conta esquecida, a visita combinada sem avisar. Em minutos, dois lados se formam — e a casa vira um tribunal.",
    reflection: [
      "Paulo não promete que a paz depende só de nós — “se for possível”, ele diz. Mas deixa claro onde começa a nossa parte: em nós. Buscar a paz não é concordar com tudo nem fingir que nada aconteceu; é decidir não alimentar a briga, ouvir antes de rebater e procurar o que restaura, não o que vence.",
      "Em casa, quase todo conflito esfria quando alguém escolhe baixar o tom primeiro. A pergunta que muda o rumo da conversa é: “eu quero ter razão, ou quero ter paz?”",
    ],
    question:
      "No último conflito em casa, eu busquei ter razão ou busquei ter paz? O que “quanto estiver em mim” significa, na prática, nesta semana?",
    action:
      "Escolha um conflito pequeno em andamento e dê o primeiro passo: convide a pessoa para conversar num momento calmo, comece ouvindo e termine combinando uma mudança simples.",
    prayer:
      "Senhor, faz de mim um pacificador dentro da minha casa. Onde houver discussão, dá-me disposição para ouvir; onde houver distância, dá-me coragem para dar o primeiro passo. Que a paz comece em mim. Amém.",
  },
  {
    day: 4,
    title: "Quando alguém dentro de casa erra",
    focus: "Correção, compreensão e responsabilidade",
    verse: {
      text: "Irmãos, se algum homem chegar a ser surpreendido nalguma ofensa, vós, que sois espirituais, encaminhai o tal com espírito de mansidão; olhando por ti mesmo, para que não sejas também tentado. Levai as cargas uns dos outros, e assim cumprireis a lei de Cristo.",
      ref: "Gálatas 6:1-2",
    },
    context:
      "Às igrejas da Galácia, Paulo ensina como tratar quem erra: não com superioridade, mas com mansidão — lembrando que qualquer um de nós pode tropeçar. E completa com um princípio que muda a convivência: levar as cargas uns dos outros.",
    situation:
      "Alguém de casa errou de novo: quebrou a confiança, repetiu um comportamento que já tinha sido conversado, esqueceu algo importante. A correção precisa acontecer — mas, do jeito errado, ela vira mais um ferimento.",
    reflection: [
      "Paulo não manda fazer de conta que o erro não existiu. Ele manda corrigir “com espírito de mansidão” — porque o objetivo não é punir, é restaurar. E deixa um alerta humilde: “olha por ti mesmo”.",
      "Quem corrige com dureza esquece os próprios tropeços; quem corrige com mansidão lembra que também precisa de graça. Em casa, a pergunta certa quase nunca é “como eu provo que ele errou?”, e sim “como eu ajudo a carregar isso?”",
    ],
    question:
      "Quando alguém de casa erra, a minha correção aproxima ou afasta? Tenho corrigido para restaurar a pessoa — ou para vencer a discussão?",
    action:
      "Hoje, se precisar corrigir alguém, use a regra dos três passos: fale em particular, comece reconhecendo algo bom na pessoa e termine oferecendo ajuda concreta — “como posso te ajudar com isso?”",
    prayer:
      "Pai, ensina-me a corrigir como Tu me corriges: com verdade e com mansidão. Livra-me da dureza de quem esquece os próprios erros e faz de mim alguém que ajuda a levar as cargas da minha casa. Amém.",
  },
  {
    day: 5,
    title: "Quando existe mágoa",
    focus: "Perdão e restauração da convivência",
    verse: {
      text: "Toda a amargura, e ira, e cólera, e gritaria, e blasfêmia, e toda a malícia sejam tiradas dentre vós. Antes sede uns para com os outros benignos, compassivos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo.",
      ref: "Efésios 4:31-32",
    },
    also: {
      text: "Suportando-vos uns aos outros, e perdoando-vos uns aos outros… assim como Cristo vos perdoou, assim fazei vós também.",
      ref: "Colossenses 3:13",
    },
    context:
      "Depois de listar o que deve ser tirado do meio da convivência — amargura, ira, gritaria —, Paulo mostra o caminho da restauração: benignidade, compaixão e perdão. E dá a medida: perdoar como Deus nos perdoou em Cristo.",
    situation:
      "Aquela palavra dita na discussão de meses atrás ainda ecoa. Ou aquela atitude pela qual ninguém pediu desculpas. Vocês convivem, mas algo esfriou — a mágoa virou um hóspede silencioso da casa.",
    reflection: [
      "Mágoa é a ira que não foi embora: ela ficou, sentou à mesa e começou a morar junto. Paulo é direto: amargura precisa ser tirada — não porque o outro mereça, mas porque Deus nos perdoou primeiro.",
      "Perdoar não é dizer que o que aconteceu não doeu, nem abrir mão de conversar sobre o que precisa mudar. É soltar o direito de cobrar a dívida todos os dias — e devolver a Deus o que só Ele pode curar. A paz volta quando a mágoa sai.",
    ],
    question:
      "Qual mágoa eu tenho guardado em silêncio? O que me impede hoje de dar o primeiro passo para soltá-la — e o que eu preciso de Deus para conseguir?",
    action:
      "Escreva em uma frase a mágoa que você quer soltar e ore entregando-a a Deus. Se for o tempo certo, procure a pessoa e diga, com calma: “aquilo me feriu, mas eu escolho perdoar”.",
    prayer:
      "Senhor, Tu sabes a mágoa que eu tenho carregado. Eu escolho perdoar — não porque seja fácil, mas porque Tu me perdoaste primeiro. Tira do meu coração a amargura e restaura a paz dentro da minha casa. Amém.",
  },
  {
    day: 6,
    title: "Quando você também precisa pedir perdão",
    focus: "Humildade e reconciliação",
    verse: {
      text: "Nada façais por contenda ou por vanglória, mas por humildade; cada um considere os outros superiores a si mesmo. Não atente cada um para o que é propriamente seu, mas cada qual também para o que é dos outros.",
      ref: "Filipenses 2:3-4",
    },
    also: {
      text: "Rogo a Evódia e rogo a Síntique que sintam o mesmo no Senhor.",
      ref: "Filipenses 4:2",
    },
    context:
      "Aos filipenses, Paulo apresenta a humildade como o caminho de Cristo — aquele que, sendo Deus, se esvaziou por nós. Na mesma carta, ele pede a duas irmãs da igreja que se reconciliem. Humildade, para Paulo, não é teoria: é reconciliação prática.",
    situation:
      "Você sabe que passou do ponto: a palavra dura, a ironia, a porta batida. Mas pedir desculpa parece difícil demais — ainda mais quando o outro “também errou”. Então o silêncio vai ficando mais longo que o problema.",
    reflection: [
      "Pedir perdão não diminui ninguém; é a prova mais clara de força interior. Paulo pede que façamos as coisas “por humildade”, considerando os outros — e isso vale primeiro para dentro da nossa própria casa.",
      "Na prática, pedir perdão é trocar o “mas você também…” pelo “eu errei, me desculpa”. Quando alguém em casa tem a coragem de dizer isso primeiro, a parede cai dos dois lados. A reconciliação quase sempre espera um primeiro passo — que hoje pode ser o seu.",
    ],
    question:
      "O que eu fiz ou disse nos últimos dias que precisa de um pedido de perdão meu? O que me impede de dar esse passo ainda hoje?",
    action:
      "Antes de o dia terminar, procure a pessoa e diga, sem justificativas: “eu errei — me desculpa”. E espere em silêncio, sem completar a frase com um “mas”.",
    prayer:
      "Pai, quebra em mim o orgulho que atrasa a reconciliação. Dá-me humildade para reconhecer o meu erro, coragem para pedir perdão e graça para recomeçar a conversa. Amém.",
  },
  {
    day: 7,
    title: "Construindo uma rotina de paz",
    focus: "Levar os princípios para o cotidiano",
    verse: {
      text: "Não estejais inquietos por coisa alguma; antes as vossas petições sejam em tudo conhecidas diante de Deus pela oração e súplica, com ação de graças. E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos sentimentos em Cristo Jesus.",
      ref: "Filipenses 4:6-7",
    },
    also: {
      text: "E a paz de Deus, para a qual também fostes chamados em um corpo, domine em vossos corações; e sede agradecidos.",
      ref: "Colossenses 3:15",
    },
    context:
      "Da prisão, Paulo escreve aos filipenses uma das receitas mais conhecidas contra a inquietação: oração com gratidão. E promete algo precioso: a paz de Deus como guarda dos nossos corações — uma proteção diária, não um sentimento passageiro.",
    situation:
      "A semana foi boa: você respirou antes de responder, pediu perdão, conversou com calma. Mas agora a rotina volta — escola, trabalho, boletos, cansaço — e você se pergunta: “como eu mantenho isso?”",
    reflection: [
      "Paz não é um evento; é uma rotina. Paulo nos mostra o caminho: levar tudo a Deus em oração, com gratidão, antes de deixar a inquietação governar a casa.",
      "Aplicado ao cotidiano, isso significa criar pequenos rituais: agradecer juntos antes do jantar, conversar dez minutos sem telas, resolver as coisas antes de dormir, guardar um dia para descansar de verdade. São práticas simples que, repetidas, viram a cultura da casa. A paz de Deus guarda o coração de quem a pratica todos os dias.",
    ],
    question:
      "Das práticas destes sete dias, qual eu quero transformar em hábito da minha casa? Que momento do dia posso reservar para orar em família — nem que sejam cinco minutos?",
    action:
      "Escolha um pequeno ritual para começar ainda esta semana (por exemplo: oração de gratidão antes do jantar), combine com a família um dia e horário, e anote no calendário.",
    prayer:
      "Senhor, obrigado por esta semana. Que a Tua paz, que excede todo o entendimento, guarde o meu coração e a minha casa. Ajuda-me a transformar estes conselhos em rotina, estas atitudes em hábitos e esta semana em um novo começo. Amém.",
  },
];

export const CHECKLIST_ITEMS = [
  "Fiz minha reflexão.",
  "Identifiquei uma situação para aplicar.",
  "Respondi à pergunta.",
  "Escolhi uma pequena ação.",
  "Fiz a oração.",
];

export const CONCLUSION_LINES = [
  "Você não precisa mudar tudo de uma vez.",
  "Comece com uma resposta.",
  "Uma conversa.",
  "Uma atitude.",
  "Uma oração.",
  "Pequenas práticas podem se tornar novos hábitos de convivência.",
];

export const BONUS_ITEMS = [
  { icon: "book", title: "Releia os dias que mais falaram com você", text: "Volte aos conselhos que mais tocaram a sua semana e aprofunde cada um com calma." },
  { icon: "check", title: "Transforme o checklist em hábito", text: "Use a página de checklist para repetir os 5 passos todos os dias, até virarem rotina." },
  { icon: "sprout", title: "Explore os bônus da oferta", text: "Continue a jornada com os materiais complementares: momentos de oração em família e guias de conversa para o cotidiano." },
];

export const PAGES: { id: string; label: string; hint?: string }[] = [
  { id: "capa", label: "Capa" },
  { id: "introducao", label: "Introdução" },
  { id: "como-usar", label: "Como usar este devocional" },
  ...DAYS.map((d) => ({ id: `dia-${d.day}`, label: `Dia ${d.day} — ${d.title}`, hint: d.verse.ref })),
  { id: "checklist", label: "Checklist dos 7 dias" },
  { id: "conclusao", label: "Conclusão" },
];

export const THUMBS = [
  {
    concept: "Conceito 01",
    tag: "Tensão × serenidade",
    hook: "“Sua casa está perdendo a paz?”",
    image: IMAGES.thumb1,
    note: "Ambiente doméstico dividido entre tensão e serenidade, com a Bíblia aberta sobre a mesa como ponto de virada.",
  },
  {
    concept: "Conceito 02",
    tag: "O número domina",
    hook: "“7 conselhos para sua casa”",
    image: IMAGES.thumb2,
    note: "Bíblia aberta com ambiente familiar ao fundo; o número 7 grande como elemento visual dominante.",
  },
  {
    concept: "Conceito 03",
    tag: "Palavra × vida real",
    hook: "“Como aplicar Paulo no cotidiano”",
    image: IMAGES.thumb3,
    note: "Bíblia ao lado de objetos do dia a dia, sugerindo a ponte entre a Palavra e a vida real. Visual limpo.",
  },
];
