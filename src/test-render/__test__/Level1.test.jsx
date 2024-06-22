// src/test-render/ReactThreeTestRenderer/__tests__/Level1.test.jsx
import * as React from 'react';
import { create } from '@react-three/test-renderer';
import Level1 from '../level1/Level1';
import { createCanvas } from '../createTestCanvas';

test('renders Level1 component', async () => {
  const canvas = createCanvas();
  document.body.appendChild(canvas);

  const renderer = await create(<Level1 />);
  const scene = renderer.scene;
  //expect(renderer.toTree()).toMatchSnapshot();

  expect(scene).toBeDefined();
  
});
