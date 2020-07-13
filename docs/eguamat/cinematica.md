# Cinemática

## Velocidade média
Retorna o valor da velocidade média a partir dos valores de entrada da distância e tempo, respectivamente.
```
vmed(distância,tempo)
```

$$ vmed = \frac{Distância}{Tempo} $$

## Espaço percorrido 
Retorna o espaço percorrido baseado na diferença do Espaço Final pelo Espaço Inicial.
```
deltas(espaço inicial, espaço final)
```

$$\varDelta_{S} = {EspaçoFinal - EspaçoInicial}.$$

## Tempo percorrido
Retorna o tempo percorrido baseado na diferença do Tempo Final pelo Tempo Inicial.
```
deltat(tempo inicial, tempo final)
```

$$\varDelta_{t} = {TempoFinal - TempoInicial}.$$

## Aceleração
Retorna o valor da aceleração utilizando como dados de entrada os valores da Velocidade Final, Velocidade Inicial, Tempo Final e Tempo Inicial, respectivamente.
A aceleração é obtida a partir da divisão da diferença das velocidades final e inicial, sobre a difença dos tempos final e inicial.
```
acel(Velocidade Final, Velocidade Inical, Tempo Final, Tempo Inicial)
``` 

$$acel = \frac{VelocidadeFinal-VelocidadeInicial}{TempoFinal - TempoInicial}$$

## Função Horária da Posição (M.R.U) 
Função Horária da Posição no Movimento Retilíneo Uniforme, retorna o valor da posição de um objeto em movimento retilíneo uniforme em um dado instante de tempo.
A posição em dado instante é obtida a partir dos dados de entrada Posição Inicial, Velocidade e Tempo Percorrido, respectivamente.
No EguaMat, esta função gera uma lista com os valores de cada posição em seu respectivo instante no tempo até chegar no instante final que é o valor de tempo inserido na entrada.
```
mrufh(Posição Inicial, Velocidade Final, Tempo)
```

$$EspaçoFinal = {EspaçoInicial +VelocidadeFinal\times Tempo }.$$

## Gráfico para a Função Horária da Posição (M.R.U)
Função Gráfica para a Função Horária da Posição em Movimento Retilíneo Uniforme.
```
mrufhp(Posição Inicial, Velocidade Final, Tempo)
```

$$EspaçoFinal = {EspaçoInicial +VelocidadeFinal\times Tempo }.$$

## Gráfico da velocidade (M.R.U)
Função Gráfica da velocidade em Movimento Retilíneo Uniforme.
```
mruvel(Posição Inicial, Posição Final, Tempo)
```

$$EspaçoFinal = {EspaçoInicial +VelocidadeFinal\times Tempo }.$$

## Função Horária da Posição (M.R.U.V)
Função Horária da Posição em Movimento Retilíneo Uniformemente Variado
```
mruvfh(Posição Inicial, Velocidade Inicial, Tempo, Aceleração)
```

$$EspaçoFinal = {EspaçoInicial +VelocidadeInicial\times Tempo+ \frac{Aceleração \times Tempo^{2}}{2}}.$$

## Gráfico para a Função Horária da Posição (M.R.U.V)
Função Gráfica para a Função Horária da Posição em Movimento Retilíneo Uniformemente Variado.
```
mruvfhp(Posição Inicial, Velocidade Inicial, Tempo, Aceleração)
```

$$EspaçoFinal = {EspaçoInicial +VelocidadeFinal\times Tempo+ \frac{Aceleração \times Tempo^{2}}{2}}.$$

## Gráfico da velocidade (M.R.U.V)
Função Gráfica da velocidade em Movimento Retilíneo Uniformemente Variado.
```
mruvvel(Posição Inicial, Posição Final, Aceleração)
```

$$EspaçoFinal = {EspaçoInicial +VelocidadeFinal\times Tempo+ \frac{Aceleração \times Tempo^{2}}{2}}.$$
