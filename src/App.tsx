import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Heart, 
  Shield, 
  Users, 
  Calendar, 
  Download,
  CheckCircle,
  AlertTriangle,
  XCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Stethoscope,
  Activity,
  UserCheck,
  Syringe,
  Building,
  FileText,
  HeartPulse,
  Droplet
} from 'lucide-react';





function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('recommended'); // 'recommended' as default active tab

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const navItems = [
    { id: 'boas-vindas', label: 'Início' },
    { id: 'o-que-e-drc', label: 'O que é DRC?' },
    { id: 'imunidade', label: 'Imunidade' },
    { id: 'protecao-renal', label: 'Proteção Renal' },
    { id: 'guia-vacinas', label: 'Guia de Vacinas' },
    { id: 'cuidados', label: 'Cuidados' },
    { id: 'planejamento', label: 'Planejamento' },
    { id: 'acesso-sus', label: 'Acesso pelo SUS' },
    { id: 'baixar-folder', label: 'Baixe o Folder' }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Image Background */}
      <div className="fixed inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="/background.webp"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>

      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Stethoscope className="w-8 h-8 text-blue-600 mr-3" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t">
              <div className="py-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        {/* Section 1: Welcome */}
        <section id="boas-vindas" className="py-16 bg-blue-600 bg-opacity-90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Vacinação: A sua grande aliada na jornada com a Doença Renal Crônica!
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Entenda por que se vacinar é a melhor maneira de se manter seguro e saudável durante o tratamento.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      width="100%" 
                      height="315" 
                      src="https://www.youtube.com/embed/P4D8V1FGFQ4?si=EsRWSOncBkxYT9go" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-white text-lg mb-4">Ouça o podcast sobre o tema</p>
                  <audio 
                    controls 
                    className="w-full bg-white rounded-lg shadow-lg"
                    src="podcast.mp3"
                  >
                    Seu navegador não suporta o elemento de áudio.
                  </audio>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Understanding CKD */}
        <section id="o-que-e-drc" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Activity className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              O que é a Doença Renal Crônica (DRC)?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              É uma condição onde os rins apresentam anomalias em sua estrutura ou funcionamento por mais de três meses, afetando a saúde de forma geral. Quando a DRC avança para seu estágio final, a função renal se torna insuficiente para manter o equilíbrio do corpo. Nesse ponto, é necessária a <strong>Terapia Renal Substitutiva (TRS)</strong>, e a hemodiálise é uma das formas mais comuns de tratamento. Pacientes em hemodiálise são especialmente vulneráveis, e a prevenção de infecções através da vacinação é uma prioridade.
            </p>
          </div>
        </section>

        <div className="bg-white py-12 w-full z-20 opacity-100">
          <div className="h-px bg-gray-300 max-w-4xl mx-auto"></div>
        </div>

        {/* Section 3: Immunity */}
        <section id="imunidade" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Sua Imunidade Precisa de um Reforço Extra!
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Pacientes em hemodiálise têm uma suscetibilidade muito maior a infecções, que são uma das principais causas de complicações e mortalidade nesse grupo. Isso acontece por dois motivos principais:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg border border-blue-200">
                <Shield className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Disfunção Imunológica</h3>
                  <p className="text-gray-600">A uremia (acúmulo de toxinas no sangue), que ocorre devido a deficiência de filtração e eliminação renal, causa uma deficiência nas respostas de defesa do corpo, o que faz com que esses paciente fiquem mais vulnerávieis a infecções.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg border border-blue-200">
                <Activity className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Exposição no Tratamento</h3>
                  <p className="text-gray-600">O próprio processo de hemodiálise aumenta o risco de infecções devido às visitas frequentes a centros de saúde, ao uso de acessos vasculares (cateteres e fístulas) e ao contato próximo com outros pacientes.</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 text-center">
              Diante desse cenário, a vacinação se torna a estratégia mais eficaz para reduzir a chance e a gravidade de doenças infecciosas, protegendo você contra complicações sérias, hospitalizações e até mesmo o óbito.
            </p>
          </div>
        </section>

        {/* Section 4: Kidney Protection */}
        <section id="protecao-renal" className="py-16 bg-blue-600 bg-opacity-90">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Heart className="w-12 h-12 text-white mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-8">
                Seus rins precisam ser protegidos!
              </h2>
              <p className="text-lg text-blue-100 mb-6">
                A vacinação não apenas previne infecções, mas também protege diretamente a função renal que você ainda tem. Os rins de um paciente com DRC são muito vulneráveis a novos problemas. Uma infecção grave, como uma pneumonia, pode causar alterações perigosas no corpo como:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4 bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <HeartPulse className="w-8 h-8 text-yellow-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white">Queda da pressão arterial (hipotensão).</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <Droplet className="w-8 h-8 text-yellow-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white">Desidratação e intensa resposta inflamatória.</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-blue-100 text-center">
              Esses fatores reduzem o fluxo de sangue para os rins, podendo causar uma Injúria Renal Aguda (IRA). Em um rim que já funciona com capacidade limitada, uma IRA pode ser devastadora, acelerando a progressão da doença e antecipando a necessidade de diálise. Portanto, ao se vacinar, você evita essa cascata de eventos e ajuda a preservar sua função renal por mais tempo.
            </p>
          </div>
        </section>

        {/* Section 5: Vaccine Guide */}
        <section id="guia-vacinas" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Syringe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Guia de Vacinas: O que Tomar e o que Evitar
            </h2>
            
            <div className="flex space-x-1 mb-8 border-b border-gray-200">
              <button
                className={`py-2 px-4 text-sm font-bold ${activeTab === 'recommended' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('recommended')}
              >
                Vacinas Recomendadas
              </button>
              <button
                className={`py-2 px-4 text-sm font-bold ${activeTab === 'evaluate' ? 'border-b-2 border-yellow-600 text-yellow-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('evaluate')}
              >
                Vacinas a Avaliar
              </button>
              <button
                className={`py-2 px-4 text-sm font-bold ${activeTab === 'contraindicated' ? 'border-b-2 border-red-600 text-red-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('contraindicated')}
              >
                Vacinas Contraindicadas
              </button>
            </div>

            <div>
              {activeTab === 'recommended' && (
                <div className="space-y-4">
                  <p className="mb-4 font-medium text-gray-600">Além das vacinas de rotina do adulto, estas são as principais recomendações:</p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-400 pl-4">
                      <h4 className="font-semibold text-green-700">Hepatite B</h4>
                      <p className="text-gray-600">Essencial devido ao risco de exposição no ambiente de diálise. O esquema é especial, com quatro doses e o dobro da dosagem padrão. A verificação da resposta com exame de sangue é obrigatória.</p>
                    </div>
                    
                    <div className="border-l-4 border-green-400 pl-4">
                      <h4 className="font-semibold text-green-700">Influenza (Gripe)</h4>
                      <p className="text-gray-600">Vacinação anual, fortemente recomendada para prevenir complicações respiratórias graves.</p>
                    </div>
                    
                    <div className="border-l-4 border-green-400 pl-4">
                      <h4 className="font-semibold text-green-700">Pneumocócica</h4>
                      <p className="text-gray-600">Protege contra a doença pneumocócica invasiva. O esquema sequencial é o mais indicado (VPC13 seguida da VPP23), com um reforço da VPP23 após cinco anos.</p>
                    </div>
                    
                    <div className="border-l-4 border-green-400 pl-4">
                      <h4 className="font-semibold text-green-700">COVID-19</h4>
                      <p className="text-gray-600">Pacientes com DRC são grupo prioritário e devem seguir o esquema vacinal e as doses de reforço recomendadas pelo Programa Nacional de Imunizações (PNI).</p>
                    </div>
                    
                    <div className="border-l-4 border-green-400 pl-4">
                      <h4 className="font-semibold text-green-700">Difteria, Tétano e Coqueluche (dTpa)</h4>
                      <p className="text-gray-600">Manter a proteção contra tétano e difteria, com reforço a cada 10 anos. Pelo menos uma dessas doses deve ser com a vacina dTpa, que também protege contra a coqueluche.</p>
                    </div>
                    
                    <div className="border-l-4 border-green-400 pl-4">
                      <h4 className="font-semibold text-green-700">Haemophilus influenzae tipo b (Hib)</h4>
                      <p className="text-gray-600">Recomendada especialmente para candidatos a transplante renal que não foram vacinados na infância.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'evaluate' && (
                <div className="space-y-4">
                  <p className="mb-4 font-medium text-gray-600">Em situações muito específicas, como em pacientes com comprometimento imune leve e antes de um transplante renal, o uso de algumas vacinas de vírus vivo pode ser considerado pelo médico após uma avaliação rigorosa de risco-benefício. São elas:</p>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-semibold text-yellow-700">Tríplice Viral (Sarampo, Caxumba e Rubéola)</h4>
                    <p className="text-gray-600">Vacina de vírus vivo. Avaliar com seu médico.</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-semibold text-yellow-700">Varicela</h4>
                    <p className="text-gray-600">Vacina de vírus vivo. Avaliar com seu médico.</p>
                  </div>
                </div>
              )}

              {activeTab === 'contraindicated' && (
                <div className="space-y-4">
                  <p className="mb-4 font-medium text-gray-600">Como regra geral, vacinas feitas com vírus ou bactérias vivos atenuados são contraindicadas. O sistema imune pode não ser capaz de controlar a replicação do agente da vacina, o que poderia causar a própria doença que se deseja evitar. Evite as seguintes vacinas:</p>
                  <div className="border-l-4 border-red-400 pl-4">
                    <h4 className="font-semibold text-red-700">Tríplice Viral (Sarampo, Caxumba e Rubéola)</h4>
                    <p className="text-gray-600">Vacina de vírus vivo atenuado. Contraindicada.</p>
                  </div>
                  
                  <div className="border-l-4 border-red-400 pl-4">
                    <h4 className="font-semibold text-red-700">Varicela</h4>
                    <p className="text-gray-600">Vacina de vírus vivo atenuado. Contraindicada.</p>
                  </div>
                  
                  <div className="border-l-4 border-red-400 pl-4">
                    <h4 className="font-semibold text-red-700">Febre Amarela</h4>
                    <p className="text-gray-600">Vacina de vírus vivo atenuado. Contraindicada.</p>
                  </div>
                  
                  <div className="border-l-4 border-red-400 pl-4">
                    <h4 className="font-semibold text-red-700">Poliomielite oral (VOP - a gotinha)</h4>
                    <p className="text-gray-600">Vacina de vírus vivo atenuado. Contraindicada.</p>
                  </div>
                  
                  <div className="border-l-4 border-red-400 pl-4">
                    <h4 className="font-semibold text-red-700">BCG</h4>
                    <p className="text-gray-600">Vacina de bactérias vivas atenuadas. Contraindicada.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="bg-white py-12 w-full z-20 opacity-100">
          <div className="h-px bg-gray-300 max-w-4xl mx-auto"></div>
        </div>

        {/* Section 6: Vaccination Care */}
        <section id="cuidados" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Stethoscope className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              O Cuidado da Vacinação: O que é Diferente para Você?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 text-center">
              A resposta do seu corpo às vacinas pode ser um pouco diferente da população em geral. A imunodeficiência causada pela uremia pode resultar em uma produção menor de anticorpos e uma queda mais rápida da proteção. Por isso, algumas estratégias são adaptadas para garantir a máxima eficácia:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Doses Aumentadas</h3>
                    <p className="text-gray-600">Para algumas vacinas, como a da Hepatite B, a dose recomendada é o dobro da dose padrão para adultos.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-3">
                  <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Esquemas Diferenciados</h3>
                    <p className="text-gray-600">A vacina da Hepatite B, por exemplo, pode exigir um esquema com mais aplicações para garantir uma boa resposta.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-3">
                  <Activity className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Monitoramento da Resposta</h3>
                    <p className="text-gray-600">Após tomar a vacina da Hepatite B, é fundamental fazer um exame de sangue (sorologia) para confirmar que seu corpo produziu anticorpos suficientes.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Doses de Reforço</h3>
                    <p className="text-gray-600">Vacinas como a pneumocócica exigem doses de reforço em intervalos específicos para manter a proteção ao longo do tempo.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg md:col-span-2 border border-blue-200">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Estratégia "Casulo"</h3>
                    <p className="text-gray-600">Vacinar familiares e pessoas que moram com você é um cuidado extra muito importante, pois ajuda a reduzir a circulação de vírus e bactérias em casa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Planning */}
        <section id="planejamento" className="py-16 bg-blue-600 bg-opacity-90">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Calendar className="w-12 h-12 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Planejando sua Vacinação: Qual a Hora Certa?
            </h2>
            
            <p className="text-lg text-blue-100 mb-8 text-center">
              O planejamento é crucial. O ideal é que seu calendário vacinal seja atualizado o mais cedo possível, de preferência antes de iniciar a hemodiálise ou, para quem é candidato a um transplante, antes da cirurgia. A razão é simples: a resposta do seu sistema imunológico às vacinas tende a ser mais forte nos estágios iniciais da DRC e antes do início do uso de medicamentos imunossupressores, que são necessários após um transplante. Depois do transplante, o uso desses medicamentos contraindica o uso de vacinas de agentes vivos atenuados. Por isso, se houver indicação, essas vacinas devem ser administradas com no mínimo quatro semanas de antecedência ao procedimento.
            </p>
            
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <p className="text-yellow-800 font-medium">
                  Sempre converse com sua equipe de nefrologia antes de se vacinar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: SUS Access */}
        <section id="acesso-sus" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Acesso pelo SUS: As Vacinas São Gratuitas?
            </h2>
            
            <p className="text-lg text-gray-600 text-center">
              Sim! O Sistema Único de Saúde (SUS) garante o acesso gratuito às vacinas especiais recomendadas para pacientes em hemodiálise. Esse acesso é feito através dos Centros de Referência para Imunobiológicos Especiais (CRIE). Os CRIE são unidades especializadas criadas para atender pessoas com condições de saúde específicas que precisam de esquemas de vacinação diferenciados. A nefropatia crônica e a hemodiálise são condições que garantem o atendimento nesses centros. Além disso, campanhas anuais, como a da gripe e a da COVID-19, incluem rotineiramente pessoas com DRC nos grupos prioritários, facilitando o acesso nas Unidades Básicas de Saúde.
            </p>
          </div>
        </section>

        <div className="bg-white py-12 w-full z-20 opacity-100">
          <div className="h-px bg-gray-300 max-w-4xl mx-auto"></div>
        </div>

        {/* Section 9: Download Folder */}
        <section id="baixar-folder" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Baixe o folder e Ajude na Divulgação!
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Baixe o folder sobre vacinação para pacientes em hemodiálise, imprima e distribua. Assim você contribui para a disseminação de conhecimento que pode proteger vidas, fortalecendo a rede de apoio e conscientização em saúde para quem mais precisa.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 w-3/4 mx-auto">
                  <img src="/folder.jpg" alt="Folder sobre vacinação para pacientes em hemodiálise" className="w-full h-auto object-cover" />
                </div>
                <div className="w-3/4 mx-auto">
                  <a
                    href="/folder.pdf"
                    download
                    className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: References */}
        <section id="referencias" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Referências Bibliográficas
            </h2>
            
            <div className="space-y-4 text-lg text-gray-600">
              <p>BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde e Ambiente. Departamento do Programa Nacional de Imunizações. <strong>Calendário Nacional de Vacinação ano 2025 ciclo de vida adulto (25 anos a 59 anos de idade).</strong> Brasília, DF: Ministério da Saúde, 2025.</p>
              
              <p>BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde e Ambiente. Departamento do Programa Nacional de Imunizações. <strong>Estratégia de vacinação contra a covid-19: 2ª edição.</strong> Brasília, DF: Ministério da Saúde, 2024.</p>
              
              <p>BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde e Ambiente. Departamento de Imunizações e Doenças Imunopreveníveis. <strong>Manual dos Centros de Referência para Imunobiológicos Especiais: 6ª edição.</strong> Brasília, DF: Ministério da Saúde, 2023.</p>
              
              <p>LEVEY, A. S.; INKER, L. A. <strong>Definition and staging of chronic kidney disease in adults.</strong> UpToDate, 2025. Disponível em: https://www.uptodate.com. Acesso em 06 de setembro de 2025.</p>
              
              <p>PALEVSKY, P. M.; RADHAKRISHNAN, J. <strong>COVID-19: Issues related to end-stage kidney disease.</strong> UpToDate, 2025. Disponível em: https://www.uptodate.com. Acesso em 06 de setembro de 2025.</p>
              
              <p>PUSPITASARI, M. et al. <strong>Outcomes of vaccinations against respiratory diseases in patients with end-stage renal disease undergoing hemodialysis: A systematic review and meta-analysis.</strong> PLoS ONE, v. 18, n. 2, p. e0281160, fev. 2023.</p>
              
              <p>SOCIEDADE BRASILEIRA DE IMUNIZAÇÕES. <strong>Calendários de vacinação SBIm pacientes especiais 2023-2024.</strong> São Paulo: SBIm, 2023.</p>
              
              <p>WHITAKER, K. <strong>Immunizations in patients with end-stage kidney disease.</strong> UpToDate, 2025. Disponível em: https://www.uptodate.com. Acesso em 06 de setembro de 2025.</p>
            </div>
          </div>
        </section>

        <div className="bg-white py-12 w-full z-20 opacity-100">
          <div className="h-px bg-gray-300 max-w-4xl mx-auto"></div>
        </div>

        {/* Section 11: Useful Links */}
        <section id="links-uteis" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Links Úteis
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a
                href="https://www.gov.br/saude/pt-br/vacinacao/grupos-especiais"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 rounded-lg p-6 text-center transition-colors group no-underline"
              >
                <UserCheck className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2 no-underline">Vacinas para grupos especiais</h3>
                <ExternalLink className="w-4 h-4 text-white group-hover:text-white mx-auto" />
              </a>
              
              <a
                href="https://www.gov.br/saude/pt-br/vacinacao/calendario"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 rounded-lg p-6 text-center transition-colors group no-underline"
              >
                <Calendar className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2 no-underline">Calendário de Vacinação</h3>
                <ExternalLink className="w-4 h-4 text-white group-hover:text-white mx-auto" />
              </a>
              
              <a
                href="https://www.gov.br/saude/pt-br/vacinacao/esavi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 rounded-lg p-6 text-center transition-colors group no-underline"
              >
                <Shield className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2 no-underline">Segurança das Vacinas</h3>
                <ExternalLink className="w-4 h-4 text-white group-hover:text-white mx-auto" />
              </a>
              
              <a
                href="https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/guias-e-manuais/2024/manual-dos-centros-de-referencia-para-imunobiologicos-especiais-6a-edicao/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 rounded-lg p-6 text-center transition-colors group no-underline"
              >
                <Download className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2 no-underline">Manual do CRIE 6ª Edição</h3>
                <ExternalLink className="w-4 h-4 text-white group-hover:text-white mx-auto" />
              </a>
              
              <a
                href="https://meususdigital.saude.gov.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 rounded-lg p-6 text-center transition-colors group no-underline"
              >
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2 no-underline">Meu SUS Digital</h3>
                <ExternalLink className="w-4 h-4 text-white group-hover:text-white mx-auto" />
              </a>
              
              <a
                href="https://www.gov.br/saude/pt-br/canais-de-atendimento/ouvsus"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 rounded-lg p-6 text-center transition-colors group no-underline"
              >
                <Users className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2 no-underline">Ouvidoria Geral do SUS</h3>
                <ExternalLink className="w-4 h-4 text-white group-hover:text-white mx-auto" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-300">
              Este site tem caráter educativo e não substitui a orientação médica.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;