import React from 'react';
import "@testing-library/jest-dom";
import { render, fireEvent } from '@testing-library/react';
import AudioPlayer from '../../../app/component/AudioPlayer';

// Stupid basic we'll test more later if ever needed.
describe('AudioPlayer', () => {
  it('renders without crashing', () => {
    // Arrange
    const { container } = render(<AudioPlayer url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />);
    const audioElement = container.querySelector('audio');
    const audioButton = container.querySelector('button');

    // Assert
    expect(audioElement).toBeInTheDocument();
    expect(audioButton).toBeInTheDocument();
  });
});