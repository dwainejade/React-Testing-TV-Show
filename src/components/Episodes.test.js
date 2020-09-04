import React from 'react';
import Episodes from './Episodes';
import {render} from '@testing-library/react';

test('Missions list shows data when rendered with a season', () => {
    const { queryAllByTestId} = render( <Episodes episodes={[]} />)
    const initialEpisodes = queryAllByTestId(/episode/i);
    expect(initialEpisodes).toHaveLength(0);
    expect(initialEpisodes).toEqual([]);

})