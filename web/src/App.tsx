import React from 'react';
import logo from './logo.svg';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <h1>Produtos</h1>
          <button>Adicionar Produto</button>
        </nav>
      </header>
      <main>
        <table className={styles.table}>
          <tr className={styles.index_table}>
            <th
              style={{
                width: '222px'
              }}
            >
              Nome
            </th>
            <th
              style={{
                width: '458px'
              }}
            >
              Categoria
            </th>
            <th
              style={{
                width: '174px'
              }}
            >
              Preço
            </th>
            <th
              style={{
                width: '174px'
              }}
            >
              Data de criação
            </th>
            <th
              style={{
                width: '174px'
              }}
            >
              Ações
            </th>
          </tr>
          <tr>
            <td>Banana</td>
            <td>Frutas</td>
            <td
              style={{
                textAlign: 'right',
                paddingRight: '5px'
              }}
            >
              R$9,99
            </td>
            <td
              style={{
                textAlign: 'right',
                paddingRight: '5px'
              }}
            >
              27/10/2022
            </td>
            <td
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingLeft: '5px'
              }}
            >
              <AiFillDelete />
              <MdModeEdit />
            </td>
          </tr>
        </table>
      </main>
    </div>
  );
}

export default App;
