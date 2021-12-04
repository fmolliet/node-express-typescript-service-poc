import CacheProvider from '../../src/config/CacheProvider';
jest.mock('../../src/config/CacheProvider'); 

beforeEach(() => {
    // Limpa todas as instâncias e chamadas de construtor e todos os métodos:
    CacheProvider.mockClear();
});
  

it('Nós podemos verificar se o consumidor chamou o construtor de classe', () => {
    const cacheProvider = new CacheProvider();
    expect(CacheProvider).toHaveBeenCalledTimes(1);
});