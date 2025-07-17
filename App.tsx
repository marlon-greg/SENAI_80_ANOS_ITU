import React, { useState, ReactNode } from "react";

// --- TYPE DEFINITIONS ---
interface TimelineItemData {
  year: string;
  title: string;
  summary: string;
  imageUrl: string;
}

interface MemorialData {
  name: string;
  contribution: string;
  imageUrl: string; // Adicione esta linha
}

// --- DATA CONSTANTS ---

const timelineData: TimelineItemData[] = [
  {
    year: "1921",
    title: "A Semente do Futuro",
    summary:
      "O comendador Joaquim Bernardo Borges deixa em testamento parte de sua fortuna à Irmandade da Santa Casa de Misericórdia, com a missão de criar uma escola profissionalizante gratuita para os jovens de Itu.",
    imageUrl: "/media/BORGES IBAO.jpg", // corrigido
  },
  {
    year: "1924",
    title: "Nasce o IBAO",
    summary:
      "A Irmandade inaugura o Instituto Borges de Artes e Ofícios (IBAO), materializando o sonho da educação profissional na cidade e fincando as raízes do que viria a ser o SENAI.",
    imageUrl: "/media/ibao.jpg", // corrigido
  },
  {
    year: "1946",
    title: "A Parceria Histórica",
    summary:
      "É firmado o acordo oficial entre o IBAO e o recém-criado SENAI. O SENAI passa a ministrar seus cursos nas instalações do Instituto, unindo a tradição local à metodologia de uma instituição nacional.",
    imageUrl: "/media/curso.jpg", // corrigido
  },
  {
    year: "Hoje",
    title: "Centro de Inovação",
    summary:
      'A Escola SENAI "Ítalo Bologna" se consolida como um polo de tecnologia, formando profissionais para a Indústria 4.0 e sendo referência em tecnologia assistiva.',
    imageUrl: "/media/SENAI_ITU.jpeg", // corrigido
  },
];

const ataPages: string[] = [
  "PÁGINA 1: Aprovada a proposta em virtude de já haver liberado, anteriormente, a demolição desse prédio e a reconstrução de um arranha-céu no mesmo local.\n\
Resolveu mais a Mesa, que se notifiquem todos os inquilinos dos prédios da Rua 15 de Novembro em São Paulo, para que desocupem suas dependências dentro do prazo de 90 dias, a contar de 1º de janeiro de 1947, com exceção da Companhia Calçados Clark, que tem contrato descrito e precisa terminar o seu contrato para deixar a casa.\n\
Os demais inquilinos serão notificados para o desocuparem, para demolição.\n\
O Irmão Provedor comunica ter sido assinado em 26 de janeiro de 1946 o acordo entre o Serviço Nacional de Aprendizagem Industrial (Senai), cujo documento ordenou que fosse transcrito na presente ata.\n\
Acordo entre o Serviço Nacional de Aprendizagem Industrial (Senai) e a Irmandade da Santa Casa de Misericórdia de Itu.\n\
Os signatários deste acordo, de um lado, o Serviço Nacional de Aprendizagem Industrial (Senai), representado pelo diretor do seu Departamento Regional em São Paulo, Engenheiro Roberto Mange, e de outro lado, a Irmandade da Santa Casa de Misericórdia de Itu (Iscmi), representada pela sua Mesa Administrativa, na pessoa do seu Provedor, senhor Antônio de Paula Leite Neto, tendo em vista a mais ampla difusão do ensino profissional a ser administrado gratuitamente a alunos de ambos os sexos, estabelecem o presente acordo, cujos termos mutuamente aceitam:",
  'PÁGINA 2: Cláusula 1ª - O Senai, observadas as disposições legais em vigor, manterá na cidade de Itu uma Escola de Aprendizagem Industrial, que funcionará no imóvel onde se acha instalado o Instituto Borges de Artes e Ofícios (Ibão), ocupando as dependências, pavilhões, pátios e áreas abaixo descritas, pertencentes ao referido imóvel, situado naquela cidade, à Praça Conde de Parnaíba, nº 111, do Patrimônio Borges, cedidos para aquele fim pela Iscmi mediante as condições estipuladas neste acordo.\n\
§ 1º - As dependências, pavilhões, pátios e áreas a que se refere esta cláusula são as seguintes, conforme consta da planta anexa a este acordo (anexo nº 1):\n\
a) Os locais assinalados na planta inclusa com os números 8, 9, 10, 11, 12 e 13 do andar térreo, abrangendo, no corpo frontal e principal do imóvel, as salas, corredor e instalações sanitárias situadas no lado esquerdo da construção;\n\
b) os pavilhões e instalações sanitárias assinalados na referida planta com os números 18, 19 e 20, inclusive a parte denominada "porão" e "depósito", que fica sob o pavilhão, aqui designado pelo nº 18;\n\
c) os pátios, inclusive áreas adjacentes, situados na metade à esquerda do terreno onde se localiza o Ibão, da frente ao fundo, compreendendo as benfeitorias e instalações neles existentes;',
  "PÁGINA 3: ...exclusive as áreas ocupadas atualmente pelo galinheiro e horta, separadas pelas grades de madeira e paredão existentes, conforme se acham assinalados no anexo nº 1.\n\
§ 2º - Na cessão das dependências, pavilhões, pátios e áreas citados neste artigo, estão compreendidas todas as instalações nelas existentes de força, luz, água e outras, inclusive telefones, máquinas, forjas, fornos de fundição, ferramentas, móveis de salas de aulas e de oficinas, etc., conforme se acha relacionado no anexo nº 3.\n\
Cláusula 2ª - A Escola Senai, objeto deste acordo, deverá iniciar seus cursos em julho de 1946.\n\
§ 1º - Os cursos a que se refere esta cláusula serão de trabalhos em metal, madeira e de eletricidade.\n\
§ 2º - Quanto ao funcionamento e modalidade, esses cursos, bem como os demais que forem mantidos pelo Senai em virtude deste acordo, serão em tudo conforme os existentes nas Escolas Senai, observadas as disposições legais e regulamentares no que forem aplicáveis, e as possibilidades locais.\n\
§ 3º - Conforme as possibilidades, a Escola Senai instalará cursos extraordinários noturnos para jovens e adultos do sexo masculino.\n\
§ 4º - Além dos cursos mencionados nesta cláusula, poderão ser instalados outros que se tornarem necessários, inclusive femininos, a juízo do Senai.\n\
Cláusula 3ª - Em compensação por ceder a Iscmi ao Senai, gratuitamente, os locais discriminados neste acordo, o Senai compromete-se a:",
  "PÁGINA 4: ...manter, às suas expensas, anexos à sua Escola, os seguintes cursos para o preparo profissional de menores do sexo masculino, não empregados na indústria, encaminhados pela Iscmi, e mediante o processo de seleção excepcional para menores que procedem do Ibão:\n\
a) Cursos de Aprendizes de Ofício, para menores de 12 a 16 anos de idade.\n\
b) Cursos de Aspirantes à Indústria, com um currículo igual aos Cursos de Aprendizes de Ofício do Senai, para menores de 14 a 18 anos de idade.\n\
c) Curso Vocacional (C.V.) com oficinas, que será organizado no decorrer deste exercício escolar e entrará em funcionamento regular no princípio de 1947.\n\
Cláusula 4ª - Em cada ano letivo, serão reservadas no máximo 40 (quarenta) vagas aos alunos encaminhados pela Iscmi para ingresso nos cursos mencionados na cláusula 3ª, procedendo-se à distribuição desses alunos conforme a capacidade de cada um daqueles cursos.\n\
§ 1º - Os lugares ocupados pelos alunos repetentes serão deduzidos das quarenta vagas a que se refere esta cláusula.\n\
§ 2º - Aos Aspirantes à Indústria, o Senai procurará proporcionar, quando possível e a seu juízo, uma pequena remuneração.\n\
§ 3º - Os Cursos de Aspirantes à Indústria serão constituídos simultaneamente com os de Aprendizes de Ofício do Senai.",
  "PÁGINA 5: Cláusula 5ª - Correrá inteiramente a cargo e sob responsabilidade do Senai:\n\
a) satisfazer todos os encargos e obrigações legais, relativos ao seu pessoal administrativo e docente, bem como a todos os alunos, inclusive os encaminhados pela Iscmi, para os Cursos de Aspirantes à Indústria e Vocacional;\n\
b) o seguro contra fogo das dependências e pavilhões cedidos e o dos maquinários, móveis, petrechos, etc., relacionados no anexo nº 3.\n\
Cláusula 6ª - As despesas de consumo de água, luz e força nos locais ocupados pelo Senai correrão por conta deste.\n\
§ 1º - As despesas de água, luz e força, não sendo possível a colocação de serviços próprios com medidores exclusivos para o Senai, serão pagas por este, mediante cálculo aproximado ou na forma que for estabelecida.\n\
§ 2º - A Iscmi facultará à Escola Senai o uso exclusivo do telefone cedido e a instalação de extensões do mesmo, correndo as despesas de assinaturas e outras decorrentes desse serviço por conta do Senai.\n\
Cláusula 7ª - Relativamente às dependências, pavilhões, pátios e áreas a que se refere a cláusula 1ª e seus parágrafos deste acordo, caberá ao Senai:\n\
a) a sua guarda, custeio e conservação, inclusive das instalações de água, luz e força, salvo as obras que importarem na segurança do prédio, ficando compreendidos nestas obrigações o que for relativo ao maquinário, ferramental, móveis de salas de aulas e de oficinas e demais petrechos;",
  "PÁGINA 6: ...referidos no parágrafo 2º da cláusula 1ª e constantes do anexo nº 3 deste acordo;\n\
b) proceder às obras, inclusive as instalações elétricas e outras que se tornarem necessárias para o funcionamento da Escola Senai, dos Cursos de Aspirantes à Indústria e do Curso Vocacional;\n\
c) construir em posição simétrica com relação ao prédio um campo para 'bola ao cesto', para uso do Ibão, semelhante ao já existente que, em virtude deste acordo, passará a ser de uso exclusivo da Escola Senai;\n\
d) desocupá-los quando findo ou rescindido este acordo, deixando-os em bom estado, salvo os casos de desgaste pelo tempo e pelo uso, com as benfeitorias que forem feitas, independentes estas de qualquer indenização por parte da Iscmi.\n\
Cláusula 8ª - Quando findo ou rescindido este acordo, as máquinas, mobiliário e instalações constantes da relação do anexo nº 3, cedidos para utilização do Senai, deverão ser por este repostos, como demonstra a inclusa planta (anexo nº 2), nos locais onde atualmente se acham, em bom estado, salvo os casos de desgaste ou de consumo pelo uso comum.\n\
§ 1º - Os utensílios, ferramentas e demais petrechos constantes da referida relação do anexo nº 3, igualmente cedidos para uso na Escola Senai, deverão ser devolvidos quando findo ou rescindido este acordo, ressalvados os casos de desgaste ou de consumo pelo uso comum.\n\
§ 2º - As máquinas, mobiliário e instalações existentes no",
  "PÁGINA 7:...pavilhão designado sob o nº 20 na planta (anexo nº 1), e não incluídos na relação do anexo nº 3, serão retirados daquele pavilhão e entregues à Iscmi, e repostos pelo Senai, quando findo ou rescindido este acordo, nos respectivos lugares, como demonstra a planta (anexo nº 2).\n\
Cláusula 9ª - À Iscmi caberá:\n\
a) ceder gratuitamente ao Senai, durante a vigência deste acordo, as dependências, pavilhões, pátios, áreas, instalações, etc., referidos na cláusula 1ª e seus parágrafos;\n\
b) ceder à Escola Senai, quando necessário e mediante prévio entendimento entre os respectivos diretores da Escola Senai e do Ibão, o salão de teatro и o campo de atletismo;\n\
c) facultar o livre ingresso e permanência do pessoal docente, administrativo e discente do Senai nos locais cedidos por este acordo, nos dias e horários de trabalho na Escola Senai e cursos anexos e, eventualmente, nos feriados e domingos;\n\
d) permitir a afixação de placas e tabuletas indicativas da Escola Senai e de seus serviços, interna e externamente, nos locais cedidos, bem como de cartazes e dísticos de caráter educativo.\n\
Cláusula 10ª - Os artefatos executados pelos alunos da Escola Senai e dos cursos anexos pertencerão ao Senai, que ajuizará sobre sua aplicação.\n\
Cláusula 11ª - Desde a data da assinatura deste acordo, ficará o Senai com o direito de proceder às instalações e adaptações necessárias ao funcionamento de seus cursos, ocupando os locais previstos neste instrumento, sem prejuízo das atuais atividades do Ibão.\n\
Cláusula 12ª - O presente acordo será válido por 4 (quatro) anos, a partir da data da sua assinatura.\n\
Cláusula 13ª - O não cumprimento das obrigações estipuladas neste acordo será considerado justa causa para sua rescisão, a qualquer tempo, e a parte que der motivo a tal rescisão indenizará a outra com a importância de Cr$ 20.000,00 (vinte mil cruzeiros).\n\
Cláusula 14ª - Será considerada justa causa para a rescisão deste acordo, a qualquer tempo, independente de indenizações, a superveniência de quaisquer disposições ou motivos legais que impeçam ou venham a impedir o funcionamento da Escola Senai nas dependências e pavilhões ora cedidos.\n\
Cláusula 15ª - Para os efeitos fiscais, tem este acordo o valor de Cr$ 70.000,00 (setenta mil cruzeiros).\n\
São Paulo, 26 de janeiro de 1946.\n\
Serviço Nacional de Aprendizagem Industrial - Senai\n\
Departamento Regional de São Paulo\n\
(a) R. Mange, Diretor\n\
Pela Irmandade da Santa Casa de Misericórdia de Itu\n\
(a) Antônio de Paula Leite Netto, Provedor\n\
Testemunhas:\n\
(a) Paulo C. Pacheco e Silva\n\
(a) Vicente de Paula Leite\n\
Nada mais havendo a tratar, foi encerrada a reunião.",
  "PÁGINA 9: Pela qual, para constar, eu, João B. Motta Pacheco, secretário, lavrei esta ata que vai por mim e por todos assinada.\n\
Antônio de Paula Leite Netto\n\
João B. Motta Pacheco\n\
Waldomiro Correia de Camargo\n\
Lauro Alves\n\
Francisco de Paula Leite de Barros\n\
Ata da reunião da Mesa Administrativa da Santa Casa de Misericórdia de Itu, em 9 de agosto de 1946.\n\
Aos nove dias do mês de agosto de mil novecentos e quarenta e seis, às 20 horas, no palacete sede do Instituto Borges de Artes e Ofícios, sob a presidência do Irmão Provedor Dr. Antônio de Paula Leite Netto, reuniu-se a Mesa Administrativa com a presença dos seguintes Irmãos: Frei Joaquim Medeiros, Waldomiro Correia de Camargo, Joaquim Ferreira Lisboa, Lauro Alves, Herculano de Toledo Prado, Vicente Gomes, Antônio Naif Neto, Joaquim Leite, João Pacheco e Silva e Duas Aranha.\n\
Havendo número legal, o Irmão Provedor declara aberta a sessão e passa a comunicar o falecimento do Irmão Mesário Frei Joaquim Medeiros.\n\
",
];

const leadershipTeam = [
  {
    role: "Diretor de Unidade de Formação Profissional",
    name: "Helvecio Siqueira de Oliveira",
  },
  {
    role: "Coordenador Administrativo e Financeiro",
    name: "Kelen Fernanda de Oliveira",
  },
  {
    role: "Coordenador de Atividades Técnicas",
    name: "Alexandre Rodrigues Matias Rigoni",
  },
  {
    role: "Coordenador de Atividades Pedagógicas",
    name: "Julio Cesar Torres Martins",
  },
  {
    role: "Orientador de Prática Profissional",
    name: "Fabricio Luis Dos Santos",
  },
  {
    role: "Orientador de Prática Profissional",
    name: "Cleber Alexander Pereira",
  },
  {
    role: "Orientador de Prática Profissional",
    name: "Luciano Garcia Rosa",
  },
  {
    role: "Orientador de Prática Profissional",
    name: "Joao Vitor Augusto",
  },
];

const memorialData: MemorialData[] = [
  {
    name: "Comendador Joaquim Bernardo Borges",
    contribution:
      "O visionário cujo legado e ato de filantropia deram o passo inicial para a educação profissional em Itu.",
    imageUrl: "/media/iscm-ibao-100-anos-07.jpg", // corrigido
  },
  {
    name: "Roberto Simonsen",
    contribution:
      "Como presidente da FIESP e líder da indústria nacional, foi o principal idealizador e articulador político que liderou a criação do SENAI, sendo a figura fundamental para a sua fundação em 1942.",
    imageUrl: "/media/ROBERTO_SIMONSEN.jpg", // corrigido
  },
  {
    name: "Engenheiro Roberto Mange",
    contribution:
      "Como Diretor Regional do SENAI-SP na época, foi a figura chave do lado do SENAI que assinou e viabilizou o acordo histórico de 1946.",
    imageUrl: "/media/ROBERTO_MANGE.jpg", // corrigido
  },
  {
    name: "Ítalo Bologna",
    contribution:
      "Como Diretor Regional do SENAI-SP e, posteriormente, Diretor do Departamento Nacional, foi uma figura central na expansão e consolidação do SENAI, dando continuidade ao legado de Roberto Mange com a criação de novas escolas.",
    imageUrl: "/media/ITALO_BOLOGNA.jpg", // corrigido
  },
];

// --- HELPER & SECTION COMPONENTS ---

// Accordion Component for the Founder's Document
const Accordion: React.FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-600 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-slate-700/50 hover:bg-slate-700 text-left text-lg font-semibold text-white flex justify-between items-center transition-colors duration-300"
      >
        <span>{title}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-6 bg-slate-800/50">{children}</div>
        </div>
      </div>
    </div>
  );
};

// Timeline Item Component
const TimelineItem: React.FC<{ data: TimelineItemData; reverse?: boolean }> = ({
  data,
  reverse = false,
}) => {
  const { year, title, summary, imageUrl } = data;

  const contentOrder = reverse ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div className={`flex ${contentOrder} items-center my-12`}>
      <div className="md:w-1/2 p-4 md:p-8">
        <div className="flex items-baseline space-x-4">
          <span className="text-4xl font-bold text-red-500">{year}</span>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="mt-4 text-slate-300 leading-relaxed">{summary}</p>
      </div>
      <div className="md:w-1/2 p-4">
        <img
          src={imageUrl}
          alt={title}
          className="rounded-lg shadow-2xl object-cover w-full h-64 md:h-80"
        />
      </div>
    </div>
  );
};

// Memorial Card Component
const MemorialCard: React.FC<{ data: MemorialData }> = ({ data }) => (
  <div className="bg-slate-800 p-6 rounded-lg shadow-lg h-full transition-transform transform hover:-translate-y-2 flex flex-col items-center">
    <img
      src={data.imageUrl}
      alt={data.name}
      className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-red-500 shadow"
    />
    <h4 className="text-xl font-bold text-red-500 mb-2 text-center">
      {data.name}
    </h4>
    <p className="text-slate-300 text-center">{data.contribution}</p>
  </div>
);

// Section Wrapper
interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className }) => (
  <section id={id} className={`py-16 sm:py-24 w-full ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

// Section Title
const SectionTitle: React.FC<{ children: ReactNode }> = ({ children }) => (
  <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
    {children}
  </h2>
);

// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-200 font-sans leading-normal tracking-tight">
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-sm shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center space-x-6 text-sm sm:text-base">
              <a
                href="#intro"
                className="text-slate-300 hover:text-white transition-colors duration-300"
              >
                Introdução
              </a>
              <a
                href="#timeline"
                className="text-slate-300 hover:text-white transition-colors duration-300"
              >
                Linha do Tempo
              </a>
              <a
                href="#document"
                className="text-slate-300 hover:text-white transition-colors duration-300"
              >
                Ata de 1946
              </a>
              <a
                href="#today"
                className="text-slate-300 hover:text-white transition-colors duration-300"
              >
                Hoje
              </a>
              <a
                href="#memorial"
                className="text-slate-300 hover:text-white transition-colors duration-300"
              >
                Memorial
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero/Title Section */}
        <div
          className="relative text-center py-24 sm:py-32 px-4 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(2, 6, 23, 0.7), rgba(15, 23, 42, 1)), url('/media/SENAI ITU - DRONE 1X1 - 2.png')", // corrigido
          }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            SENAI de Itu: "Ítalo Bologna"{" "}
            <span className="block text-red-500">Do IBAO para à Indústria</span>
          </h1>
        </div>

        {/* Introduction Section */}
        <Section id="intro">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              A história do SENAI de Itu é uma jornada que entrelaça
              filantropia, visão de futuro e compromisso com o desenvolvimento.
              Nascida do gesto altruísta do comendador Joaquim Bernardo Borges e
              nutrida pela Irmandade da Santa Casa de Misericórdia, a semente da
              educação profissional foi plantada com o Instituto Borges de Artes
              e Ofícios (IBAO). Em 1946, essa semente germinou em uma parceria
              histórica com o recém-criado SENAI, florescendo na moderna e
              inovadora instituição que hoje é um pilar para o desenvolvimento
              industrial e social de Itu e região, capacitando gerações para os
              desafios do amanhã.
            </p>
          </div>
        </Section>

        {/* Timeline Section */}
        <Section id="timeline" className="bg-slate-800/50">
          <SectionTitle>Linha do Tempo Histórica</SectionTitle>
          <div className="relative">
            <div
              className="absolute left-1/2 h-full w-1 border-l-2 border-dashed border-slate-600 hidden md:block"
              style={{ transform: "translateX(-1px)" }}
            ></div>
            {timelineData.map((item, index) => (
              <TimelineItem
                key={item.year}
                data={item}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </Section>

        {/* Founder's Document Section */}
        <Section id="document">
          <SectionTitle>O Documento Fundador - A Ata de 1946</SectionTitle>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-slate-300 mb-8">
              A seguir, um tesouro histórico que formalizou a parceria e definiu
              o futuro da educação profissional em Itu. Este documento é a pedra
              fundamental da nossa instituição, representando o momento exato em
              que a tradição local e a expertise nacional se uniram por um bem
              maior.
            </p>
            <Accordion title="Leia na Íntegra: A Ata de 26 de Janeiro de 1946">
              <div className="space-y-4 text-slate-300">
                {ataPages.map((page, index) => (
                  <div
                    key={index}
                    className="border-b border-slate-700 pb-2 last:border-b-0"
                  >
                    <strong className="text-red-400">{`PÁGINA ${
                      index + 1
                    }: `}</strong>
                    {page
                      .substring(page.indexOf(":") + 2)
                      .split("\n")
                      .map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                  </div>
                ))}
              </div>
            </Accordion>
          </div>
        </Section>

        {/* SENAI Today Section */}
        <Section id="today" className="bg-slate-800/50">
          <SectionTitle>
            O SENAI de Itu Hoje: Conectando Passado e Futuro
          </SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Nossa Localização e contato:
              </h3>
              <p className="text-slate-300 mb-4">
                Escola SENAI "Ítalo Bologna"
                <br />
                Avenida Goiás, 139 - Bairro Brasil
                <br />
                Itu - SP, CEP 13301-400
                <br />
                Telefone: (11) 2396-1999
                <br />
                Site:{" "}
                <a href="https://sp.senai.br/unidade/itu/">
                  https://sp.senai.br/unidade/itu/
                </a>
              </p>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src="https://maps.google.com/maps?q=Escola%20SENAI%20%22%C3%8Dtalo%20Bologna%22,%20Avenida%20Goi%C3%A1s,%20139%20-%20Bairro%20Brasil,%20Itu%20-%20SP,%20CEP%2013301-400&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  title="Localização do SENAI de Itu"
                ></iframe>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Nossa Liderança:
              </h3>
              <div className="space-y-3">
                {leadershipTeam.map((member) => (
                  <div
                    key={member.role}
                    className="bg-slate-800 p-4 rounded-lg"
                  >
                    <p className="font-semibold text-red-400">{member.role}</p>
                    <p className="text-slate-200">{member.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Memorial Section */}
        <Section id="memorial">
          <SectionTitle>Memorial - Pilares da Nossa História</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {memorialData.map((figure) => (
              <MemorialCard key={figure.name} data={figure} />
            ))}
          </div>
        </Section>
      </main>

      <footer className="bg-slate-950 text-center py-6">
        <p className="text-slate-400">
          &copy; {new Date().getFullYear()} SENAI de Itu. Todos os direitos
          reservados.
        </p>
        <p className="text-sm text-slate-500 mt-1">
          Uma homenagem à nossa história e ao nosso futuro.
        </p>
      </footer>
    </div>
  );
};

export default App;
