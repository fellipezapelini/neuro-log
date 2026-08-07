import React from 'react';

function LegalDocs() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6 font-sans text-slate-700">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[40px] shadow-xl border border-slate-200">
        <div className="text-center mb-12 border-b border-slate-200 pb-8">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Documentação Legal</h1>
          <p className="text-lg text-slate-500">Termos de Uso e Política de Privacidade do NeuroLog</p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#092c77] mb-6">Política de Privacidade – NeuroLog</h2>

          <p className="mb-4 leading-relaxed">
            A presente Política de Privacidade tem por finalidade demonstrar o compromisso de{' '}
            <strong>Fellipe Valentino Zapelini</strong>, pessoa física, com domicílio em Londrina/PR, inscrito(a) no CPF
            sob o nº <strong>[removido]</strong>, titular e responsável legal pela plataforma{' '}
            <strong>NeuroLog</strong>, com a privacidade e a proteção dos dados pessoais coletados de seus USUÁRIOS
            (médicos, profissionais de saúde e clínicas) e dos dados de PACIENTES inseridos no sistema.
          </p>

          <p className="mb-8 leading-relaxed">
            Como condição para acesso e uso das funcionalidades do NeuroLog, o USUÁRIO declara que fez a leitura completa
            e atenta da presente Política de Privacidade, estando plenamente ciente e conferindo sua livre e expressa
            concordância com os termos aqui estipulados.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Papel das Partes (Controlador e Operador)</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <strong>O USUÁRIO (Médico/Clínica):</strong> É o <strong>Controlador</strong> dos dados de seus pacientes.
              É o responsável por coletar o consentimento do paciente no momento do atendimento.
            </li>
            <li>
              <strong>O NeuroLog:</strong> Atua como <strong>Operador</strong> dos dados dos pacientes inseridos na
              plataforma pelo USUÁRIO, processando-os apenas para o fornecimento do serviço de prontuário eletrônico e
              suporte de IA. O NeuroLog atua como <strong>Controlador</strong> apenas em relação aos dados cadastrais e
              financeiros do próprio USUÁRIO.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Coleta e Uso de Dados</h3>

          <p className="font-semibold mt-4">2.1. Dados do Usuário (Profissional de Saúde/Clínica):</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Obrigatórios:</strong> Nome, e-mail, telefone, CRM/CRF, especialidade e dados de pagamento (cartão
              de crédito/débito e Pix).
            </li>
            <li>
              <strong>Finalidade:</strong> Identificação, autenticação, cobrança pelo uso do software e suporte técnico.
            </li>
          </ul>

          <p className="font-semibold mt-4">2.2. Dados do Paciente (Inseridos pelo Usuário):</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <strong>Dados:</strong> Nome, CPF, contato, histórico médico, anamnese, exames, diagnósticos e prescrições.
            </li>
            <li>
              <strong>Finalidade:</strong> Gestão de prontuário eletrônico, geração de prescrições via integração e
              processamento por Inteligência Artificial para auxílio ao médico.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Armazenamento e Segurança</h3>
          <p className="mb-2">
            <strong>3.1.</strong> Os dados são armazenados em servidores de alta segurança da{' '}
            <strong>Hostinger</strong>, utilizando protocolos de segurança, criptografia e rotinas de backup para
            garantir a integridade das informações.
          </p>
          <p className="mb-6">
            <strong>3.2.</strong> O NeuroLog aplica medidas técnicas para proteger os dados de acessos não autorizados. O
            USUÁRIO é corresponsável pelo sigilo das suas credenciais de acesso (login e senha).
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Compartilhamento de Dados</h3>
          <p className="mb-2">Os dados não são comercializados. São compartilhados exclusivamente:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              Com a <strong>Memed</strong>, apenas os dados necessários para a emissão de receitas e atestados.
            </li>
            <li>
              Com a infraestrutura da <strong>Hostinger</strong> e serviços de IA integrados, sob termos de
              confidencialidade.
            </li>
            <li>Mediante ordem judicial.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Retenção e Eliminação</h3>
          <p className="mb-2">
            <strong>5.1.</strong> Os dados são mantidos enquanto a assinatura estiver ativa.
          </p>
          <p className="mb-6">
            <strong>5.2.</strong> Após o cancelamento, o USUÁRIO terá <strong>30 dias</strong> para exportar os
            prontuários. A guarda definitiva do prontuário médico é de responsabilidade legal do médico/clínica, conforme
            normas do CFM.
          </p>
        </section>

        <hr className="border-slate-200 my-12" />

        <section>
          <h2 className="text-3xl font-bold text-[#092c77] mb-6">Termos de Uso – NeuroLog</h2>
          <p className="mb-8 leading-relaxed">
            Ao utilizar a plataforma NeuroLog, você ("USUÁRIO") concorda com as seguintes condições:
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Objetivo da Plataforma</h3>
          <p className="mb-6">
            O NeuroLog é um software SaaS que oferece gestão de prontuários eletrônicos, recursos de Inteligência
            Artificial para apoio à decisão clínica, agenda e integração com a Memed para prescrições.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
            2. Responsabilidade Médica e Inteligência Artificial
          </h3>
          <p className="mb-2">
            <strong>2.1.</strong> A IA do NeuroLog é uma <strong>ferramenta de apoio</strong>. Ela sugere insights e
            organiza dados, mas <strong>não substitui</strong> o julgamento do profissional de saúde.
          </p>
          <p className="mb-6">
            <strong>2.2.</strong> O USUÁRIO (médico) é o único e integral responsável por validar qualquer sugestão da IA
            antes de aplicá-la, assumindo toda a responsabilidade ética e legal pelo diagnóstico e tratamento. O titular
            do NeuroLog exime-se de qualquer responsabilidade por decisões clínicas.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Integração com Terceiros (Memed)</h3>
          <p className="mb-6">
            O NeuroLog integra-se com a Memed para prescrições. O USUÁRIO aceita que falhas técnicas ou
            indisponibilidades da Memed são de responsabilidade dessa empresa terceira, não cabendo ao NeuroLog garantir
            o funcionamento ininterrupto de serviços externos.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Pagamentos e Cancelamentos</h3>
          <p className="mb-2">
            <strong>4.1.</strong> O acesso é via assinatura paga por <strong>Cartão de Crédito/Débito ou Pix</strong>.
            Não aceitamos boletos bancários.
          </p>
          <p className="mb-2">
            <strong>4.2.</strong> O atraso no pagamento implica a suspensão temporária do acesso.
          </p>
          <p className="mb-6">
            <strong>4.3. Direito de Arrependimento:</strong> O reembolso integral pode ser solicitado em até 7 dias após
            a primeira compra. Após esse prazo, o cancelamento evita renovações, mas não gera devolução proporcional.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Disponibilidade e Hospedagem</h3>
          <p className="mb-6">
            O sistema é hospedado na <strong>Hostinger</strong>. Embora busquemos 100% de disponibilidade, o NeuroLog não
            se responsabiliza por quedas decorrentes de manutenção da hospedagem, falhas globais de internet ou eventos
            de força maior.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Foro</h3>
          <p className="mb-6">
            Fica eleito o foro da comarca de Londrina/PR para dirimir questões sobre este documento.
          </p>
        </section>
      </div>
    </div>
  );
}

export default LegalDocs;