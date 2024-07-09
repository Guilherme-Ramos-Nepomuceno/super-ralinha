```jsx


const [modalidade, setModalidade] = React.useState('')

// Futevolei

<div>
  <button onClick={() => setModalidade('futevolei')}>
    <Image src="" /> 
  </button>

  <div>
    <div>
      <h1>Data</h1>
      <h5>{modalidade === '' ? 'Clique na modalidade' : db[modalidade].data}</h5>
    </div>

    <div>
      <h1>Local</h1>
      <h5>{modalidade === '' ? 'Clique na modalidade' : db[modalidade].local}</h5>
    </div>
  </div>

</div>

```