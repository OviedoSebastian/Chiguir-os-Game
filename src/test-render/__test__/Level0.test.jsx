import * as React from 'react';
import { render } from  '@react-three/test-renderer';
import Level0 from '../../pages/level0/Level0';

// Prueba unitaria para Level0
test('renders Level0 component', () => {
  // Renderiza el componente Level0 dentro de un contenedor virtual
  const { getByText } = render(<Level0 />);

  // Verifica que un texto específico esté presente en el componente renderizado
  expect(getByText('Welcome to the Level!')).toBeInTheDocument();
});