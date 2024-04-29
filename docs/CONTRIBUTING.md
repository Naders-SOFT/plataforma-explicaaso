Contribuições ao projeto
 ==============================

 Leiam antes de fazerem uma contribuição.

Nomes das branches
 ------------------------------
 
 Escolha um nome que indique o propósito da branch, como
 `feat`, `bugfix` ou `docs`.

 Nomes sempre em lowercase.

Padrões de Código
 ------------------------------
 
  É de suma importância que todos contribuindo sigam as convenções
  adotadas nas contribuições.

  A saber:

  * variáveis: `lowerPascalCase`
  * componentes, classes, funçoes e pastas: `PascalCase`
  * constantes: `CAPITALIZED_SAKE_CASE`
  * linhas de código em `javascript` terminam em `;`

 ### Comentários

 Comentem todo trecho que não seja intuitivo ou qualquer componente ambígua.
 O intuito é que todos entendam qualquer trecho de código sem muito esforço.

 ### Convenções de Código

 Ao criarem um componente, se o intuito é que ele não seja diretamente 
 responsivo, adicionem o parâmetro de propriedades nele `const fooComponent(props)
 {return(...);}`, pois ele engloba qualquer outro parâmetro vindo do componente 
 superior - isto é, `props.myProperty` acessa a propriedade definida por você.

 Caso o componente seja diretamente responsivo, ao construir a estrutura do
 componente que o utiliza, passe um atributo transiente `<myComponent $myAttr={props}>`.
 O atributo só será transiente caso tenha o cifrão (`$`) como primeiro caracter,
 prevenindo alertas de código. Além disso, para criar a responsividade, no
 estilo do componente, utilize o atributo como uma condição para a mudança
 do comportamento do componente:
 
 *  `display: ${($isMobile) => ($isMobile ? 'none' : 'inline')};`

 Criar componentes que sejam exclusivamente para *desktop* ou exclusivamente
 para *mobile* só é indicado caso a estrutura do componente mude drasticamente.
 Por exemplo, se em *desktop* quero um `display: grid;` e em *mobile* quero um
 `display: flex;`, talvez seja indicado uma mudança de componente. Caso contrário,
 utilize da condicional com a variável `isMobile`.

 Sempre que possível, evite usar *media query*, a não ser que seja algum comportamento
 específico que aconteça sem que a tela mude para *mobile*.
