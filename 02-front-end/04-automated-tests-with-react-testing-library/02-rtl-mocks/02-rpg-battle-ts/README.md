# Boas-vindas ao exercício Trybe RPG Battle

---

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

- Crie um fork desse projeto. Para isso, siga este [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

- Após fazer o fork, clone o repositório criado para seu computador.

- Rode o comando `npm install`.

- Vá para a branch `main` de seu projeto e execute o comando `git branch` ou `git branch -a`.

> 💡 Observe o que deve ser feito nas instruções para cada exercício.

</details>

<br />

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento</strong></summary><br />

Após a solução dos exercícios, abra um PR em seu repositório forkado e, se quiser, mergeie para a `main`. Sinta-se à vontade!

**Atenção**: Ao criar o PR, você vai se deparar com esta tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Para isso, clique no _base repository_, assim como na imagem a seguir.

![Mudando a base do repositório](images/change-base.png)

Mude para seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo, a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora, basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

> 💡 Realize esse processo para cada PR que abrir.

</details>

<br />


<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Nesse repositório, você encontra uma aplicação React funcionando que simula, de maneira simplificada, como funciona uma batalha de RPG, na qual você pode escolher atacar vários personagens.

Além disso, antes de atacar, você pode configurar quantos e qual o tamanho dos dados que você quer rolar contra seus inimigos. Após o ataque, você saberá se venceu ou se teve uma derrota. 

Neste exercício, além das batalhas épicas contra personagens famosos, você terá o desafio de criar testes para as funções que geram os números aleatórios e para as requisições feitas à API externa. Prepare seu D20 e comece esta aventura!

Verifique com atenção a implementação das funções a seguir, pois você vai desenvolver testes para elas:

- `service/rollDice.ts`
- `service/rollMultipleDice.ts`
- `service/attackEnemy.ts`

</details>

<br />

# Exercícios

## Exercício 1

Verifique o arquivo `service/rollDice.ts`. Ele implementa uma função `rollDice`, a qual faz uma simulação como se uma pessoa estivesse rolando um dado. Ou seja, a função retorna um número aleatório entre 1 e o valor máximo do dado (definido por meio de um parâmetro chamado `size`).

Para gerar o número aleatório, é usada a função `Math.random`, além de alguns outros cálculos para garantir que o número esteja dentro do intervalo estabelecido.

Testar o retorno de uma função que usa valores randômicos não é possível, já que seu resultado não é previsível - a menos que você utilize um `mock` para ter o controle desses valores aleatórios.

<details>
  <summary>Crie os testes para a função <code>rollDice</code> do arquivo <code>service/dice.ts</code>.</summary><br />
  
- Considere um dado de tamanho 20 para este teste.
- Crie um mock para a função `Math.random`, de modo que a função `rollDice` sempre retorne o número 16.
- Teste se o valor retornado pela função é igual a 16.
- Teste se a função `Math.random` foi chamada uma única vez.

</details>

## Exercício 2

Dentro do arquivo `service/rollMultipleDice.ts` existe a função `rollMultipleDice`, que simula como se a pessoa estivesse rolado vários dados ao mesmo tempo. Ela recebe como parâmetro quantos dados foram rolados e qual o tamanho dos dados. Para gerar o valor de cada dado, a função `rollMultipleDice` usa internamente a função `rollDice`.

<details>
  <summary>Crie os testes para a função <code>rollMultipleDice</code> que é exportada no arquivo <code>service/rollMultipleDice.ts</code></summary><br />

- Use o `jest.mock` para *mockar* o módulo `service/rollDice`. Lembre-se de passar como argumento o caminho do arquivo.
- A função `rollDice` deverá ser *mockada* de modo que a primeira vez que ela for chamada deverá retornar `6` e, da segunda vez em que ela for chamada, deverá retornar `4`.
- Considere um dado de tamanho 20 para este teste.
- Verifique se o valor retornado pela função `rollMultipleDice` é a somatória de `6` + `4`, ou seja, `10`.
- Verifique se a função `rollDice` foi chamada duas vezes.

</details>

## Exercício 3
A função `attackEnemy` simula um ataque a um inimigo. Ainda, ela compara os resultados dos dados que você rolou (da função `rollMultipleDice`) com a defesa do inimigo.

- A função `attackEnemy` recebe **3 argumentos**: `diceQuantity`, `diceSize` e um objeto `enemy`.
  - Esse é um exemplo de `enemy`: 
    ```javascript 
    const enemy = {
      id: 1,
      name: "Chapolin Colorado",
      source: "Chaves",
      defensePoints: 30
    }
    ``` 
- O **retorno** dessa função é um objeto que tem a chave `success` - que será `true` ou `false` dependendo do resultado da batalha.  

No exemplo do Chapolin, com 30 pontos de defesa, você precisará tirar nos dados um valor maior que 30 para ganhar. Nesse caso, temos três cenários que podem ser testados: 

1. Você tira nos dados um valor menor que `30` = derrota.
2. Você tira nos dados um valor maior que `30` = vitória.
3. Você tira nos dados um valor igual a `30` = derrota.  

Neste exercício, você deverá testar a função attackEnemy para esses três casos, seguindo os passos a seguir. 

<details>
  <summary>Crie os testes para a função <code>attackEnemy</code>, que é exportada no arquivo <code>service/attackEnemy.ts</code></summary><br />

- Use o  `jest.mock` para *mockar* o módulo `service/rollMultipleDice.ts`. Lembre-se de passar como argumento o caminho do arquivo.
- Em todos os testes você deverá testar o resultado da função `attackEnemy`.

- Crie um teste para o caso de **vitória**:
  - a função `rollMultipleDice` deverá ser *mockada* de modo que a primeira vez que ela for chamada deverá retornar um valor maior do que a defesa do inimigo.
  - o resultado da batalha deverá ser a vitória.
  
- Crie um teste para o caso de **derrota**:
  - a função `rowMultipleDice` deverá ser *mockada* de modo que a primeira vez que ela for chamada deverá retornar um valor menor do que a defesa do inimigo.
  - o resultado da batalha deverá ser a derrota.

- Crie um teste para o caso de **empate nos dados**:
  - a função `rowMultipleDice` deverá ser *mockada* de modo que a primeira vez que ela for chamada deverá retornar um valor igual ao da defesa do inimigo.
  - o resultado da batalha deverá ser a derrota.

</details>

## Exercício 4

Os personagens usados nas batalhas chegam à sua aplicação por meio de uma API. Quando a aplicação é renderizada, uma requisição é feita e uma lista de personagens é preenchida no estado.

Neste exercício, você criará um teste _mockando_ a chamada da API de modo que seja retornada uma lista com apenas um personagem (de seu mock).

<details>
  <summary>Crie um teste renderizando a aplicação e mockando o retorno da API</summary><br />

- Faça um _mock_ na função `fetch` para que a requisição para a API de personagens retorne apenas um personagem.
- Renderize a aplicação e verifique se o nome de seu personagem está sendo exibido na tela. O nome do personagem é renderizado em um elemento `h3`. Dica: use o `getByRole` para pegar esse elemento.

</details>
