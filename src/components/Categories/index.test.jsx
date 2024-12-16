import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Categories, CategoriaCard } from './Categories'; 
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../contexts/ThemeContext';


jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

jest.mock('../../contexts/ThemeContext', () => ({
  useTheme: jest.fn(),
}));

describe('Categories Component', () => {
  const mockNavigate = jest.fn();
  const mockTheme = { currentTheme: 'light' }; 

  beforeEach(() => {
    jest.clearAllMocks();
    useNavigation.mockReturnValue({ navigate: mockNavigate });
    useTheme.mockReturnValue(mockTheme);
  });

  it('should render the Categories component', () => {
    const { getByText } = render(<Categories />);
    expect(getByText('Categorias')).toBeTruthy(); 
  });

  it('should render a list of categories', () => {
    const { getByText } = render(<Categories />);

    expect(getByText('Cigarros')).toBeTruthy();
    expect(getByText('Bebidas')).toBeTruthy();
    expect(getByText('Lanches')).toBeTruthy();
    expect(getByText('Doces')).toBeTruthy();
    expect(getByText('Mexicana')).toBeTruthy();
    expect(getByText('Japonesa')).toBeTruthy();
  });

  it('should navigate to the Products screen on category press', () => {
    const { getByText } = render(<Categories />);
    const categoriaButton = getByText('Cigarros');
    
    fireEvent.press(categoriaButton); 

    expect(mockNavigate).toHaveBeenCalledWith('Products', { category: 'Cigarros' });
  });
});

describe('CategoriaCard Component', () => {
  it('should render the CategoriaCard component with correct props', () => {
    const mockOnPress = jest.fn();
    const mockCategoria = { nome: 'Cigarros', imagem: require('../../assets/categories/cigarros.webp') };

    const { getByText } = render(
      <CategoriaCard nome={mockCategoria.nome} imagem={mockCategoria.imagem} onPress={mockOnPress} />
    );

    expect(getByText('Cigarros')).toBeTruthy(); 
  });

  it('should call onPress when clicked', () => {
    const mockOnPress = jest.fn();
    const mockCategoria = { nome: 'Cigarros', imagem: require('../../assets/categories/cigarros.webp') };

    const { getByText } = render(
      <CategoriaCard nome={mockCategoria.nome} imagem={mockCategoria.imagem} onPress={mockOnPress} />
    );

    fireEvent.press(getByText('Cigarros')); 

    expect(mockOnPress).toHaveBeenCalled();
  });
});
