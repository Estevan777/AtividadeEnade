import { filtrarVeiculosPorMarca, somarValoresPorMarca, filtrarVeiculosPorAno } from './Veículo';

describe('Testes para a manipulação dos veículos', () => {
  test('Filtrar veículos por marca', () => {
    const resultado = filtrarVeiculosPorMarca('carros', 'Chevrolet');
    expect(resultado.length).toBe(3);
  });

  test('Somar valores de veículos pela marca', () => {
    const total = somarValoresPorMarca('carros', 'VolksWagen');
    expect(total).toBe(328000); // soma dos valores dos carros da Volkswagen
  });

  test('Filtrar veículos pelo ano', () => {
    const resultado = filtrarVeiculosPorAno('motos', 2020);
    expect(resultado.length).toBe(3);
  });
});
