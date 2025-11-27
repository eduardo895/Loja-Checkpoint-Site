import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Loja Checkpoint"
      description="Aplicação de loja digital desenvolvida em Python">
      
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">Loja Checkpoint</h1>
          <p className="hero__subtitle">
            A tua loja de videojogos em Python — simples, rápida e funcional.
          </p>

          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Começar
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/Deni-jpg/Loja-Checkpoint"
            >
              Ver no GitHub
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className="container">
            <h2>Funcionalidades principais</h2>
            <ul>
              <li>Autenticação (login e registo)</li>
              <li>Carrinho de compras</li>
              <li>Wishlist</li>
              <li>Comentários e avaliações</li>
              <li>Histórico detalhado de compras</li>
              <li>Integração com Supabase</li>
            </ul>
          </div>
        </section>
      </main>

    </Layout>
  );
}
