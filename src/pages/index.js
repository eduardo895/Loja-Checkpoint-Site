
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Home() {
  return (
    <Layout
      title="Loja Checkpoint – Documentação"
      description="Documentação oficial do app (terminal Python) com filtros avançados, carrinho, comentários e avaliações."
    >
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Loja Checkpoint</h1>
          <p className={styles.subtitle}>
            Documentação do app em terminal (Python). Encontra guias, referências de API e arquitetura.
          </p>
          <div className={styles.ctaRow}>
            <Link className="button button--primary button--lg" to="/Loja-Checkpoint-Site/">
              📚 Abrir Docs
            </Link>
            <Link className="button button--secondary button--lg" to="/Loja-Checkpoint-Site/api/index.html">
              ⚙️ API (pdoc)
            </Link>
            <Link className="button button--outline button--lg" to="https://github.com/Deni-jpg/Loja-Checkpoint">
              💻 Código do App
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className={styles.features}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>🛒 Compras & Carrinho</h3>
            <p>Adicionar/remover itens, ver totais, finalizar compra e consultar histórico.</p>
            <Link to="/Loja-Checkpoint-Site/user/fluxo-compras">Ver fluxo de compras →</Link>
          </div>
          <div className={styles.card}>
            <h3>⭐ Avaliações</h3>
            <p>Avalia produtos já comprados, com média e renderização em estrelas.</p>
            <Link to="/Loja-Checkpoint-Site/user/avaliacoes">Ver avaliações →</Link>
          </div>
          <div className={styles.card}>
            <h3>💬 Comentários</h3>
            <p>Cliente e Admin: criar, aprovar/rejeitar e remover comentários.</p>
            <Link to="/Loja-Checkpoint-Site/user/comentarios">Ver comentários →</Link>
          </div>
          <div className={styles.card}>
            <h3>🧱 Arquitetura</h3>
            <p>Módulos, sessão, UI de terminal, BD (Supabase/Postgres).</p>
            <Link to="/Loja-Checkpoint-Site/dev/estrutura">Ver arquitetura →</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
