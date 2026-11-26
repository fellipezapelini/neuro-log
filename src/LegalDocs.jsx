import React from 'react';

// Versão dos documentos: precisa ser a mesma de VERSAO_TERMOS no sistema
// (config/neurolog.php). Ao mudar, todos os usuários aceitam de novo no próximo acesso.
const VERSAO = '2026-11-26';
const VIGENCIA = '26 de novembro de 2026';
const EMAIL = 'neurolog.med.br@gmail.com';
const WHATSAPP = '(43) 97400-0934';

const H2 = ({ id, children }) => (
  <h2 id={id} className="text-3xl font-bold text-[#092c77] mb-6 scroll-mt-8">{children}</h2>
);
const H3 = ({ children }) => <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">{children}</h3>;
const P = ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>;
const UL = ({ children }) => <ul className="list-disc pl-6 space-y-2 mb-6">{children}</ul>;

// Fornecedores que tratam dados (suboperadores): [nome, finalidade, dados, onde]
const SUBOPERADORES = [
  ['Hostinger', 'Hospedagem do sistema e do banco de dados', 'Todos os dados do sistema', 'Brasil / internacional'],
  ['Google (Gemini API)', 'Inteligência Artificial de apoio ao médico', 'Texto clínico enviado pelo médico, com identificadores removidos automaticamente', 'Estados Unidos e outros'],
  ['Google (Google Drive)', 'Guarda das cópias de segurança', 'Cópia do banco de dados, criptografada (AES-256) antes do envio', 'Estados Unidos e outros'],
  ['Memed', 'Emissão de receitas digitais', 'Dados do paciente necessários à receita', 'Brasil'],
  ['Brevo', 'Envio de e-mails do sistema', 'Nome e e-mail do usuário', 'União Europeia'],
  ['Infobip', 'SMS de verificação do celular no cadastro', 'Telefone do usuário', 'Internacional'],
  ['Pusher', 'Comunicação em tempo real (avisos e sinalização da teleconsulta)', 'Identificadores técnicos da sessão', 'Internacional'],
  ['Cloudflare', 'Retransmissão da chamada de vídeo quando a conexão direta não é possível', 'Áudio e vídeo criptografados, sem gravação', 'Internacional'],
  ['Discord', 'Aviso interno de novos cadastros, para conferência manual do CRM', 'Nome, e-mail, telefone, CRM e especialidade do médico (nunca dados de pacientes)', 'Estados Unidos'],
  ['Google (Tag Manager / Ads)', 'Medição de visitas e campanhas no site de apresentação', 'Cookies e dados de navegação no site (não no sistema)', 'Estados Unidos e outros'],
];

function LegalDocs() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 font-sans text-slate-700">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 md:p-16 rounded-[40px] shadow-xl border border-slate-200">
        <div className="text-center mb-10 border-b border-slate-200 pb-8">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Documentação Legal</h1>
          <p className="text-lg text-slate-500">Política de Privacidade, Termos de Uso e Acordo de Tratamento de Dados do NeuroLog</p>
          <p className="text-sm text-slate-400 mt-3">Versão {VERSAO} · vigente desde {VIGENCIA}</p>
          <nav className="flex flex-wrap justify-center gap-3 mt-6 text-sm font-bold">
            <a href="#privacidade" className="text-[#092c77] hover:underline">Política de Privacidade</a>
            <span className="text-slate-300">·</span>
            <a href="#termos" className="text-[#092c77] hover:underline">Termos de Uso</a>
            <span className="text-slate-300">·</span>
            <a href="#tratamento" className="text-[#092c77] hover:underline">Acordo de Tratamento de Dados</a>
          </nav>
        </div>

        {/* ───────────────────────── POLÍTICA DE PRIVACIDADE ───────────────────────── */}
        <section className="mb-16">
          <H2 id="privacidade">Política de Privacidade</H2>

          <P>
            Esta Política explica como o <strong>NeuroLog</strong>, plataforma de prontuário eletrônico, agenda e
            teleconsulta, trata dados pessoais de seus <strong>USUÁRIOS</strong> (médicos, profissionais de saúde,
            clínicas e suas secretárias) e dos <strong>PACIENTES</strong> cujos dados os USUÁRIOS registram no sistema,
            conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018 – LGPD).
          </P>

          <H3>1. Quem somos e como falar conosco</H3>
          <P>
            O NeuroLog é mantido por <strong>Fellipe Valentino Zapelini</strong>, em Londrina/PR, que também atua como{' '}
            <strong>Encarregado pelo Tratamento de Dados Pessoais</strong>. Pedidos sobre dados pessoais, dúvidas e
            comunicações de incidentes: e-mail{' '}
            <a href={`mailto:${EMAIL}`} className="text-[#092c77] font-bold">{EMAIL}</a> ou WhatsApp {WHATSAPP}.
            Respondemos em até 15 dias.
          </P>

          <H3>2. Papel de cada parte</H3>
          <UL>
            <li>
              <strong>O USUÁRIO (médico ou clínica) é o Controlador</strong> dos dados dos seus pacientes: decide o que
              registrar e para quê, e responde perante o paciente e as autoridades.
            </li>
            <li>
              <strong>O NeuroLog é Operador</strong> desses dados: trata-os somente para prestar o serviço contratado e
              conforme as instruções do USUÁRIO (detalhes no Acordo de Tratamento de Dados, abaixo).
            </li>
            <li>
              <strong>O NeuroLog é Controlador</strong> apenas dos dados de cadastro, acesso e contratação dos próprios
              USUÁRIOS.
            </li>
          </UL>

          <H3>3. Dados tratados, finalidades e bases legais</H3>
          <P>
            <strong>3.1. Dados dos USUÁRIOS</strong>: nome, CPF, e-mail, celular, data de nascimento, sexo, CRM/UF,
            especialidade, RQE e dados de acesso (data, hora e IP das entradas).
          </P>
          <UL>
            <li>Finalidades: criar e proteger a conta, confirmar que o médico tem registro ativo no CRM, prestar suporte, cobrar a assinatura e cumprir obrigações legais.</li>
            <li>Bases legais: execução de contrato, cumprimento de obrigação legal e legítimo interesse na segurança da plataforma (art. 7º, II, V e IX da LGPD).</li>
            <li>O NeuroLog <strong>não guarda número de cartão</strong>. Pagamentos são feitos pelos meios informados na contratação.</li>
          </UL>
          <P>
            <strong>3.2. Dados dos PACIENTES</strong> (registrados pelo USUÁRIO): identificação e contato, convênio,
            agenda, anamnese, exame, sinais vitais, hipóteses diagnósticas, condutas, receitas, atestados e demais
            registros do prontuário.
          </P>
          <UL>
            <li>Finalidades: manter o prontuário eletrônico, organizar a agenda, emitir documentos e permitir a teleconsulta.</li>
            <li>
              Base legal: <strong>tutela da saúde</strong>, em procedimento realizado por profissional de saúde (art. 11,
              II, “f” da LGPD), e cumprimento da obrigação legal de guarda do prontuário. Para o atendimento em si não é
              necessário consentimento do paciente.
            </li>
            <li>
              <strong>Inteligência Artificial:</strong> o recurso de IA é opcional e de apoio ao médico, e o sistema pede o
              registro da autorização do paciente antes de usá-lo. Antes do envio ao fornecedor de IA, o sistema remove
              automaticamente CPF, telefone, e-mail, datas, RG, CEP e número do Cartão SUS. O médico não deve escrever o
              nome do paciente no texto enviado à IA.
            </li>
          </UL>
          <P>
            <strong>3.3. Visitantes do site</strong>: o site de apresentação (neurolog.med.br) usa cookies de medição e de
            campanhas (Google Tag Manager/Ads). O sistema (sistema.neurolog.med.br) usa apenas o armazenamento necessário
            para manter a sessão do usuário.
          </P>

          <H3>4. Com quem os dados são compartilhados</H3>
          <P>
            Os dados <strong>não são vendidos nem usados para publicidade</strong>. Eles são tratados pelos fornecedores
            abaixo (suboperadores), apenas no necessário para cada finalidade, ou mediante ordem judicial ou requisição de
            autoridade competente.
          </P>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="p-2 border-b">Fornecedor</th>
                  <th className="p-2 border-b">Para quê</th>
                  <th className="p-2 border-b">Dados</th>
                  <th className="p-2 border-b">Onde</th>
                </tr>
              </thead>
              <tbody>
                {SUBOPERADORES.map(([nome, para, dados, onde]) => (
                  <tr key={nome} className="align-top border-b border-slate-100">
                    <td className="p-2 font-bold">{nome}</td>
                    <td className="p-2">{para}</td>
                    <td className="p-2">{dados}</td>
                    <td className="p-2">{onde}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            <strong>Transferência internacional:</strong> parte desses fornecedores processa dados fora do Brasil. Nesses
            casos, a transferência se apoia nas cláusulas contratuais e nas garantias de proteção oferecidas por cada
            fornecedor (art. 33 da LGPD). Os USUÁRIOS serão avisados com antecedência sobre a inclusão de novos
            fornecedores que tratem dados de pacientes.
          </P>

          <H3>5. Como protegemos os dados</H3>
          <UL>
            <li>Conexão sempre criptografada (HTTPS) e senhas guardadas de forma irreversível (hash com salt).</li>
            <li>Senhas fortes, bloqueio da conta após tentativas erradas e encerramento automático da sessão por inatividade.</li>
            <li>Perfis de acesso: a secretária acessa agenda e cadastro, mas não o conteúdo clínico.</li>
            <li>
              <strong>Trilha de auditoria</strong> que registra entradas, prontuários abertos, alterações, impressões e
              exportações, com proteção contra alteração. O médico consulta a atividade da própria conta.
            </li>
            <li>Registros finalizados do prontuário não são apagados: correções são feitas por errata, e inativações exigem justificativa.</li>
            <li>Cópia de segurança diária, criptografada (AES-256) e guardada em local separado do servidor.</li>
            <li>
              O certificado digital A1, quando cadastrado pelo médico para assinar documentos, é guardado criptografado
              junto com a respectiva senha, apenas para permitir a assinatura pelo sistema, e pode ser removido pelo médico
              a qualquer momento.
            </li>
          </UL>
          <P>
            O USUÁRIO é responsável por manter sua senha em sigilo, não compartilhar o acesso, encerrar a sessão em
            computadores de uso comum e dar acesso individual a cada pessoa da sua equipe.
          </P>

          <H3>6. Por quanto tempo os dados são guardados</H3>
          <UL>
            <li>
              <strong>Prontuário:</strong> no mínimo <strong>20 anos</strong> a partir do último registro (Lei 13.787/2018).
              O NeuroLog não apaga prontuários.
            </li>
            <li>
              <strong>Após o fim da assinatura:</strong> os prontuários continuam guardados, com as mesmas medidas de
              segurança. O USUÁRIO pode pedir a qualquer momento a <strong>entrega de uma cópia completa</strong> em
              formato legível, para assumir a guarda. Depois da entrega confirmada pelo USUÁRIO, a eliminação segue o
              pedido dele e o que a lei permitir.
            </li>
            <li><strong>Trilha de auditoria e dados de acesso:</strong> guardados pelo mesmo prazo do prontuário, por servirem de prova da integridade dos registros.</li>
            <li><strong>Dados de cadastro do USUÁRIO:</strong> enquanto houver conta ou obrigação legal. Contas são desativadas, e não apagadas, enquanto houver prontuários sob guarda.</li>
          </UL>

          <H3>7. Direitos dos titulares</H3>
          <P>
            Os titulares podem pedir confirmação do tratamento, acesso, correção, portabilidade, informação sobre
            compartilhamentos e, quando cabível, eliminação ou revogação de consentimento (art. 18 da LGPD). Por
            obrigação legal, os dados do prontuário não podem ser eliminados antes do fim do prazo de guarda.
          </P>
          <UL>
            <li><strong>Pacientes</strong> devem fazer o pedido ao médico ou à clínica que os atendeu (Controlador). O NeuroLog apoia o USUÁRIO no atendimento desses pedidos.</li>
            <li><strong>USUÁRIOS</strong> podem fazer o pedido diretamente pelo e-mail do Encarregado.</li>
            <li>Também é possível peticionar à Autoridade Nacional de Proteção de Dados (ANPD).</li>
          </UL>

          <H3>8. Incidentes de segurança</H3>
          <P>
            Se houver incidente que possa causar risco ou dano relevante, o NeuroLog avisará o USUÁRIO afetado em até 48
            horas da ciência, com as informações disponíveis, e apoiará as comunicações à ANPD e aos titulares, nos prazos
            da regulamentação.
          </P>

          <H3>9. Alterações desta Política</H3>
          <P>Mudanças relevantes geram nova versão, com data. O sistema pede novo aceite no primeiro acesso após a mudança.</P>
        </section>

        {/* ───────────────────────────── TERMOS DE USO ───────────────────────────── */}
        <section className="mb-16">
          <H2 id="termos">Termos de Uso</H2>
          <P>Ao criar uma conta ou usar o NeuroLog, o USUÁRIO concorda com estes Termos e com a Política de Privacidade acima.</P>

          <H3>1. O serviço</H3>
          <P>
            O NeuroLog é um software oferecido pela internet (SaaS) para prontuário eletrônico, agenda, emissão de
            documentos, teleconsulta, integração com a Memed e recursos de Inteligência Artificial de apoio. O NeuroLog não
            presta serviço médico.
          </P>

          <H3>2. Cadastro e acesso</H3>
          <UL>
            <li>O cadastro é pessoal e exige dados verdadeiros, e-mail e celular confirmados e registro ativo no Conselho Regional de Medicina, conferido manualmente.</li>
            <li>Antes da conferência do CRM, receitas, assinatura digital e Memed ficam indisponíveis.</li>
            <li>
              O médico pode cadastrar <strong>secretárias</strong>, cada uma com acesso individual. O médico responde pelos
              acessos que concede e deve removê-los quando a pessoa deixar a equipe.
            </li>
          </UL>

          <H3>3. Responsabilidade médica e Inteligência Artificial</H3>
          <UL>
            <li>O conteúdo do prontuário, os diagnósticos, as condutas e os documentos emitidos são de responsabilidade do médico.</li>
            <li>A IA apenas sugere e organiza informações e não substitui o julgamento clínico. Toda sugestão deve ser conferida pelo médico antes de qualquer uso.</li>
          </UL>

          <H3>4. Teleconsulta</H3>
          <P>
            Ao usar a teleconsulta, o médico deve seguir as normas do CFM sobre telemedicina (Resolução CFM 2.314/2022),
            incluindo o consentimento do paciente e o registro do atendimento no prontuário. As chamadas não são gravadas
            pelo NeuroLog.
          </P>

          <H3>5. Assinatura digital e integrações</H3>
          <UL>
            <li>A guarda e a validade do certificado digital são responsabilidade do médico titular.</li>
            <li>A Memed e os demais serviços integrados têm termos próprios; indisponibilidades desses serviços fogem ao controle do NeuroLog.</li>
          </UL>

          <H3>6. Usos proibidos</H3>
          <UL>
            <li>Compartilhar senhas ou permitir que terceiros usem a conta.</li>
            <li>Acessar dados de pacientes sem necessidade assistencial ou registrar informações falsas.</li>
            <li>Tentar burlar mecanismos de segurança, sobrecarregar o sistema ou copiar o software.</li>
          </UL>

          <H3>7. Planos, pagamento e cancelamento</H3>
          <UL>
            <li>Novas contas têm período de teste gratuito de 14 dias. Depois disso, o uso depende de assinatura, nos valores e meios de pagamento informados na contratação.</li>
            <li>A falta de pagamento suspende o acesso, sem apagar os dados.</li>
            <li>O USUÁRIO pode desistir da primeira contratação em até 7 dias, com devolução integral (art. 49 do Código de Defesa do Consumidor). Depois disso, o cancelamento impede novas cobranças.</li>
            <li>Após o cancelamento, os prontuários continuam guardados conforme o item 6 da Política de Privacidade.</li>
          </UL>

          <H3>8. Disponibilidade</H3>
          <P>
            Buscamos manter o sistema sempre disponível, com cópias de segurança diárias. Podem ocorrer interrupções por
            manutenção, falhas de fornecedores, de internet ou de força maior. Manutenções programadas serão avisadas sempre
            que possível.
          </P>

          <H3>9. Suspensão de contas</H3>
          <P>
            Contas podem ser suspensas em caso de violação destes Termos, suspeita de uso indevido ou CRM não confirmado,
            sempre preservando os prontuários e o direito do USUÁRIO de pedir a entrega dos seus dados.
          </P>

          <H3>10. Responsabilidade</H3>
          <P>
            O NeuroLog responde pelos danos que causar na prestação do serviço, nos limites da lei. Não responde por
            decisões clínicas, por informações registradas pelo USUÁRIO nem por danos causados pelo uso indevido de
            credenciais sob guarda do USUÁRIO.
          </P>

          <H3>11. Alterações e foro</H3>
          <P>
            Alterações destes Termos geram nova versão, com data, e novo aceite no sistema. Fica eleito o foro da comarca de
            Londrina/PR, ressalvado o foro do domicílio do USUÁRIO quando a lei assim garantir.
          </P>
        </section>

        {/* ────────────────────── ACORDO DE TRATAMENTO DE DADOS ────────────────────── */}
        <section>
          <H2 id="tratamento">Acordo de Tratamento de Dados (Controlador e Operador)</H2>
          <P>
            Este Acordo integra os Termos de Uso e regula o tratamento, pelo NeuroLog (Operador), dos dados de pacientes
            registrados pelo USUÁRIO (Controlador), conforme o art. 39 da LGPD.
          </P>
          <UL>
            <li><strong>Instruções:</strong> o NeuroLog trata os dados apenas para prestar o serviço e conforme as instruções do USUÁRIO, dadas pelo uso do sistema ou por escrito.</li>
            <li><strong>Sigilo:</strong> só pessoas autorizadas e comprometidas com sigilo acessam a infraestrutura, e apenas quando necessário, como no suporte pedido pelo USUÁRIO ou na correção de falhas.</li>
            <li><strong>Segurança:</strong> são mantidas as medidas descritas no item 5 da Política de Privacidade.</li>
            <li><strong>Suboperadores:</strong> o USUÁRIO autoriza os fornecedores listados no item 4 da Política. Novos fornecedores que tratem dados de pacientes serão comunicados com antecedência, e o USUÁRIO poderá encerrar o contrato se discordar.</li>
            <li><strong>Incidentes:</strong> aviso ao USUÁRIO em até 48 horas da ciência, com apoio às comunicações devidas.</li>
            <li><strong>Direitos dos titulares:</strong> o NeuroLog apoia o USUÁRIO no atendimento a pedidos de pacientes, inclusive com a exportação dos dados.</li>
            <li><strong>Fim do contrato:</strong> quando pedido, o NeuroLog entrega ao USUÁRIO cópia completa dos prontuários em formato legível, e mantém a guarda pelo prazo legal enquanto ela não for assumida pelo USUÁRIO.</li>
            <li><strong>Prestação de contas:</strong> quando pedido, o NeuroLog fornece as informações necessárias para demonstrar o cumprimento deste Acordo, incluindo extratos da trilha de auditoria da conta do USUÁRIO.</li>
          </UL>
        </section>

        <p className="text-xs text-slate-400 mt-12 text-center">
          NeuroLog · Londrina/PR · {EMAIL} · Versão {VERSAO}
        </p>
      </div>
    </div>
  );
}

export default LegalDocs;
