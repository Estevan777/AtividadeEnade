import { filtrarVeiculosPorMarca, somarValoresPorMarca, filtrarVeiculosPorAno } from './veiculo';

describe('Testes para manipulação de veículos', () => {
  test('Filtrar veículos por marca', () => {
    const resultado = filtrarVeiculosPorMarca('carros', 'Chevrolet');
    expect(resultado.length).toBe(3);
  });

  test('Somar valores dos veículos por marca', () => {
    const total = somarValoresPorMarca('carros', 'VolksWagen');
    expect(total).toBe(328000); // soma dos valores dos carros da Volkswagen
  });

  test('Filtrar veículos por ano', () => {
    const resultado = filtrarVeiculosPorAno('motos', 2020);
    expect(resultado.length).toBe(3);
  });
});
