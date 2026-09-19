// scripts/arrayDemo.js
const candidatos = [
  { id: 1, nome: 'Ana Souza', numero: '10' },
  { id: 2, nome: 'Bruno Lima', numero: '20' },
  { id: 3, nome: 'Carla Dias', numero: '30' },
]

const votos = [
  { id: 1, candidatoId: 1 },
  { id: 2, candidatoId: 1 },
  { id: 3, candidatoId: 2 },
]

console.log('1. map: MESMO tamanho, cada item transformado')
const nomes = candidatos.map((candidato) => candidato.nome)
console.log('   candidatos.length:', candidatos.length)
console.log('   nomes.length:    ', nomes.length)
console.log('   nomes:', nomes)

console.log('2. filter: MENOS itens, nenhum transformado')
const votosDaAna = votos.filter((voto) => voto.candidatoId === 1)
console.log('   votos.length:      ', votos.length)
console.log('   votosDaAna.length: ', votosDaAna.length)
console.log('   votosDaAna:', votosDaAna)

console.log('3. o original nunca muda')
console.log('   votos.length depois do filter:', votos.length)
