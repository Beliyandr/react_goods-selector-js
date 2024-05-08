import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGoodу, setSelectedGoodу] = useState('Jam')

  const selected = (name) => {
    if (name === selectedGoodу) {
      setSelectedGoodу('')
    } else {
      setSelectedGoodу(name)
    }
  }

  const clear = () => {
    setSelectedGoodу('')
  }


  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {selectedGoodу ? selectedGoodу + ' is' : 'No goods'} selected
        {
          selectedGoodу
          &&
          <button data-cy="ClearButton" type="button" className="delete ml-3" onClick={clear} />
        }
      </h1>

      <table className="table">
        <tbody>

          {goods.map(good => {
            return (
              <tr data-cy="Good" className={selectedGoodу === good ? "has-background-success-light" : ''}>
                <td>
                  <button
                    data-cy={selectedGoodу === good ? "RemoveButton" : "AddButton"}
                    type="button"
                    className={selectedGoodу === good ? "button is-info" : "button"}
                    onClick={() => { selected(good) }}
                  >
                    {selectedGoodу === good ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            )
          })}



          {/* <tr data-cy="Good" className="has-background-success-light">
            <td>
              <button
                data-cy="RemoveButton"
                type="button"
                className="button is-info"
              >
                -
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Jam
            </td>
          </tr>

          <tr data-cy="Good">
            <td>
              <button data-cy="AddButton" type="button" className="button">
                +
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Garlic
            </td>
          </tr> */}
        </tbody>
      </table>
    </main>
  );
}
